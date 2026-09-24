import subprocess, re

# Read clean content from git show HEAD:index.html
head_html = subprocess.check_output(['git', 'show', 'HEAD:index.html'], cwd='/root/forge-source').decode('utf-8', errors='ignore')

# 1. Critical styles to inject right after <head>
CRITICAL_HEAD_STYLES = """<link rel="stylesheet" href="/aurelius-atelier/assets/css/master_styled.css">
<style>
  html, body {
    background-color: #0c0c0c !important;
    color: #ffffff;
    margin: 0;
    padding: 0;
  }
  .sc-60e682e4-0 {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: grid;
    place-items: center;
    background: #0c0c0c !important;
  }
  /* Preloader permanent dismissal once site is entered */
  html.site-entered .sc-60e682e4-0,
  body.site-entered .sc-60e682e4-0,
  .sc-60e682e4-0.dismissed,
  aside.preloader-dismissed,
  .preloader-dismissed {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }
</style>"""

html = head_html
if '<head>' in html:
    html = html.replace('<head>', '<head>\n' + CRITICAL_HEAD_STYLES)

# 2. Update Videos to 4K Gemini CAS stream
html = html.replace('/aurelius-atelier/assets/videos/hero_desktop_master.mp4', '/aurelius-atelier/assets/videos/hero_desktop_4k.mp4')
html = html.replace('/aurelius-atelier/assets/videos/scroll_desktop_master_intra.mp4', '/aurelius-atelier/assets/videos/scroll_desktop_4k_intra.mp4')
html = html.replace('/aurelius-atelier/assets/videos/hero_mobile_master.mp4', '/aurelius-atelier/assets/videos/hero_mobile.mp4')
html = html.replace('/aurelius-atelier/assets/videos/scroll_mobile_master_intra.mp4', '/aurelius-atelier/assets/videos/scroll_mobile_gemini_intra.mp4')

# Replace styling of scrollVideo & introVideo to remove perspective transform mismatch
old_scroll_css = 'position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:1; pointer-events:none; opacity:1; will-change:transform,opacity; transform:perspective(1200px);'
new_scroll_css = 'position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:1; pointer-events:none; opacity:1;'
html = html.replace(old_scroll_css, new_scroll_css)

old_intro_css = 'position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:2; pointer-events:none; opacity:1; will-change:opacity; transition:opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);'
new_intro_css = 'position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:2; pointer-events:none; opacity:1;'
html = html.replace(old_intro_css, new_intro_css)

old_finish_intro = """      function finishIntro() {
        if (introFinished) return;
        introFinished = true;
        introVideo.style.opacity = \"0\";
        setTimeout(() => {
          try { introVideo.pause(); } catch(e){}
          introVideo.style.display = \"none\";
        }, 600);
      }"""

new_finish_intro = """      function finishIntro() {
        if (introFinished) return;
        introFinished = true;
        try { introVideo.pause(); } catch(e){}
        introVideo.currentTime = introVideo.duration || 4.19;
      }"""
html = html.replace(old_finish_intro, new_finish_intro)

old_update_progress = """      function updateTargetProgress() {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (scrollY > 15 && !introFinished) {
          finishIntro();
        }
        const heroTrack = document.querySelector(".sc-2b3d2147-0");
        const heroSpacer = document.querySelector(".sc-2b3d2147-3") || document.querySelector(".fHUmBT");
        const scrubDistance = heroSpacer ? heroSpacer.offsetHeight : (window.innerHeight * 1.4);
        
        targetProgress = Math.min(1, Math.max(0, scrollY / scrubDistance));

        // When scrolled past hero section: completely hide and pause video so it never shows across subsequent sections
        const heroTrackBottom = heroTrack ? (heroTrack.offsetHeight - window.innerHeight * 0.5) : (scrubDistance + window.innerHeight);
        if (scrollY > heroTrackBottom) {
          scrollVideo.style.visibility = \"hidden\";
          if (!scrollVideo.paused) scrollVideo.pause();
        } else {
          scrollVideo.style.visibility = \"visible\";
        }
      }"""

