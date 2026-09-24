import subprocess, re

# Read clean content from git show HEAD:index.html
head_html = subprocess.check_output(['git', 'show', 'HEAD:index.html'], cwd='/root/forge-source').decode('utf-8', errors='ignore')

# 1. Critical styles to inject right after <head>
CRITICAL_HEAD_STYLES = """<style>
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

# Update finishIntro to avoid opacity drop
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

# Update onScroll swap in updateTargetProgress
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

# Remove 3D tilt divergence so both videos stay 100% pixel-aligned
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

# 3. Replace the entire manual initPreloader function with clean React-native synchronization
pos_fn = html.find('function initPreloader() {')
pos_call = html.find('initPreloader();')
if pos_fn != -1 and pos_call != -1:
    end_of_block = pos_call + len('initPreloader();')
    clean_loader_sync = """    // Synchronize React preloader with hero video ignition
    if (sessionStorage.getItem('vanguard:entered') === '1') {
      unlockScrollAndEnter(false);
    }"""
    html = html[:pos_fn] + clean_loader_sync + html[end_of_block:]

# 4. Update unlockScrollAndEnter to notify React's __setLoaderEnabled and session
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
html = html.replace('© 2026 Aurelius Atelier', '© 2026 Vanguard')
html = html.replace('Aurelius Atelier', 'Vanguard')
html = html.replace('AURELIUS ATELIER', 'VANGUARD')
html = html.replace('Forge Automotive', 'Vanguard')
html = html.replace('FORGE AUTOMOTIVE', 'VANGUARD')
html = html.replace('>AURELIUS</text>', '>VANGUARD</text>')

# Update SSR logo SVG icon to Vanguard
old_ssr_icon = '''<path d="M39 3L26 21.5H32L39 10Z" fill="#FFFFFF"/>
<path d="M39 3L52 21.5H46L39 10Z" fill="rgba(255,255,255,0.85)"/>
<path d="M39 8.5L42.5 13.5L39 18.5L35.5 13.5Z" fill="#C5A064"/>
<path d="M31.5 16.5H46.5V17.8H31.5Z" fill="#FFFFFF" opacity="0.9"/>'''

new_ssr_icon = '''<path d="M39 21.5L27 4H33L39 14.5L45 4H51L39 21.5Z" fill="#FFFFFF"/>
<path d="M39 18L33.5 10H44.5L39 18Z" fill="#C5A064"/>'''
html = html.replace(old_ssr_icon, new_ssr_icon)

# Update aria labels
html = html.replace('aria-label="Aurelius Atelier home"', 'aria-label="Vanguard home"')
html = html.replace('aria-label="Aurelius home"', 'aria-label="Vanguard home"')

# Replace footer image with AI fleet lineup
html = html.replace('/aurelius-atelier/assets/cars/c6f15b9448f9090f3c7d9f0b5fab4e3cbc8e7284-2880x1800.jpg', '/aurelius-atelier/assets/cars/atelier_fleet_lineup.jpg')

# Update title tag
html = re.sub(r'<title>.*?</title>', '<title>Vanguard — For Those Who Command Distinction</title>', html)

# Write out to /root/forge-source/index.html
with open('/root/forge-source/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Successfully compiled /root/forge-source/index.html:', len(html), 'bytes')
