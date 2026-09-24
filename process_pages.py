import os, re

PAGES = [
    'builds', 'stock', 'contact',
    'builds/fa001', 'builds/fa002', 'builds/fa005', 'builds/fa006',
    'builds/fa007', 'builds/fa008', 'builds/fa009', 'stock/fa003'
]

# Vanguard SVG logo
AURELIUS_LOGO = '''<a aria-label="Vanguard home" class="sc-cf9722b1-1 glWlYP" href="/aurelius-atelier/"><svg width="78" height="36" viewBox="0 0 78 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-e576e939-0 gBefHe logo"><defs><clipPath id="logo-clip"><rect x="0" y="24" width="78" height="12"></rect></clipPath></defs>
<g class="icon">
<path d="M39 21.5L27 4H33L39 14.5L45 4H51L39 21.5Z" fill="#FFFFFF"/>
<path d="M39 18L33.5 10H44.5L39 18Z" fill="#C5A064"/>
</g>
<g class="text" clip-path="url(#logo-clip)">
<path data-logo="v" d="M9.81 35.00L8.05 35.00L5.00 26.74L6.80 26.74L8.51 32.05Q8.66 32.56 8.94 33.60L9.06 33.10L9.36 32.05L11.05 26.74L12.84 26.74L9.81 35.00Z" fill="#ffffff" style="transform:translateY(-100%)"/>
<path data-logo="a" d="M20.14 35.00L19.41 32.89L16.26 32.89L15.53 35.00L13.80 35.00L16.81 26.74L18.85 26.74L21.85 35.00L20.14 35.00ZM17.83 28.01L17.80 28.14Q17.74 28.35 17.65 28.62Q17.57 28.89 16.65 31.59L19.02 31.59L18.21 29.22L17.95 28.42L17.83 28.01Z" fill="#ffffff" style="transform:translateY(-100%)"/>
<path data-logo="n" d="M27.84 35.00L24.24 28.64Q24.34 29.57 24.34 30.13L24.34 35.00L22.81 35.00L22.81 26.74L24.78 26.74L28.44 33.15Q28.33 32.27 28.33 31.54L28.33 26.74L29.87 26.74L29.87 35.00L27.84 35.00Z" fill="#ffffff" style="transform:translateY(-100%)"/>
<path data-logo="g" d="M35.05 33.65Q35.73 33.65 36.36 33.45Q36.99 33.25 37.34 32.95L37.34 31.80L35.32 31.80L35.32 30.53L38.92 30.53L38.92 33.56Q38.27 34.24 37.21 34.62Q36.16 35.00 35.01 35.00Q32.99 35.00 31.91 33.88Q30.82 32.77 30.82 30.71Q30.82 28.68 31.91 27.59Q33.00 26.50 35.05 26.50Q37.96 26.50 38.75 28.65L37.15 29.13Q36.89 28.50 36.34 28.18Q35.79 27.86 35.05 27.86Q33.83 27.86 33.20 28.60Q32.56 29.34 32.56 30.71Q32.56 32.12 33.22 32.88Q33.87 33.65 35.05 33.65Z" fill="#ffffff" style="transform:translateY(-100%)"/>
<path data-logo="u" d="M43.40 35.00Q41.69 35.00 40.78 34.17Q39.88 33.33 39.88 31.79L39.88 26.62L41.61 26.62L41.61 31.65Q41.61 32.63 42.07 33.14Q42.54 33.65 43.44 33.65Q44.37 33.65 44.87 33.12Q45.36 32.58 45.36 31.59L45.36 26.62L47.09 26.62L47.09 31.70Q47.09 33.27 46.12 34.14Q45.15 35.00 43.40 35.00Z" fill="#ffffff" style="transform:translateY(-100%)"/>
<path data-logo="a" d="M54.39 35.00L53.66 32.89L50.51 32.89L49.78 35.00L48.05 35.00L51.06 26.74L53.10 26.74L56.10 35.00L54.39 35.00ZM52.08 28.01L52.05 28.14Q51.99 28.35 51.91 28.62Q51.83 28.89 50.90 31.59L53.27 31.59L52.46 29.22L52.21 28.42L52.08 28.01Z" fill="#ffffff" style="transform:translateY(-100%)"/>
<path data-logo="r" d="M62.73 35.00L60.82 31.86L58.79 31.86L58.79 35.00L57.06 35.00L57.06 26.74L61.19 26.74Q62.67 26.74 63.47 27.38Q64.27 28.01 64.27 29.20Q64.27 30.07 63.78 30.70Q63.29 31.33 62.45 31.53L64.68 35.00L62.73 35.00ZM62.53 29.27Q62.53 28.08 61.01 28.08L58.79 28.08L58.79 30.52L61.05 30.52Q61.78 30.52 62.16 30.19Q62.53 29.86 62.53 29.27Z" fill="#ffffff" style="transform:translateY(-100%)"/>
<path data-logo="d" d="M73.00 30.81Q73.00 32.09 72.50 33.04Q72.00 33.99 71.08 34.50Q70.16 35.00 68.98 35.00L65.64 35.00L65.64 26.74L68.63 26.74Q70.71 26.74 71.86 27.79Q73.00 28.85 73.00 30.81ZM71.26 30.81Q71.26 29.48 70.57 28.78Q69.88 28.08 68.59 28.08L67.37 28.08L67.37 33.66L68.83 33.66Q69.95 33.66 70.60 32.90Q71.26 32.13 71.26 30.81Z" fill="#ffffff" style="transform:translateY(-100%)"/>
</g></svg></a>'''

