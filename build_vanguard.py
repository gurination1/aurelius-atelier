import os, re

SRC_ROOT = '/root/forge-clean'
DEST_ROOT = '/root/forge-source'

PAGES = [
    '', # Home
    'builds',
    'builds/fa001',
    'builds/fa002',
    'builds/fa005',
    'builds/fa006',
    'builds/fa007',
    'builds/fa008',
    'builds/fa009',
    'stock',
    'stock/fa003',
    'contact',
    'cookies',
    'privacy',
    'terms',
]

# Luxury Faceted Vanguard Emblem (Platinum & Champagne Gold) + Tracked Serif Typography
VANGUARD_SVG = """<svg width="140" height="42" viewBox="0 0 140 42" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23EED596"/><stop offset="50%" stop-color="%23C5A064"/><stop offset="100%" stop-color="%238F6B28"/></linearGradient><linearGradient id="platGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23FFFFFF"/><stop offset="60%" stop-color="%23E2E2E6"/><stop offset="100%" stop-color="%239C9CA4"/></linearGradient><linearGradient id="goldShine" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23A57F38"/><stop offset="50%" stop-color="%23F7E7C4"/><stop offset="100%" stop-color="%23C5A064"/></linearGradient></defs><g transform="translate(48, 1) scale(0.72)"><path d="M30 2 L12 28 L22 28 L30 16 L38 28 L48 28 Z" fill="url(%23platGrad)"/><path d="M30 2 L12 28 L22 28 L30 16 Z" fill="url(%23platGrad)" opacity="0.9"/><path d="M30 2 L30 16 L38 28 L48 28 Z" fill="%23FFFFFF" opacity="0.95"/><path d="M30 7 L19 24 L25 24 L30 16 L35 24 L41 24 Z" fill="url(%23goldGrad)"/><path d="M30 7 L30 16 L35 24 L41 24 Z" fill="url(%23goldShine)"/><polygon points="30,11 26,17 30,21 34,17" fill="%23FFFFFF"/></g><text x="70" y="36" font-family="-apple-system, BlinkMacSystemFont, Didot, Bodoni MT, Cinzel, serif" font-size="10.5" font-weight="600" letter-spacing="0.32em" fill="%23FFFFFF" text-anchor="middle">VANGUARD</text></svg>"""

VANGUARD_CSS = f"""<style id="vanguard-core-styles">
  /* Permanent Luxury Vanguard Logo - Immune to React Hydration Overwrite */
  svg.sc-e576e939-0.logo,
  header svg.logo,
  a[aria-label*="home"] svg.logo,
  a[aria-label*="Forge"] svg,
  a[aria-label*="Vanguard"] svg,
  a.glWlYP svg {{
    position: relative !important;
    display: inline-block !important;
    width: 140px !important;
    height: 42px !important;
    max-width: none !important;
    background-image: url('data:image/svg+xml;utf8,{VANGUARD_SVG}') !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: contain !important;
  }}

  /* Hide Forge vector paths with opacity/fill so React/GSAP getBBox never fails */
  svg.sc-e576e939-0.logo *,
  header svg.logo *,
  a[aria-label*="home"] svg.logo *,
  a[aria-label*="Forge"] svg *,
  a[aria-label*="Vanguard"] svg *,
  a.glWlYP svg * {{
    opacity: 0 !important;
    fill: transparent !important;
    stroke: transparent !important;
  }}

  /* Hide original hero canvases with opacity so WebCodecs failure does not block DOM */
  .sc-2b039258-5 canvas {{
    opacity: 0 !important;
    pointer-events: none !important;
  }}

  .hero-intro-video, .hero-scroll-video {{
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    pointer-events: none !important;
  }}
  .hero-intro-video {{
    z-index: 2 !important;
  }}
  .hero-scroll-video {{
    z-index: 1 !important;
  }}

  /* Global Bottom Timeline Progress Bar */
  #atelier-timeline-track {{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.08);
    z-index: 9999;
    pointer-events: none;
  }}
  #atelier-timeline-fill {{
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #c5a064, #eed596);
    box-shadow: 0 0 10px rgba(197, 160, 100, 0.6);
    transition: width 0.05s linear;
  }}

  /* Subpages immediate access */
  html.subpage-view .sc-60e682e4-0,
  body.subpage-view .sc-60e682e4-0 {{
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }}
</style>"""

