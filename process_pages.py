import os, re

PAGES = [
    'builds', 'stock', 'contact',
    'builds/fa001', 'builds/fa002', 'builds/fa005', 'builds/fa006',
    'builds/fa007', 'builds/fa008', 'builds/fa009', 'stock/fa003'
]

# Vanguard SVG logo
AURELIUS_LOGO = '''<a aria-label="Vanguard home" class="sc-cf9722b1-1 glWlYP" href="/aurelius-atelier/"><svg width="78" height="36" viewBox="0 0 78 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-e576e939-0 gBefHe logo">
<g class="icon">
<path d="M39 21.5L27 4H33L39 14.5L45 4H51L39 21.5Z" fill="#FFFFFF"/>
<path d="M39 18L33.5 10H44.5L39 18Z" fill="#C5A064"/>
</g>
<g class="text"><text x="39" y="32" text-anchor="middle" fill="#ffffff" font-family="'Geist', -apple-system, sans-serif" font-size="6.5" font-weight="700" letter-spacing="3.2">VANGUARD</text></g>
</svg></a>'''

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

  // 3. Session enter memory & preloader sync
  window.addEventListener('DOMContentLoaded', () => {
    const hasEntered = sessionStorage.getItem('vanguard:entered') === '1' || sessionStorage.getItem('aurelius:entered') === '1';
    
    // Listen for click on ENTER button anywhere
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (btn && (btn.classList.contains('sc-60e682e4-7') || (btn.innerText && btn.innerText.includes('ENTER')))) {
        sessionStorage.setItem('vanguard:entered', '1');
        document.documentElement.classList.add('site-entered');
        document.body.classList.add('site-entered');
      }
    });

    if (hasEntered) {
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
    }

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

    // 4. Vanguard logo updater
    function updateLogo() {
      const logoLinks = document.querySelectorAll('header a.glWlYP, a.glWlYP, header a[aria-label*="home"]');
      logoLinks.forEach(logoLink => {
        if (!logoLink.dataset.aureliusPatched) {
          logoLink.dataset.aureliusPatched = 'true';
          logoLink.setAttribute('aria-label', 'Vanguard home');
          logoLink.href = '/aurelius-atelier/';
          const svg = logoLink.querySelector('svg');
          if (svg) {
            svg.innerHTML = `
              <g class="icon">
                <path d="M39 21.5L27 4H33L39 14.5L45 4H51L39 21.5Z" fill="#FFFFFF"/>
                <path d="M39 18L33.5 10H44.5L39 18Z" fill="#C5A064"/>
              </g>
              <g class="text">
                <text x="39" y="32" text-anchor="middle" fill="#ffffff" font-family="'Geist', -apple-system, sans-serif" font-size="6.5" font-weight="700" letter-spacing="3.2">VANGUARD</text>
              </g>
            `;
          }
        }
      });
    }
    updateLogo();
    setInterval(updateLogo, 300);

    // 5. Unfreeze Lenis & remove inert on Enter
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (btn && (btn.classList.contains('sc-60e682e4-7') || (btn.innerText && btn.innerText.includes('ENTER')))) {
        setTimeout(() => {
          const main = document.querySelector('main#page');
          if (main) main.removeAttribute('inert');
          const lenisStopped = document.querySelector('.lenis.lenis-stopped');
          if (lenisStopped) lenisStopped.classList.remove('lenis-stopped');
        }, 100);
      }
    });
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