new_update_progress = """      function updateTargetProgress() {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (scrollY > 5) {
          if (!introFinished) finishIntro();
          introVideo.style.display = \"none\";
        } else {
          introVideo.style.display = \"block\";
        }
        const heroTrack = document.querySelector(".sc-2b3d2147-0") || document.querySelector(".sc-2b039258-0");
        const heroSpacer = document.querySelector(".sc-2b3d2147-3") || document.querySelector(".fHUmBT");
        const scrubDistance = heroSpacer ? heroSpacer.offsetHeight : (window.innerHeight * 1.4);
        
        targetProgress = Math.min(1, Math.max(0, scrollY / scrubDistance));

        // When scrolled past hero section: completely hide and pause video so it never shows across subsequent sections
        const heroTrackBottom = heroTrack ? (heroTrack.offsetHeight - window.innerHeight * 0.35) : (scrubDistance + window.innerHeight);
        if (scrollY > heroTrackBottom) {
          scrollVideo.style.visibility = \"hidden\";
          if (!scrollVideo.paused) scrollVideo.pause();
        } else {
          scrollVideo.style.visibility = \"visible\";
        }
      }"""
html = html.replace(old_update_progress, new_update_progress)

old_tilt = """        // 2. Apply smooth 3D tilt when near top
        if (scrollY <= 150) {
          curTiltX += (mouseX - curTiltX) * 0.08;
          curTiltY += (mouseY - curTiltY) * 0.08;
          scrollVideo.style.transform = `perspective(1200px) rotateY(${curTiltX * -2.5}deg) rotateX(${curTiltY * 2.5}deg) scale(1.02)`;
        } else {
          scrollVideo.style.transform = \"perspective(1200px) scale(1.0)\";
        }"""

new_tilt = """        // 2. Keep 4K video projection flat and stable without subpixel rasterization jitter
        scrollVideo.style.transform = "none";"""
html = html.replace(old_tilt, new_tilt)

# 3. Synchronize React preloader with hero video ignition
pos_fn = html.find('function initPreloader() {')
pos_call = html.find('initPreloader();')
if pos_fn != -1 and pos_call != -1:
    end_of_block = pos_call + len('initPreloader();')
    clean_loader_sync = """    // Synchronize React preloader with hero video ignition
    if (sessionStorage.getItem('vanguard:entered') === '1') {
      unlockScrollAndEnter(false);
    }"""
    html = html[:pos_fn] + clean_loader_sync + html[end_of_block:]

# 4. Update unlockScrollAndEnter
old_unlock = """    function unlockScrollAndEnter(fromUserClick) {
      if (entered) return;
      entered = true;

      document.documentElement.classList.add('site-entered', 'lenis', 'lenis-smooth');
      document.body.classList.add('site-entered');
      document.documentElement.classList.remove('lenis-stopped');"""

new_unlock = """    function unlockScrollAndEnter(fromUserClick) {
      if (entered) return;
      entered = true;
      try { sessionStorage.setItem('vanguard:entered', '1'); } catch(e){}

      if (typeof window.__setLoaderEnabled === 'function') {
        try { window.__setLoaderEnabled(false); } catch(e){}
      }

      document.documentElement.classList.add('site-entered', 'lenis', 'lenis-smooth');
      document.body.classList.add('site-entered');
      document.documentElement.classList.remove('lenis-stopped');"""
html = html.replace(old_unlock, new_unlock)

# 5. Rebranding: Vanguard & Made by Gurdharam in menu
html = html.replace('<div hidden id="S:0">', '<div id="S:0">')
html = html.replace('© 2026 Aurelius Atelier', '© 2026 Vanguard')
html = html.replace('Aurelius Atelier', 'Vanguard')
html = html.replace('AURELIUS ATELIER', 'VANGUARD')
html = html.replace('Aurelius', 'Vanguard')
html = html.replace('Forge Automotive', 'Vanguard')
html = html.replace('FORGE AUTOMOTIVE', 'VANGUARD')
html = html.replace('FORGE', 'VANGUARD')
html = html.replace('Forge', 'Vanguard')