VANGUARD_SCRIPT = """<script id="vanguard-core-script">
(function() {
  const PREFIX = "/aurelius-atelier";

  const BESPOKE_MAP = {
    // Philosophy cards
    "philosophy_01": PREFIX + "/assets/cars/philosophy_01_identity.jpg",
    "philosophy_02": PREFIX + "/assets/cars/philosophy_02_insight.jpg",
    "philosophy_03": PREFIX + "/assets/cars/philosophy_03_cohesion.jpg",
    // Ordinary cards
    "ordinary_01": PREFIX + "/assets/cars/ordinary_card_01.jpg",
    "ordinary_02": PREFIX + "/assets/cars/ordinary_card_02.jpg",
    "ordinary_03": PREFIX + "/assets/cars/ordinary_card_03.jpg",
    // Stock cards
    "stock_01": PREFIX + "/assets/cars/stock_01_defender_v8.jpg",
    "stock_02": PREFIX + "/assets/cars/stock_02_aston_dbs.jpg",
    "stock_03": PREFIX + "/assets/cars/stock_03_porsche_gt3rs.jpg",
    "stock_04": PREFIX + "/assets/cars/stock_04_urus_performante.jpg",
    "stock_05": PREFIX + "/assets/cars/stock_05_g63_amg.jpg",
    "stock_06": PREFIX + "/assets/cars/stock_06_bentley_gt.jpg",
    // Builds cards
    "build_01": PREFIX + "/assets/cars/atelier_defender_luxury.jpg",
    "build_02": PREFIX + "/assets/cars/atelier_porsche_gt3.jpg",
    "build_03": PREFIX + "/assets/cars/bespoke_defender_130.jpg",
    // Footer
    "footer": PREFIX + "/assets/cars/atelier_fleet_lineup.jpg"
  };

  function replacePicture(el, newUrl) {
    if (!el) return;
    const pic = el.closest("picture");
    if (pic) {
      pic.querySelectorAll("source").forEach(s => s.srcset = newUrl);
      const img = pic.querySelector("img");
      if (img) img.src = newUrl;
    } else if (el.tagName === "IMG") {
      el.src = newUrl;
    }
  }

  function mountHeroVideos() {
    const heroSection = document.querySelector("section.sc-2b039258-0");
    if (!heroSection) return false;
    if (heroSection.querySelector(".vanguard-hero-video-wrap")) return true;

    const isMobile = window.innerWidth <= 768;
    const introSrc = PREFIX + (isMobile ? "/assets/videos/hero_mobile.mp4" : "/assets/videos/hero_desktop_4k.mp4");
    const scrollSrc = PREFIX + (isMobile ? "/assets/videos/scroll_mobile_gemini_intra.mp4" : "/assets/videos/scroll_desktop_4k_intra.mp4");

    const wrap = document.createElement("div");
    wrap.className = "vanguard-hero-video-wrap";
    wrap.style.cssText = "position:absolute; inset:0; width:100%; height:100%; overflow:hidden; z-index:0; pointer-events:none;";

    const intro = document.createElement("video");
    intro.className = "hero-intro-video";
    intro.muted = true;
    intro.playsInline = true;
    intro.preload = "auto";
    intro.autoplay = true;
    intro.src = introSrc;
    intro.style.cssText = "position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:2; pointer-events:none;";

    const scroll = document.createElement("video");
    scroll.className = "hero-scroll-video";
    scroll.muted = true;
    scroll.playsInline = true;
    scroll.preload = "auto";
    scroll.poster = PREFIX + (isMobile ? "/assets/videos/hero_settled_frame_mobile.jpg" : "/assets/videos/hero_settled_frame.jpg");
    scroll.src = scrollSrc;
    scroll.style.cssText = "position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:1; pointer-events:none;";

    wrap.appendChild(scroll);
    wrap.appendChild(intro);
    heroSection.insertBefore(wrap, heroSection.firstChild);

    scroll.currentTime = 0;
    scroll.pause();

    intro.currentTime = 0;
    intro.play().catch(() => {});

    let introDone = false;
    intro.addEventListener("ended", () => {
      introDone = true;
      intro.style.display = "none";
    });

    function getScrollMetrics() {
      const lenis = document.querySelector(".lenis");
      const y = (lenis && lenis.scrollTop > 0) ? lenis.scrollTop : (window.scrollY || document.documentElement.scrollTop || 0);
      const docH = (lenis ? lenis.scrollHeight : document.documentElement.scrollHeight) - window.innerHeight;
      return { y, docH };
    }

    function onScrollUpdate() {
      const { y, docH } = getScrollMetrics();
      if (y > 10 && !introDone) {
        introDone = true;
        intro.style.display = "none";
      }
      const h = window.innerHeight * 1.5;
      const p = Math.min(1, Math.max(0, y / h));
      if (scroll.duration) {
        scroll.currentTime = p * scroll.duration;
      }
      const fill = document.getElementById("atelier-timeline-fill");
      if (fill) {
        fill.style.width = (docH > 0 ? (y / docH * 100) : 0) + "%";
      }
      if (y > h + window.innerHeight * 0.5) {
        wrap.style.visibility = "hidden";
        if (!scroll.paused) scroll.pause();
      } else {
        wrap.style.visibility = "visible";
      }
    }

    window.addEventListener("scroll", onScrollUpdate, { passive: true });
    const lenisEl = document.querySelector(".lenis");
    if (lenisEl) {
      lenisEl.addEventListener("scroll", onScrollUpdate, { passive: true });
    }

    let lastY = -1;
    function rafScrollSync() {
      const { y } = getScrollMetrics();
      if (Math.abs(y - lastY) > 0.5) {
        lastY = y;
        onScrollUpdate();
      }
      requestAnimationFrame(rafScrollSync);
    }
    requestAnimationFrame(rafScrollSync);

    window.addEventListener("pointermove", (e) => {
      const { y } = getScrollMetrics();
      if (y > 150) return;
      const mx = (e.clientX / window.innerWidth - 0.5) * 2;
      const my = (e.clientY / window.innerHeight - 0.5) * 2;
      scroll.style.transform = `perspective(1000px) rotateX(${my * 2.5}deg) rotateY(${-mx * 4}deg) scale(1.02)`;
      scroll.style.transition = "transform 0.1s ease-out";
    }, { passive: true });

    return true;
  }

  function applyBespokeImages() {
    // Philosophy cards
    const philImgs = document.querySelectorAll(".sc-3a017878-3 img, .cUIBBc img, .sc-3a017878-10 img");
    if (philImgs.length >= 3) {
      if (!philImgs[0].src.includes("philosophy_01")) replacePicture(philImgs[0], BESPOKE_MAP["philosophy_01"]);
      if (!philImgs[1].src.includes("philosophy_02")) replacePicture(philImgs[1], BESPOKE_MAP["philosophy_02"]);
      if (!philImgs[2].src.includes("philosophy_03")) replacePicture(philImgs[2], BESPOKE_MAP["philosophy_03"]);
    }

    // Ordinary cards
    const ordImgs = document.querySelectorAll(".sc-dd0c2790-0 img");
    ordImgs.forEach((img, idx) => {
      const key = "ordinary_0" + ((idx % 3) + 1);
      if (BESPOKE_MAP[key] && !img.src.includes("ordinary_card")) {
        replacePicture(img, BESPOKE_MAP[key]);
      }
    });

    // Stock cards
    const stockImgs = document.querySelectorAll(".sc-8d5ca2ab-0.hUxulM img, [data-listing-route*=\\"stock\\"] img");
    stockImgs.forEach((img, idx) => {
      const key = "stock_0" + ((idx % 6) + 1);
      if (BESPOKE_MAP[key] && !img.src.includes("stock_0")) {
        replacePicture(img, BESPOKE_MAP[key]);
      }
    });

    // Builds cards
    const buildImgs = document.querySelectorAll(".sc-8d5ca2ab-0.ktTCgb img, [data-listing-route*=\\"builds\\"] img");
    buildImgs.forEach((img, idx) => {
      const key = "build_0" + ((idx % 3) + 1);
      if (BESPOKE_MAP[key] && !img.src.includes("atelier_") && !img.src.includes("bespoke_")) {
        replacePicture(img, BESPOKE_MAP[key]);
      }
    });

    // Footer
    const footerImg = document.querySelector("footer aside img");
    if (footerImg && !footerImg.src.includes("atelier_fleet_lineup")) {
      replacePicture(footerImg, BESPOKE_MAP["footer"]);
    }
  }

  function applyDrawerMenu() {
    const small = document.querySelector("#site-menu small.sc-1eb77e08-2, #site-menu small");
    if (small) {
      const poweredP = small.querySelector('p[data-name="powered"]');
      if (poweredP) poweredP.style.display = "none";
    }
    if (small && !document.getElementById("drawer-gurdharam-craft")) {
      const copyrightP = small.querySelector("p[data-name=\\"copyright\\"]");
      if (copyrightP) copyrightP.innerText = "Copyright © 2026 Vanguard";

      const sitebyP = small.querySelector("p[data-name=\\"siteby\\"]");
      if (sitebyP) {
        sitebyP.id = "drawer-gurdharam-craft";
        sitebyP.innerHTML = `
          <a href="https://gurdharam.com" target="_blank" rel="noopener noreferrer" aria-label="Navigate to Gurdharam" style="display:inline-flex; align-items:center; gap:6px; color:#d4af37; font-weight:600; text-decoration:none;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="14" height="14" style="vertical-align:middle;"><rect width="100" height="100" rx="20" fill="#0c0c0c"/><circle cx="50" cy="50" r="42" fill="none" stroke="#d4af37" stroke-width="6"/><text x="50" y="64" font-family="system-ui, sans-serif" font-weight="900" font-size="44" fill="#d4af37" text-anchor="middle">G</text></svg>
            <span>Made by Gurdharam</span>
          </a>
        `;
      }
    }

    // Rewrite drawer nav links to subpath /aurelius-atelier/
    document.querySelectorAll("#site-menu a[href], nav a[href]").forEach(a => {
      const href = a.getAttribute("href");
      if (href && href.startsWith("/") && !href.startsWith(PREFIX)) {
        a.setAttribute("href", PREFIX + href);
      }
    });
  }

  function activateMaster() {
    if (!document.getElementById("atelier-timeline-track")) {
      const track = document.createElement("div");
      track.id = "atelier-timeline-track";
      track.innerHTML = '<div id="atelier-timeline-fill"></div>';
      document.body.appendChild(track);
    }

    mountHeroVideos();
    applyBespokeImages();
    applyDrawerMenu();

    // Check periodically until elements are present
    const interval = setInterval(() => {
      const vMounted = mountHeroVideos();
      applyBespokeImages();
      applyDrawerMenu();
      if (vMounted) clearInterval(interval);
    }, 200);

    const obs = new MutationObserver(() => {
      mountHeroVideos();
      applyBespokeImages();
      applyDrawerMenu();
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }

  // Hook into Enter button click or keyboard
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("button[aria-label=\\"Enter Website\\"]") || (e.target.closest(".sc-60e682e4-0 button") && e.target.closest("button").innerText.includes("Enter"));
    if (btn) {
      sessionStorage.setItem("vanguard:entered", "1");
      setTimeout(activateMaster, 100);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const btn = document.querySelector("button[aria-label=\\"Enter Website\\"]");
      if (btn) {
        sessionStorage.setItem("vanguard:entered", "1");
        setTimeout(activateMaster, 100);
      }
    }
  });

  // Also activate if already entered or subpage
  const isHome = window.location.pathname === PREFIX || window.location.pathname === PREFIX + "/" || window.location.pathname === "/" || window.location.pathname === "";
  if (!isHome || sessionStorage.getItem("vanguard:entered") === "1" || !document.querySelector(".sc-60e682e4-0")) {
    setTimeout(activateMaster, 200);
  }
})();
</script>"""