UNIVERSAL_HEAD_INJECTION = r'''
<script>
(function() {
  // 1. Intercept Image prototype setters so React/Next.js image components load locally
  const origSrcDesc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
  const origSrcSetDesc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'srcset');

  function rewrite(url) {
    if (!url || typeof url !== 'string') return url;
    if (url.includes('cdn.sanity.io/images/')) {
      const parts = url.split('?')[0].replace(/\\\\/g, '').split('/');
      const fname = parts[parts.length - 1];
      return '/aurelius-atelier/assets/cars/' + fname;
    }
    return url;
  }

  function rewriteSrcset(srcset) {
    if (!srcset || typeof srcset !== 'string') return srcset;
    return srcset.replace(/https?:\\?\/\\?\/[^\s,]*cdn\.sanity\.io\\?\/images\\?\/[^\s,]+\/([^?\s,]+)[^,\s]*/g, '/aurelius-atelier/assets/cars/$1')
                 .replace(/https?:\/\/[^\s,]*cdn\.sanity\.io\/images\/[^\s,]+\/([^?\s,]+)[^,\s]*/g, '/aurelius-atelier/assets/cars/$1');
  }

  if (origSrcDesc && origSrcDesc.set) {
    Object.defineProperty(HTMLImageElement.prototype, 'src', {
      get() { return origSrcDesc.get.call(this); },
      set(val) { origSrcDesc.set.call(this, rewrite(val)); }
    });
  }

  if (origSrcSetDesc && origSrcSetDesc.set) {
    Object.defineProperty(HTMLImageElement.prototype, 'srcset', {
      get() { return origSrcSetDesc.get.call(this); },
      set(val) { origSrcSetDesc.set.call(this, rewriteSrcset(val)); }
    });
  }

  const origSourceSrcSetDesc = Object.getOwnPropertyDescriptor(HTMLSourceElement.prototype, 'srcset');
  if (origSourceSrcSetDesc && origSourceSrcSetDesc.set) {
    Object.defineProperty(HTMLSourceElement.prototype, 'srcset', {
      get() { return origSourceSrcSetDesc.get.call(this); },
      set(val) { origSourceSrcSetDesc.set.call(this, rewriteSrcset(val)); }
    });
  }

  const origSourceSrcDesc = Object.getOwnPropertyDescriptor(HTMLSourceElement.prototype, 'src');
  if (origSourceSrcDesc && origSourceSrcDesc.set) {
    Object.defineProperty(HTMLSourceElement.prototype, 'src', {
      get() { return origSourceSrcDesc.get.call(this); },
      set(val) { origSourceSrcDesc.set.call(this, rewrite(val)); }
    });
  }

  const origLinkHrefDesc = Object.getOwnPropertyDescriptor(HTMLLinkElement.prototype, 'href');
  if (origLinkHrefDesc && origLinkHrefDesc.set) {
    Object.defineProperty(HTMLLinkElement.prototype, 'href', {
      get() { return origLinkHrefDesc.get.call(this); },
      set(val) { origLinkHrefDesc.set.call(this, rewrite(val)); }
    });
  }

  const origLinkSrcSetDesc = Object.getOwnPropertyDescriptor(HTMLLinkElement.prototype, 'imageSrcset') || Object.getOwnPropertyDescriptor(HTMLLinkElement.prototype, 'imagesrcset');
  if (origLinkSrcSetDesc && origLinkSrcSetDesc.set) {
    Object.defineProperty(HTMLLinkElement.prototype, origLinkSrcSetDesc.name || 'imageSrcset', {
      get() { return origLinkSrcSetDesc.get.call(this); },
      set(val) { origLinkSrcSetDesc.set.call(this, rewriteSrcset(val)); }
    });
  }

  const origSetAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function(name, val) {
    if (name === 'src' || name === 'href') val = rewrite(val);
    if (name === 'srcset' || name === 'imagesrcset' || name === 'imageSrcset') val = rewriteSrcset(val);
    return origSetAttribute.call(this, name, val);
  };

  // 2. Mock Sanity API / Live events & rewrite sanity image fetches
  const origFetch = window.fetch;
  window.fetch = function(input, init) {
    let url = typeof input === 'string' ? input : (input && input.url ? input.url : '');
    if (url.includes('cdn.sanity.io/images/')) {
      const newUrl = rewrite(url);
      if (typeof input === 'string') input = newUrl;
      else if (input && input.url) input = new Request(newUrl, input);
    }
    if (url.includes('api.sanity.io') || url.includes('sanity.io/v')) {
      return Promise.resolve(new Response(JSON.stringify({ result: [] }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }));
    }
    return origFetch.apply(this, arguments);
  };

  // Mock EventSource for Sanity Live
  class MockEventSource extends EventTarget {
    constructor(url) {
      super();
      this.url = url;
      this.readyState = 1;
      setTimeout(() => {
        if (typeof this.onopen === 'function') this.onopen(new Event('open'));
        this.dispatchEvent(new Event('open'));
      }, 10);
    }
    close() {
      this.readyState = 2;
    }
  }
  window.EventSource = MockEventSource;

  // 3. Forge Signature SplitText & Liquid Fill Animation Engine
  function initForgeSplitText() {
    const headings = document.querySelectorAll('h1, h2, h3, [data-heading="true"], .sc-12e1aa87-0');
    headings.forEach(el => {
      // If already split by React AnimatedHeading, don't duplicate
      if (el.dataset.forgeAnimInit === 'true' || el.querySelector('.line')) return;
      el.dataset.forgeAnimInit = 'true';
      
      const rawText = (el.innerText || el.textContent || '').trim();
      if (!rawText || rawText.length < 2) return;
      
      const srOnly = document.createElement('span');
      srOnly.className = 'sr-only';
      srOnly.textContent = rawText;
      
      const lines = rawText.split(/\n+/).filter(Boolean);
      if (!lines.length) lines.push(rawText);
      
      const lineContainer = document.createElement('div');
      lineContainer.className = 'forge-split-container';
      lineContainer.style.display = 'grid';
      lineContainer.style.width = '100%';
      lineContainer.setAttribute('aria-hidden', 'true');
      
      const charElements = [];
      const lineElements = [];
      
      lines.forEach(lineText => {
        const lineSpan = document.createElement('span');
        lineSpan.className = 'line';
        lineSpan.style.cssText = 'position:relative; display:block; width:fit-content; margin-inline:auto; padding:0.14em; margin-block:-0.14em; --fill-to:#ffffff; --fill-from:rgba(255,255,255,0.18); color:transparent; background-clip:text; -webkit-background-clip:text; background-image:linear-gradient(97deg, var(--fill-to) 0%, var(--fill-to) calc((var(--fill-pos, -16) - 8) * 1%), #c5a064 calc((var(--fill-pos, -16) - 0) * 1%), var(--fill-from) calc((var(--fill-pos, -16) + 8) * 1%), var(--fill-from) 100%); --fill-pos:-16; clip-path:inset(-0.14em); opacity:0.18;';
        
        const words = lineText.split(' ');
        words.forEach((word, wIdx) => {
          for (let i = 0; i < word.length; i++) {
            const ch = word[i];
            const chSpan = document.createElement('span');
            chSpan.className = 'char';
            chSpan.style.cssText = 'display:inline-block; will-change:transform; transform:translateY(120%);';
            chSpan.textContent = ch;
            lineSpan.appendChild(chSpan);
            charElements.push(chSpan);
          }
          if (wIdx < words.length - 1) {
            lineSpan.appendChild(document.createTextNode(' '));
          }
        });
        
        lineContainer.appendChild(lineSpan);
        lineElements.push(lineSpan);
      });
      
      el.innerHTML = '';
      el.appendChild(srOnly);
      el.appendChild(lineContainer);
      el.style.visibility = 'visible';
      
      const playEntrance = () => {
        if (el.dataset.entered === 'true') return;
        el.dataset.entered = 'true';
        
        let start = performance.now();
        const duration = 600;
        const stagger = Math.min(25, 500 / Math.max(charElements.length - 1, 1));
        
        function animateChars(time) {
          let allDone = true;
          charElements.forEach((ch, idx) => {
            const charStart = start + idx * stagger;
            if (time < charStart) {
              allDone = false;
              return;
            }
            const progress = Math.min(1, (time - charStart) / duration);
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const y = 120 * (1 - ease);
            ch.style.transform = `translateY(${y}%)`;
            if (progress < 1) allDone = false;
          });
          
          if (!allDone) {
            requestAnimationFrame(animateChars);
          } else {
            lineElements.forEach(l => {
              l.style.clipPath = 'none';
              l.style.opacity = '1';
            });
            let fillStart = performance.now();
            const fillDuration = 1400;
            function sweepFill(fillTime) {
              const fProgress = Math.min(1, (fillTime - fillStart) / fillDuration);
              const fEase = fProgress === 1 ? 1 : 1 - Math.pow(2, -10 * fProgress);
              const pos = -16 + (116 - (-16)) * fEase;
              lineElements.forEach(l => l.style.setProperty('--fill-pos', pos));
              if (fProgress < 1) {
                requestAnimationFrame(sweepFill);
              }
            }
            requestAnimationFrame(sweepFill);
          }
        }
        requestAnimationFrame(animateChars);
      };
      
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            playEntrance();
            obs.unobserve(el);
          }
        });
      }, { threshold: 0.1 });
      obs.observe(el);
    });
  }

  // 4. Session enter memory & preloader sync
  window.addEventListener('DOMContentLoaded', () => {
    // Subpages are always directly accessible without preloader barrier
    document.documentElement.classList.add('site-entered');
    document.body.classList.add('site-entered');
    const loader = document.querySelector('.sc-60e682e4-0');
    if (loader) {
      loader.classList.add('dismissed', 'preloader-dismissed');
      loader.style.display = 'none';
    }
    const main = document.querySelector('main#page');
    if (main) main.removeAttribute('inert');
    const lenisStopped = document.querySelector('.lenis.lenis-stopped');
    if (lenisStopped) lenisStopped.classList.remove('lenis-stopped');

    // Made by Gurdharam in Drawer Menu
    const drawerMeta = document.querySelector('.sc-a66db614-9') || document.querySelector('.crdghV');
    if (drawerMeta && !document.getElementById('drawer-gurdharam-dl')) {
      const dl = document.createElement('dl');
      dl.id = 'drawer-gurdharam-dl';
      dl.className = 'sc-a66db614-10 crdghV';
      dl.innerHTML = `
        <dt style="font-family:var(--font-geist-mono, monospace); font-size:11px; text-transform:uppercase; letter-spacing:0.08em; opacity:0.5; margin-bottom:6px;">Atelier Craft</dt>
        <dd>
          <a href="https://gurdharam.com" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:8px; text-decoration:none; color:#d4af37; font-weight:600; font-size:13px; letter-spacing:0.04em; transition:opacity 0.2s;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="18" height="18"><rect width="100" height="100" rx="20" fill="#0c0c0c"/><circle cx="50" cy="50" r="42" fill="none" stroke="#d4af37" stroke-width="5" stroke-dasharray="200 60"/><text x="50" y="63" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="44" fill="#d4af37" text-anchor="middle">G</text></svg>
            <span>Made by Gurdharam</span>
          </a>
        </dd>
        <dd style="color:rgba(255,255,255,0.4); font-size:12px; margin-top:3px; letter-spacing:0.02em;">
          © 2026 Vanguard
        </dd>
      `;
      drawerMeta.appendChild(dl);
    }

    // 5. Ensure logo aria-label and links
    const logoLinks = document.querySelectorAll('header a.glWlYP, a.glWlYP, header a[aria-label*="home"]');
    logoLinks.forEach(logoLink => {
      logoLink.setAttribute('aria-label', 'Vanguard home');
      logoLink.href = '/aurelius-atelier/';
    });

    // Run text animation scanner
    setTimeout(initForgeSplitText, 250);
  });

  window.addEventListener('load', () => {
    setTimeout(initForgeSplitText, 400);
  });
})();
</script>
<style>
/* Ensure preloader button container stays visible for GSAP fade in */
.sc-60e682e4-3 {
  opacity: 1 !important;
  visibility: visible !important;
}
</style>
'''