# 6. Logo: 8 vector paths for V A N G U A R D
VANGUARD_8_PATHS = '''<path data-logo="v" d="M9.81 35.00L8.05 35.00L5.00 26.74L6.80 26.74L8.51 32.05Q8.66 32.56 8.94 33.60L9.06 33.10L9.36 32.05L11.05 26.74L12.84 26.74L9.81 35.00Z" fill="#ffffff" style="transform:translateY(-100%)"/>
<path data-logo="a" d="M20.14 35.00L19.41 32.89L16.26 32.89L15.53 35.00L13.80 35.00L16.81 26.74L18.85 26.74L21.85 35.00L20.14 35.00ZM17.83 28.01L17.80 28.14Q17.74 28.35 17.65 28.62Q17.57 28.89 16.65 31.59L19.02 31.59L18.21 29.22L17.95 28.42L17.83 28.01Z" fill="#ffffff" style="transform:translateY(-100%)"/>
<path data-logo="n" d="M27.84 35.00L24.24 28.64Q24.34 29.57 24.34 30.13L24.34 35.00L22.81 35.00L22.81 26.74L24.78 26.74L28.44 33.15Q28.33 32.27 28.33 31.54L28.33 26.74L29.87 26.74L29.87 35.00L27.84 35.00Z" fill="#ffffff" style="transform:translateY(-100%)"/>
<path data-logo="g" d="M35.05 33.65Q35.73 33.65 36.36 33.45Q36.99 33.25 37.34 32.95L37.34 31.80L35.32 31.80L35.32 30.53L38.92 30.53L38.92 33.56Q38.27 34.24 37.21 34.62Q36.16 35.00 35.01 35.00Q32.99 35.00 31.91 33.88Q30.82 32.77 30.82 30.71Q30.82 28.68 31.91 27.59Q33.00 26.50 35.05 26.50Q37.96 26.50 38.75 28.65L37.15 29.13Q36.89 28.50 36.34 28.18Q35.79 27.86 35.05 27.86Q33.83 27.86 33.20 28.60Q32.56 29.34 32.56 30.71Q32.56 32.12 33.22 32.88Q33.87 33.65 35.05 33.65Z" fill="#ffffff" style="transform:translateY(-100%)"/>
<path data-logo="u" d="M43.40 35.00Q41.69 35.00 40.78 34.17Q39.88 33.33 39.88 31.79L39.88 26.62L41.61 26.62L41.61 31.65Q41.61 32.63 42.07 33.14Q42.54 33.65 43.44 33.65Q44.37 33.65 44.87 33.12Q45.36 32.58 45.36 31.59L45.36 26.62L47.09 26.62L47.09 31.70Q47.09 33.27 46.12 34.14Q45.15 35.00 43.40 35.00Z" fill="#ffffff" style="transform:translateY(-100%)"/>
<path data-logo="a" d="M54.39 35.00L53.66 32.89L50.51 32.89L49.78 35.00L48.05 35.00L51.06 26.74L53.10 26.74L56.10 35.00L54.39 35.00ZM52.08 28.01L52.05 28.14Q51.99 28.35 51.91 28.62Q51.83 28.89 50.90 31.59L53.27 31.59L52.46 29.22L52.21 28.42L52.08 28.01Z" fill="#ffffff" style="transform:translateY(-100%)"/>
<path data-logo="r" d="M62.73 35.00L60.82 31.86L58.79 31.86L58.79 35.00L57.06 35.00L57.06 26.74L61.19 26.74Q62.67 26.74 63.47 27.38Q64.27 28.01 64.27 29.20Q64.27 30.07 63.78 30.70Q63.29 31.33 62.45 31.53L64.68 35.00L62.73 35.00ZM62.53 29.27Q62.53 28.08 61.01 28.08L58.79 28.08L58.79 30.52L61.05 30.52Q61.78 30.52 62.16 30.19Q62.53 29.86 62.53 29.27Z" fill="#ffffff" style="transform:translateY(-100%)"/>
<path data-logo="d" d="M73.00 30.81Q73.00 32.09 72.50 33.04Q72.00 33.99 71.08 34.50Q70.16 35.00 68.98 35.00L65.64 35.00L65.64 26.74L68.63 26.74Q70.71 26.74 71.86 27.79Q73.00 28.85 73.00 30.81ZM71.26 30.81Q71.26 29.48 70.57 28.78Q69.88 28.08 68.59 28.08L67.37 28.08L67.37 33.66L68.83 33.66Q69.95 33.66 70.60 32.90Q71.26 32.13 71.26 30.81Z" fill="#ffffff" style="transform:translateY(-100%)"/>'''