def patch_chunks():
    chunk_path = os.path.join(DEST_ROOT, '_next/static/chunks/0_sa0502a_zms.js')
    if os.path.exists(chunk_path):
        with open(chunk_path, 'r', encoding='utf-8') as f:
            c = f.read()
        target = 'function m(){l.useDynamicRouteParams?.("usePathname()");let e=(0,u.useContext)(a.PathnameContext);return"u"<typeof window&&e&&_("usePathname()"),e}'
        replacement = 'function m(){l.useDynamicRouteParams?.("usePathname()");let e=(0,u.useContext)(a.PathnameContext);if(e&&e.startsWith("/aurelius-atelier"))e=e.slice(17)||"/\";return"u"<typeof window&&e&&_("usePathname()"),e}'
        if target in c:
            c = c.replace(target, replacement)
            with open(chunk_path, 'w', encoding='utf-8') as f:
                f.write(c)
            print("Patched usePathname in 0_sa0502a_zms.js")

def main():
    print("Building Vanguard production suite across all 15 routes...")
    patch_chunks()

    for page in PAGES:
        src_path = os.path.join(SRC_ROOT, page, 'index.html') if page else os.path.join(SRC_ROOT, 'index.html')
        dest_dir = os.path.join(DEST_ROOT, page) if page else DEST_ROOT
        dest_path = os.path.join(dest_dir, 'index.html')

        if not os.path.exists(src_path):
            print(f"Warning: {src_path} not found, skipping")
            continue

        os.makedirs(dest_dir, exist_ok=True)
        with open(src_path, 'r', encoding='utf-8') as f:
            html = f.read()

        # 1. Subpath /aurelius-atelier/ rewriting for static assets
        html = html.replace('/_next/', '/aurelius-atelier/_next/')
        html = html.replace('/ActiveFrame.js', '/aurelius-atelier/ActiveFrame.js')
        for static_file in ['favicon.ico', 'apple-icon.png', 'icon0.svg', 'icon1.png', 'manifest.json']:
            html = html.replace(f'/{static_file}', f'/aurelius-atelier/{static_file}')

        # 2. Inject TURBOPACK_CHUNK_BASE_PATH immediately after <head>
        turbo_script = '<script>window.TURBOPACK_CHUNK_BASE_PATH="/aurelius-atelier/_next/";</script>'
        html = html.replace('<head>', f'<head>{turbo_script}')

        # 3. Rebranding (Safe head & text replacements, preserving React Flight protocol script keys)
        html = re.sub(r'(<title>[^<]*?)Forge Automotive(</title>)', r'\g<1>Vanguard Automotive\g<2>', html)
        html = html.replace('Forge home', 'Vanguard home')
        html = html.replace('content="Forge Automotive"', 'content="Vanguard Automotive"')
        html = html.replace('builds@forgeautomotive.co.uk', 'atelier@vanguardautomotive.co.uk')
        html = re.sub(r'(<link\s+rel="canonical"\s+href=")https://forgeautomotive\.co\.uk([^"]*")', r'\1https://gurination1.github.io/aurelius-atelier\2', html)
        html = re.sub(r'(<meta\s+property="og:url"\s+content=")https://forgeautomotive\.co\.uk([^"]*")', r'\1https://gurination1.github.io/aurelius-atelier\2', html)

        # 4. Inject CSS before </head> and SCRIPT before </body>
        if '</head>' in html:
            html = html.replace('</head>', f'{VANGUARD_CSS}\n</head>')
        else:
            html = f'{VANGUARD_CSS}\n{html}'

        if '</body>' in html:
            html = html.replace('</body>', f'{VANGUARD_SCRIPT}\n</body>')
        else:
            html = f'{html}\n{VANGUARD_SCRIPT}'

        # 5. On subpages, add subpage-view class to <html> for immediate loading without duplicate class attribute
        if page:
            if 'class="' in html[:300]:
                html = re.sub(r'(<html[^>]*class=")', r'\1subpage-view site-entered ', html, count=1)
            else:
                html = html.replace('<html', '<html class="subpage-view site-entered"', 1)

        with open(dest_path, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"Processed: {dest_path}")

    print("All 15 routes compiled with perfection!")

if __name__ == '__main__':
    main()