with open('/root/forge-source/index.html', 'r', encoding='utf-8') as f:
    idx_content = f.read()

styled_match = re.search(r'<style[^>]*data-styled[^>]*>.*?</style>', idx_content, re.DOTALL)
STYLED_COMPONENTS_CSS = styled_match.group(0) if styled_match else ''

CRITICAL_HEAD_STYLES = """<link rel="stylesheet" href="/aurelius-atelier/assets/css/master_styled.css">
<style>
  html, body {
    background-color: #0c0c0c !important;
    color: #ffffff;
    margin: 0;
    padding: 0;
  }
  .sc-60e682e4-0,
  aside.sc-60e682e4-0,
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

def clean_page(page_slug):
    raw_path = f"{page_slug}/raw.html"
    if not os.path.exists(raw_path):
        print(f"Skipping {page_slug}, raw.html not found")
        return

    with open(raw_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. Sanity CDN images -> local /aurelius-atelier/assets/cars/
    def replace_sanity(m):
        full_url = m.group(0)
        cleaned = full_url.replace('\\/', '/')
        fname = cleaned.split('/')[-1].split('?')[0]
        fname = re.sub(r'[^a-zA-Z0-9_\-\.]', '', fname)
        return f'/aurelius-atelier/assets/cars/{fname}'

    html = re.sub(r'https?:(?:\\/|/){1,2}cdn\.sanity\.io(?:\\/|/)images(?:\\/|/)[^\s\"\'\)\\]+', replace_sanity, html)

    # 2. Fix static paths to /aurelius-atelier/
    html = html.replace('/_next/static/', '/aurelius-atelier/_next/static/')
    html = html.replace('https://forgeautomotive.co.uk/_next/static/', '/aurelius-atelier/_next/static/')
    html = html.replace('https://forgeautomotive.co.uk/assets/', '/aurelius-atelier/assets/')
    html = html.replace('https://forgeautomotive.co.uk/images/', '/aurelius-atelier/assets/cars/')
    html = html.replace('https://forgeautomotive.co.uk/', '/aurelius-atelier/')

    # 3. Cleanroom text and branding replacement
    html = html.replace('Forge Automotive', 'Vanguard')
    html = html.replace('FORGE AUTOMOTIVE', 'VANGUARD')
    html = html.replace('Forge', 'Vanguard')
    html = html.replace('FORGE', 'VANGUARD')
    html = html.replace('forgeautomotive.co.uk', 'gurination1.github.io/aurelius-atelier')
    html = html.replace('builds@forgeautomotive.co.uk', 'concierge@vanguard.co.uk')
    html = html.replace('info@forgeautomotive.co.uk', 'concierge@vanguard.co.uk')

    # 4. Internal links prefixing
    html = re.sub(r'href=\"/builds/([a-zA-Z0-9_\-]+)/?\"', r'href="/aurelius-atelier/builds/\1/"', html)
    html = re.sub(r'href=\"/stock/([a-zA-Z0-9_\-]+)/?\"', r'href="/aurelius-atelier/stock/\1/"', html)
    html = re.sub(r'href=\"/builds/?\"', 'href="/aurelius-atelier/builds/"', html)
    html = re.sub(r'href=\"/stock/?\"', 'href="/aurelius-atelier/stock/"', html)
    html = re.sub(r'href=\"/contact/?\"', 'href="/aurelius-atelier/contact/"', html)
    html = re.sub(r'href=\"/\"', 'href="/aurelius-atelier/"', html)

    # 5. Header logo substitution
    html = re.sub(r'<a[^>]*class=\"[^\"]*glWlYP[^\"]*\".*?</a>', AURELIUS_LOGO, html, flags=re.DOTALL)

    # 5b. Distinct bespoke vehicle imagery for builds and stock
    if page_slug == 'builds':
        # Remove duplicate aria-hidden background sections
        html = re.sub(r'<section aria-hidden="true" class="sc-337305d3-0 sc-dcca4473-0 kTCIhD gzvFlL">.*?</section>', '', html, flags=re.DOTALL)

        builds_bespoke_items = [
            {'title': 'Defender 110 V8 Bespoke', 'code': '#FA001', 'desc': 'Satin Carpathian grey against gloss black, widened carbon arches and an imposing stance.', 'img': 'stock_01_defender_v8.jpg', 'alt': 'Bespoke Land Rover Defender 110 V8 in satin Carpathian grey with forged wheels'},
            {'title': '911 GT3 RS Weissach Atelier', 'code': '#FA002', 'desc': 'Weissach carbon package in Guards Red with swan-neck aero and gold magnesium wheels.', 'img': 'stock_03_porsche_gt3rs.jpg', 'alt': 'Porsche 911 GT3 RS Weissach in Guards Red with exposed carbon aero'},
            {'title': 'Defender 130 Atelier Edition', 'code': '#FA005', 'desc': 'Extended wheelbase atelier coachbuild, bespoke rear salon and forged monoblock rims.', 'img': 'bespoke_defender_130.jpg', 'alt': 'Land Rover Defender 130 Atelier Edition in dark studio'},
            {'title': 'Urus Performante Widebody', 'code': '#FA006', 'desc': 'Grigio Telesto matte carbon aero, Akrapovič titanium exhaust and 23-inch Pelope rims.', 'img': 'stock_04_urus_performante.jpg', 'alt': 'Lamborghini Urus Performante in Grigio Telesto matte grey with carbon vents'},
            {'title': 'Aston Martin DBS 770 Ultimate', 'code': '#FA007', 'desc': 'Satin Racing Green coupe with 770PS twin-turbo V12 and bronze center-lock forged wheels.', 'img': 'stock_02_aston_dbs.jpg', 'alt': 'Aston Martin DBS 770 Ultimate coupe in satin Racing Green studio'},
            {'title': 'G63 AMG Obsidian Atelier', 'code': '#FA008', 'desc': 'Obsidian black metallic, exposed forged carbon bonnet scoop and quad side-exit exhausts.', 'img': 'stock_05_g63_amg.jpg', 'alt': 'Mercedes-AMG G63 in Obsidian Black with exposed carbon hood in studio'},
            {'title': 'Defender 90 Carpathian Luxury', 'code': '#FA009', 'desc': 'Compact agility meets ultra-luxury coachbuilding, satin finish and hand-stitched interior.', 'img': 'atelier_defender_luxury.jpg', 'alt': 'Land Rover Defender 90 Carpathian Luxury Atelier Edition'},
        ]
        b_counter = [0]
        def transform_build_card(m):
            art = m.group(0)
            item = builds_bespoke_items[b_counter[0] % len(builds_bespoke_items)]
            b_counter[0] += 1
            img_url = '/aurelius-atelier/assets/cars/' + item['img']
            art = re.sub(r'srcset="[^"]*"', 'srcset="' + img_url + '"', art)
            art = re.sub(r'src="[^"]*"', 'src="' + img_url + '"', art)
            art = re.sub(r'alt="[^"]*"', 'alt="' + item['alt'] + '"', art)
            art = art.replace('data-deferred="true"', 'data-deferred="false"')
            art = art.replace('data-loaded="false"', 'data-loaded="true"')
            art = re.sub(r'--lqip-[^:]+:url\([^)]+\);?', '', art)
            art = re.sub(r'<h2[^>]*>.*?</h2>', '<h2>' + item['title'] + '</h2>', art)
            art = re.sub(r'#FA[0-9]{3}', item['code'], art)
            art = re.sub(r'<p class="[^"]*gXlVzs[^"]*">.*?</p>', '<p class="sc-337305d3-0 sc-2b8449e6-5 iRvBrB gXlVzs">' + item['desc'] + '</p>', art)
            return art
        html = re.sub(r'<article[^>]*>.*?</article>', transform_build_card, html, flags=re.DOTALL)
    elif page_slug == 'stock':
        # Remove the 7 duplicate aria-hidden background sections that repeat 355c0715
        html = re.sub(r'<section aria-hidden="true" class="sc-337305d3-0 sc-dcca4473-0 kTCIhD gzvFlL">.*?</section>', '', html, flags=re.DOTALL)

        stock_bespoke_items = [
            {'title': 'Defender 110 V8 Bond Edition', 'code': '#FA001', 'price': '£189,950', 'desc': '007 Bond Edition specification in satin black, 22-inch gloss black wheels, 525PS supercharged V8.', 'img': 'stock_01_defender_v8.jpg', 'alt': 'Land Rover Defender 110 V8 Bond Edition in satin black'},
            {'title': 'Aston Martin DBS 770 Ultimate', 'code': '#FA002', 'price': '£314,950', 'desc': 'Final edition 770PS V12 in satin Racing Green with carbon ceramic brakes and bespoke interior.', 'img': 'stock_02_aston_dbs.jpg', 'alt': 'Aston Martin DBS 770 Ultimate in satin Racing Green'},
            {'title': 'Porsche 911 GT3 RS Weissach', 'code': '#FA003', 'price': '£289,950', 'desc': 'Guards Red with full exposed carbon Weissach package, front axle lift and PCCB ceramics.', 'img': 'stock_03_porsche_gt3rs.jpg', 'alt': 'Porsche 911 GT3 RS Weissach in Guards Red'},
            {'title': 'Lamborghini Urus Performante', 'code': '#FA004', 'price': '£279,950', 'desc': 'Grigio Telesto matte exterior with Nero Ade Alcantara, carbon fiber bonnet and sport exhaust.', 'img': 'stock_04_urus_performante.jpg', 'alt': 'Lamborghini Urus Performante in Grigio Telesto matte grey'},
            {'title': 'Mercedes-AMG G63 Mansory Atelier', 'code': '#FA005', 'price': '£245,000', 'desc': 'Bespoke forged carbon styling package, 24-inch custom monoblocks and starlight headliner.', 'img': 'stock_05_g63_amg.jpg', 'alt': 'Mercedes-AMG G63 Obsidian Black Mansory Atelier'},
            {'title': 'Bentley Continental GT Speed', 'code': '#FA006', 'price': '£229,950', 'desc': 'Beluga Black with Blackline specification, Mulliner driving specification and W12 twin-turbo.', 'img': 'stock_06_bentley_gt.jpg', 'alt': 'Bentley Continental GT Speed in Beluga Black'},
            {'title': 'Defender 130 Atelier Edition', 'code': '#FA007', 'price': '£164,950', 'desc': 'Eight-seat luxury cruiser in satin black, bespoke bronze alloys and refrigerated salon console.', 'img': 'bespoke_defender_130.jpg', 'alt': 'Land Rover Defender 130 Atelier Edition in dark studio'},
            {'title': 'Vanguard GT Coupe Widebody', 'code': '#FA008', 'price': '£210,000', 'desc': 'Sculpted carbon widebody coachwork, titanium valved exhaust and bespoke forged wheels.', 'img': 'da8fbe58536f6fc147125ea18c51ddf0035774cc-2880x1800.jpg', 'alt': 'Vanguard GT Coupe Widebody in dark studio'},
            {'title': 'Vanguard Carbon Hypercar', 'code': '#FA009', 'price': '£350,000', 'desc': 'Track-honed aerodynamic package, exposed gloss carbon weave and competition telemetry.', 'img': 'c4f2698a8887bd7837219df4c0fb1fa09f3c2445-2880x1800.jpg', 'alt': 'Vanguard Carbon Aerodynamics Hypercar'},
            {'title': 'Vanguard Digital Cockpit Bespoke', 'code': '#FA010', 'price': '£195,000', 'desc': 'Artisan cockpit refit, aniline leather with contrast gold stitching and carbon steering wheel.', 'img': 'd7923ad3b92d68ecffbf8b6297fb35fc22db7d41-2752x1800.jpg', 'alt': 'Vanguard Digital Cockpit Bespoke'},
            {'title': 'Defender 90 Carpathian Luxury', 'code': '#FA011', 'price': '£149,950', 'desc': 'Carpathian grey satin finish, gloss black contrasting roof and Windsor leather interior.', 'img': 'atelier_defender_luxury.jpg', 'alt': 'Land Rover Defender 90 Carpathian Luxury Atelier Edition'},
            {'title': 'Porsche 911 Turbo S Exclusive', 'code': '#FA012', 'price': '£215,000', 'desc': '650PS twin-turbo flat-six, sports exhaust system, ceramic brakes and carbon roof.', 'img': 'atelier_porsche_gt3.jpg', 'alt': 'Porsche 911 Turbo S Atelier Edition in dark studio'},
            {'title': 'Vanguard Fleet Atelier Lineup', 'code': '#FA013', 'price': '£175,000', 'desc': 'Bespoke studio collection showcasing full spectrum of Vanguard atelier craftsmanship.', 'img': 'atelier_fleet_lineup.jpg', 'alt': 'Vanguard Fleet Bespoke Atelier Lineup'},
            {'title': 'Rolls-Royce Spectre Coachbuild', 'code': '#FA014', 'price': '£450,000', 'desc': 'Midnight satin metallic with hand-painted coachline, illuminated grille and lambswool carpet.', 'img': '8b3e8a25eebb59b38afb369af7716f7f2a76fd3f-3840x2160.png', 'alt': 'Rolls-Royce Spectre Bespoke Coachbuild in dark studio'},
        ]
        s_counter = [0]
        def transform_stock_card(m):
            art = m.group(0)
            item = stock_bespoke_items[s_counter[0] % len(stock_bespoke_items)]
            s_counter[0] += 1
            img_url = '/aurelius-atelier/assets/cars/' + item['img']
            art = re.sub(r'srcset="[^"]*"', 'srcset="' + img_url + '"', art)
            art = re.sub(r'src="[^"]*"', 'src="' + img_url + '"', art)
            art = re.sub(r'alt="[^"]*"', 'alt="' + item['alt'] + '"', art)
            art = art.replace('data-deferred="true"', 'data-deferred="false"')
            art = art.replace('data-loaded="false"', 'data-loaded="true"')
            art = re.sub(r'--lqip-[^:]+:url\([^)]+\);?', '', art)
            art = re.sub(r'data-heading="true">[^<]+<', 'data-heading="true">' + item['title'] + '<', art)
            art = re.sub(r'<span class="sr-only">[^<]+<', '<span class="sr-only">' + item['title'] + '<', art)
            art = re.sub(r'#FA[0-9]{3}', item['code'], art)
            art = re.sub(r'£[0-9,]+', item['price'], art)
            art = re.sub(r'<p class="[^"]*gXlVzs[^"]*">.*?</p>', '<p class="sc-337305d3-0 sc-2b8449e6-5 iRvBrB gXlVzs">' + item['desc'] + '</p>', art)
            art = re.sub(r'aria-label="View build [^"]*"', 'aria-label="View build ' + item['code'] + ' – ' + item['title'] + '"', art)
            return art
        html = re.sub(r'<article[^>]*>.*?</article>', transform_stock_card, html, flags=re.DOTALL)
    elif page_slug == 'builds/fa007':
        # Aston Martin DBS 770 Ultimate (#FA007)
        html = re.sub(r'<title>.*?</title>', '<title>#FA007 / Aston Martin DBS 770 Ultimate | Vanguard</title>', html)
        html = re.sub(r'<h1[^>]*>.*?</h1>', '<h1 class="sc-337305d3-0 sc-1767e08b-3 kTCIhD bFFTZp">Aston Martin DBS 770 Ultimate</h1>', html)
        html = re.sub(r'#FA[0-9]{3}', '#FA007', html)
        html = html.replace('M3 Touring', 'Aston Martin DBS 770 Ultimate')
        html = html.replace('BMW M5 Touring', 'Aston Martin DBS 770 Ultimate')
        html = re.sub(r'<p class="sc-337305d3-0 sc-1767e08b-4[^"]*">.*?</p>', '<p class="sc-337305d3-0 sc-1767e08b-4 zjvJi enRPkz">Satin Racing Green coupe with 770PS twin-turbo V12, carbon aero and bronze center-lock forged wheels.</p>', html)
        img_url = '/aurelius-atelier/assets/cars/stock_02_aston_dbs.jpg'
        html = re.sub(r'<parallax-target[^>]*>.*?</parallax-target>', f'<parallax-target style="translate: none; rotate: none; scale: none; transform: translate(0%, -13.75%) translate3d(0px, 0px, 0px);"><picture><img alt="Aston Martin DBS 770 Ultimate in satin Racing Green" loading="eager" decoding="async" src="{img_url}" width="2880" height="1800" style="position:absolute;height:100%;width:100%;inset:0px;object-fit:cover;" class="sc-b83f0c97-0 ckbPhL"></picture></parallax-target>', html, flags=re.DOTALL)
        html = re.sub(r'<meta property="og:image"[^>]*>', f'<meta property="og:image" content="{img_url}">', html)
    elif page_slug == 'builds/fa008':
        # G63 AMG Obsidian Atelier (#FA008)
        html = re.sub(r'<title>.*?</title>', '<title>#FA008 / G63 AMG Obsidian Atelier | Vanguard</title>', html)
        html = re.sub(r'<h1[^>]*>.*?</h1>', '<h1 class="sc-337305d3-0 sc-1767e08b-3 kTCIhD bFFTZp">G63 AMG Obsidian Atelier</h1>', html)
        html = re.sub(r'#FA[0-9]{3}', '#FA008', html)
        html = html.replace('Mercedes-AMG G63', 'Mercedes-AMG G63 Mansory Atelier')
        html = re.sub(r'<p class="sc-337305d3-0 sc-1767e08b-4[^"]*">.*?</p>', '<p class="sc-337305d3-0 sc-1767e08b-4 zjvJi enRPkz">Obsidian black metallic, exposed forged carbon bonnet scoop, quad side-exit exhausts and 24-inch custom monoblocks.</p>', html)
        img_url = '/aurelius-atelier/assets/cars/stock_05_g63_amg.jpg'
        html = re.sub(r'<parallax-target[^>]*>.*?</parallax-target>', f'<parallax-target style="translate: none; rotate: none; scale: none; transform: translate(0%, -13.75%) translate3d(0px, 0px, 0px);"><picture><img alt="Mercedes-AMG G63 Obsidian Black Mansory Atelier" loading="eager" decoding="async" src="{img_url}" width="2880" height="1800" style="position:absolute;height:100%;width:100%;inset:0px;object-fit:cover;" class="sc-b83f0c97-0 ckbPhL"></picture></parallax-target>', html, flags=re.DOTALL)
        html = re.sub(r'<meta property="og:image"[^>]*>', f'<meta property="og:image" content="{img_url}">', html)
    elif page_slug == 'builds/fa009':
        # Defender 90 Carpathian Luxury (#FA009)
        html = re.sub(r'<title>.*?</title>', '<title>#FA009 / Defender 90 Carpathian Luxury | Vanguard</title>', html)
        html = re.sub(r'<h1[^>]*>.*?</h1>', '<h1 class="sc-337305d3-0 sc-1767e08b-3 kTCIhD bFFTZp">Defender 90 Carpathian Luxury</h1>', html)
        html = re.sub(r'#FA[0-9]{3}', '#FA009', html)
        html = html.replace('Defender 90', 'Defender 90 Carpathian Luxury')
        html = re.sub(r'<p class="sc-337305d3-0 sc-1767e08b-4[^"]*">.*?</p>', '<p class="sc-337305d3-0 sc-1767e08b-4 zjvJi enRPkz">Compact agility meets ultra-luxury coachbuilding, satin finish and hand-stitched bespoke Windsor leather interior.</p>', html)
        img_url = '/aurelius-atelier/assets/cars/atelier_defender_luxury.jpg'
        html = re.sub(r'<parallax-target[^>]*>.*?</parallax-target>', f'<parallax-target style="translate: none; rotate: none; scale: none; transform: translate(0%, -13.75%) translate3d(0px, 0px, 0px);"><picture><img alt="Land Rover Defender 90 Carpathian Luxury Atelier Edition" loading="eager" decoding="async" src="{img_url}" width="2880" height="1800" style="position:absolute;height:100%;width:100%;inset:0px;object-fit:cover;" class="sc-b83f0c97-0 ckbPhL"></picture></parallax-target>', html, flags=re.DOTALL)
        html = re.sub(r'<meta property="og:image"[^>]*>', f'<meta property="og:image" content="{img_url}">', html)
    elif page_slug == 'stock/fa003':
        # Porsche 911 GT3 RS Weissach (#FA003)
        html = re.sub(r'<title>.*?</title>', '<title>#FA003 / Porsche 911 GT3 RS Weissach | Vanguard</title>', html)
        html = re.sub(r'<h1[^>]*>.*?</h1>', '<h1 class="sc-337305d3-0 sc-1767e08b-3 kTCIhD bFFTZp">Porsche 911 GT3 RS Weissach</h1>', html)
        html = re.sub(r'#FA[0-9]{3}', '#FA003', html)
        html = html.replace('Range Rover D300', 'Porsche 911 GT3 RS Weissach')
        html = html.replace('Range Rover', 'Porsche 911 GT3 RS')
        html = re.sub(r'<p class="sc-337305d3-0 sc-1767e08b-4[^"]*">.*?</p>', '<p class="sc-337305d3-0 sc-1767e08b-4 zjvJi enRPkz">Guards Red with full exposed carbon Weissach package, front axle lift, swan-neck wing and PCCB ceramics.</p>', html)
        img_url = '/aurelius-atelier/assets/cars/stock_03_porsche_gt3rs.jpg'
        html = re.sub(r'<parallax-target[^>]*>.*?</parallax-target>', f'<parallax-target style="translate: none; rotate: none; scale: none; transform: translate(0%, -13.75%) translate3d(0px, 0px, 0px);"><picture><img alt="Porsche 911 GT3 RS Weissach in Guards Red" loading="eager" decoding="async" src="{img_url}" width="2880" height="1800" style="position:absolute;height:100%;width:100%;inset:0px;object-fit:cover;" class="sc-b83f0c97-0 ckbPhL"></picture></parallax-target>', html, flags=re.DOTALL)
        html = re.sub(r'<meta property="og:image"[^>]*>', f'<meta property="og:image" content="{img_url}">', html)

    # 6. Inject styled-components CSS & critical styles
    if '<style data-styled="active" data-styled-version="6.5.3"></style>' in html and STYLED_COMPONENTS_CSS:
        html = html.replace('<style data-styled="active" data-styled-version="6.5.3"></style>', STYLED_COMPONENTS_CSS)
    if '<head>' in html:
        html = html.replace('<head>', '<head>\n' + CRITICAL_HEAD_STYLES)

    # 7. Inject universal scripts and preloader fix
    html = html.replace('</head>', UNIVERSAL_HEAD_INJECTION + '</head>')

    out_path = f"{page_slug}/index.html"
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Generated {out_path} ({len(html)} bytes)")

for p in PAGES:
    clean_page(p)

# Also generate 404.html from builds/index.html
with open('builds/index.html', 'r', encoding='utf-8') as f:
    b_html = f.read()
with open('404.html', 'w', encoding='utf-8') as f:
    f.write(b_html)
print("Updated 404.html")