# Replace text group with 8 vector paths
html = re.sub(r'<g class="text"[^>]*>.*?</g>', f'<g class="text" clip-path="url(#logo-clip)">\n{VANGUARD_8_PATHS}\n</g>', html, flags=re.DOTALL)
if '<defs><clipPath id="logo-clip">' not in html:
    html = html.replace('<svg width="78" height="36" viewBox="0 0 78 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-e576e939-0 gBefHe logo">',
                        '<svg width="78" height="36" viewBox="0 0 78 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-e576e939-0 gBefHe logo"><defs><clipPath id="logo-clip"><rect x="0" y="24" width="78" height="12"></rect></clipPath></defs>')

# SSR icon mark
old_ssr_icon = '''<path d="M39 3L26 21.5H32L39 10Z" fill="#FFFFFF"/>
<path d="M39 3L52 21.5H46L39 10Z" fill="rgba(255,255,255,0.85)"/>
<path d="M39 8.5L42.5 13.5L39 18.5L35.5 13.5Z" fill="#C5A064"/>
<path d="M31.5 16.5H46.5V17.8H31.5Z" fill="#FFFFFF" opacity="0.9"/>'''

new_ssr_icon = '''<path d="M39 21.5L27 4H33L39 14.5L45 4H51L39 21.5Z" fill="#FFFFFF"/>
<path d="M39 18L33.5 10H44.5L39 18Z" fill="#C5A064"/>'''
html = html.replace(old_ssr_icon, new_ssr_icon)

# 7. Replace duplicate car images with unique AI-generated bespoke studio photography
# Philosophy 01 (Identity): Rolls-Royce / Bentley coachbuild
html = html.replace('96abbebcdb69e4b13c6ff0e23da7784139ad7da3-2880x2234.jpg', 'philosophy_01_identity.jpg')
# Philosophy 02 (Insight): Artisan hand & carbon fiber interior
html = html.replace('235781052416262c147da92950dc76d4d07b86ff-2880x2174.jpg', 'philosophy_02_insight.jpg')
# Philosophy 03 (Cohesion): Rear diffuser & titanium exhaust
html = html.replace('5831f81c6ffab5f5c73abf162d4b92c1a5a8c271-2880x2218.jpg', 'philosophy_03_cohesion.jpg')

# Ordinary Ends Here: 3 vertical cards
html = html.replace('2dda49076a88dd6a1282c3858f405d756ff734f6-708x1402.png', 'ordinary_card_01.jpg')
html = html.replace('135b8a261d63c2eacb7a981b7479b94c4a74998c-708x1402.png', 'ordinary_card_02.jpg')
html = html.replace('22884fd5c804bb7a4a5545e22f9dd51b353c0b27-707x1402.png', 'ordinary_card_03.jpg')

# Curated commissions & stock preview
html = html.replace('50184497f0c1b4f3ce1cdcdcfbd576ee4336f720-1520x2688.png', 'stock_03_porsche_gt3rs.jpg')
html = html.replace('355c0715f1090f3eac38518ae07dd22b6c0c9c2e-1320x2388.jpg', 'stock_01_defender_v8.jpg')

# Footer image: fleet lineup
html = html.replace('c6f15b9448f9090f3c7d9f0b5fab4e3cbc8e7284-2880x1800.jpg', 'atelier_fleet_lineup.jpg')

# Update title tag
html = re.sub(r'<title>.*?</title>', '<title>Vanguard — For Those Who Command Distinction</title>', html)

# Write out to /root/forge-source/index.html
with open('/root/forge-source/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Successfully compiled index.html:', len(html), 'bytes')
