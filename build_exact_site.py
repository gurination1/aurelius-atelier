import os
import re
import json
import shutil

SRC_DIR = '/root/forge-site-live'
DEST_DIR = '/root/forge-source'
BASE_PATH = '/aurelius-atelier'

PAGES = [
    '',
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

# Load vanguard_image_map.json
with open(os.path.join(DEST_DIR, 'assets/vanguard_image_map.json'), 'r', encoding='utf-8') as f:
    raw_map = json.load(f)

# Filter out OEM SVGs so they are NEVER mapped to supercar images
IMAGE_MAP = {k: v for k, v in raw_map.items() if not k.endswith('.svg')}

OEM_SVGS = {
    '0376b1a1dd08bc79a767f1f5f46befe617f2882c-120x28.svg',
    '1056d91ce910f0816d6467e96bf2d2a28befa4ba-49x60.svg',
    '2c9cafc8b15ad6961ff9d5c0a57a0dc2c97c2fa2-120x42.svg',
    '2cb28ac57667b0d9bbac8d68c0a630859ce889b2-120x10.svg',
    '57eab24a91878f828a2a6e7461c84a603eb8240b-52x60.svg',
    '5e7b943bfe0a0908a7035693ae1a9ed209b914b8-120x8.svg',
    '647bea4b10ef8f9bcea149298271657e9c72a670-115x60.svg',
    '69fee80a9c1bc7ec5d4b22c662319db174326f16-60x60.svg',
    '6e49cc1f76bd2d6a2049408d12f00a58b2c6f889-60x60.svg',
    '8493e4780bacc8d8f9a4601cdb755bacf46b0ab7-120x27.svg',
    '9e728876539cbcc9f82941b505b4522fd1db5e6b-120x8.svg',
    'e271601746e95bcd1b5b1ebfce37d51ce581b8ad-120x38.svg',
    'e7cfeea594b2ac1cf927270961ace6ce8ebffb0e-120x60.svg',
    'e8ce4b533a95fd19ebe5fa323495d1c2d3170074-120x18.svg'
}

def map_sanity_file(fname):
    if fname.endswith('.svg') or fname in OEM_SVGS:
        return None # Preserve OEM partner logo
    if fname in IMAGE_MAP:
        return IMAGE_MAP[fname]
    h = fname[:40]
    if h in IMAGE_MAP:
        return IMAGE_MAP[h]
    if '4d877ce34' in fname:
        return '4d877ce34bbd3354636fb32f4d5f944e2487c8b4-512x512.png'
    if 'd7577b4b' in fname:
        return 'd7577b4b9f6a6acda5594e9e6171678dba58e133-1200x630.jpg'
    return None

sanity_pattern = re.compile(r'https?://cdn\.sanity\.io/images/[^/]+/production/([a-zA-Z0-9_\-\.]+)(?:\\u[0-9a-fA-F]{4}|[^\s"\'<>\\])*')

def sanity_replacer(match):
    fname = match.group(1)
    mapped = map_sanity_file(fname)
    if mapped is None:
        return match.group(0) # Keep OEM partner logo untouched
    return f"{BASE_PATH}/assets/cars/{mapped}"

# Exact 2-Video Scroll Blend Engine (Non-looping intro + Lenis-aware scroll scrub)
HERO_BLEND_ENGINE = f"""
<!-- Smooth 2-Video Scroll Blend Engine (Non-looping intro + Lenis-aware scroll scrub) -->
<script id="hero-blend-engine">
(function() {{
  function ensureHeroMedia() {{
    const container = document.querySelector(".sc-2b039258-5") || document.querySelector("section.sc-2b039258-0");
    if (!container) return;

    const oldContinuous = container.querySelector(".hero-continuous-media");
    if (oldContinuous) oldContinuous.remove();

    document.querySelectorAll(".hero-bg-media").forEach(el => el.remove());

    if (container.querySelector(".hero-blend-intro")) return;

    // 1. Lineup Hero Video (Video 1 - Plays once and holds last frame, DOES NOT LOOP)
    const introVideo = document.createElement("video");
    introVideo.className = "hero-blend-intro";
    introVideo.autoplay = true;
    introVideo.loop = false;
    introVideo.muted = true;
    introVideo.playsInline = true;
    introVideo.poster = "{BASE_PATH}/assets/videos/hero_poster.jpg";
    introVideo.style.cssText = "position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:1; pointer-events:none; opacity:1; will-change:opacity,transform; transition:opacity 0.25s ease-out;";

    introVideo.addEventListener("ended", () => {{
      if (introVideo.duration) {{
        try {{
          introVideo.currentTime = Math.max(0, introVideo.duration - 0.04);
        }} catch(e) {{}}
      }}
      introVideo.pause();
    }});

    const s1 = document.createElement("source");
    s1.src = "{BASE_PATH}/assets/videos/hero_desktop.mp4";
    s1.type = "video/mp4";
    s1.media = "(min-width: 768px)";
    const s2 = document.createElement("source");
    s2.src = "{BASE_PATH}/assets/videos/hero_mobile.mp4";
    s2.type = "video/mp4";
    introVideo.appendChild(s1);
    introVideo.appendChild(s2);

    // 2. Flythrough Scrub Video (Video 2 - All-Intra 100% Keyframe matching exact resolution 2560x1440)
    const scrollVideo = document.createElement("video");
    scrollVideo.className = "hero-blend-scroll";
    scrollVideo.autoplay = false;
    scrollVideo.loop = false;
    scrollVideo.muted = true;
    scrollVideo.playsInline = true;
    scrollVideo.preload = "auto";
    scrollVideo.poster = "{BASE_PATH}/assets/videos/hero_settled_frame.jpg";
    scrollVideo.style.cssText = "position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:2; pointer-events:none; opacity:0; will-change:opacity; transition:opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1);";

    const sc1 = document.createElement("source");
    sc1.src = "{BASE_PATH}/assets/videos/scroll_desktop_exact_intra.mp4";
    sc1.type = "video/mp4";
    sc1.media = "(min-width: 768px)";
    const sc2 = document.createElement("source");
    sc2.src = "{BASE_PATH}/assets/videos/scroll_mobile_exact_intra.mp4";
    sc2.type = "video/mp4";
    scrollVideo.appendChild(sc1);
    scrollVideo.appendChild(sc2);

    container.insertBefore(scrollVideo, container.firstChild);
    container.insertBefore(introVideo, container.firstChild);

    introVideo.play().catch(() => {{}});
    // Prime scrollVideo buffer for instant decoding
    scrollVideo.load();
    const primePromise = scrollVideo.play();
    if (primePromise !== undefined) {{
      primePromise.then(() => {{
        scrollVideo.pause();
        scrollVideo.currentTime = 0;
      }}).catch(() => {{}});
    }}

    // 3. Robust multi-source scroll reader (div.lenis + window + doc)
    function getScrollY() {{
      const lenisDiv = document.querySelector("div.lenis");
      const lenisScroll = lenisDiv ? lenisDiv.scrollTop : 0;
      const winScroll = window.scrollY || document.documentElement.scrollTop || (document.scrollingElement ? document.scrollingElement.scrollTop : 0) || 0;
      return Math.max(lenisScroll, winScroll);
    }}

    // 4. 3D Perspective Parallax Tilt on Hero Intro (matching original site, RAF-throttled)
    let tiltRAF = null;
    let lastTiltX = 0;
    let lastTiltY = 0;
    window.addEventListener("pointermove", (e) => {{
      const scrollY = getScrollY();
      if (scrollY > 180) return;
      lastTiltX = (e.clientX / window.innerWidth - 0.5) * 2;
      lastTiltY = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!tiltRAF) {{
        tiltRAF = requestAnimationFrame(() => {{
          introVideo.style.transform = `perspective(1200px) rotateY(${{lastTiltX * -2.5}}deg) rotateX(${{lastTiltY * 2.5}}deg) scale(1.02)`;
          tiltRAF = null;
        }});
      }}
    }}, {{ passive: true }});

    // 5. Ultra-Smooth Lerped Video Blend & Scrub Controller (Source-Site Architecture)
    let targetProgress = 0;
    let currentProgress = 0;
    let isSeeking = false;

    function updateTargetProgress() {{
      const scrollY = getScrollY();
      const heroSpacer = document.querySelector(".sc-2b3d2147-3") || document.querySelector(".fHUmBT");
      const spacerHeight = heroSpacer ? heroSpacer.offsetHeight : (window.innerHeight * 1.4);
      targetProgress = Math.min(1, Math.max(0, scrollY / spacerHeight));
    }}

    window.addEventListener("scroll", updateTargetProgress, {{ passive: true }});
    document.addEventListener("scroll", updateTargetProgress, {{ passive: true, capture: true }});
    const lenisContainer = document.querySelector("div.lenis");
    if (lenisContainer) {{
      lenisContainer.addEventListener("scroll", updateTargetProgress, {{ passive: true }});
    }}

    scrollVideo.addEventListener("seeked", () => {{
      isSeeking = false;
    }});

    function renderScrubLoop() {{
      // Always sample current scroll position on each RAF to capture Lenis momentum
      updateTargetProgress();

      // Silky smooth lerp matching Lenis momentum
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.001) {{
        currentProgress += diff * 0.28;
      }} else {{
        currentProgress = targetProgress;
      }}
      if (targetProgress === 0 && currentProgress < 0.08) {{
        currentProgress = 0;
      }}
      if (targetProgress === 1 && currentProgress > 0.92) {{
        currentProgress = 1;
      }}

      // Crossfade Blend: Progress 0.00 -> 0.20
      const blendThreshold = 0.20;
      if (currentProgress <= 0.005) {{
        scrollVideo.style.opacity = "0";
        introVideo.style.opacity = "1";
        if (introVideo.paused && introVideo.currentTime < ((introVideo.duration || 4.1) - 0.1)) {{
          introVideo.play().catch(() => {{}});
        }}
      }} else if (currentProgress < blendThreshold) {{
        const ratio = (currentProgress - 0.008) / (blendThreshold - 0.008);
        scrollVideo.style.opacity = ratio.toFixed(4);
        introVideo.style.opacity = (1 - ratio).toFixed(4);
        if (introVideo.paused && introVideo.currentTime < ((introVideo.duration || 4.1) - 0.1)) {{
          introVideo.play().catch(() => {{}});
        }}
      }} else {{
        scrollVideo.style.opacity = "1";
        introVideo.style.opacity = "0";
        if (!introVideo.paused) introVideo.pause();
      }}

      // Non-blocking seek on all-intra video stream
      if (scrollVideo.duration && !scrollVideo.seeking && !isSeeking) {{
        const targetTime = Math.min(scrollVideo.duration - 0.04, currentProgress * scrollVideo.duration);
        if (Math.abs(scrollVideo.currentTime - targetTime) > 0.015) {{
          isSeeking = true;
          if (typeof scrollVideo.fastSeek === 'function') {{
            scrollVideo.fastSeek(targetTime);
          }} else {{
            scrollVideo.currentTime = targetTime;
          }}
        }}
      }}

      requestAnimationFrame(renderScrubLoop);
    }}

    requestAnimationFrame(renderScrubLoop);
    updateTargetProgress();
  }}

  ensureHeroMedia();
  const observer = new MutationObserver(() => {{
    ensureHeroMedia();
  }});
  observer.observe(document.body || document.documentElement, {{ childList: true, subtree: true }});

  // Interactive Preloader Controller
  (function() {{
    const s0 = document.getElementById("S:0");
    if (s0) s0.removeAttribute("hidden");

    let isExiting = false;
    function onEnter() {{
      if (isExiting) return;
      isExiting = true;
      sessionStorage.setItem("forge_entered", "true");

      const curDialog = document.querySelector('[role="dialog"]');
      if (curDialog) {{
        const wordsEl = curDialog.querySelector("[data-cinematic-words]");
        if (wordsEl) {{
          const spans = wordsEl.querySelectorAll(".cinematic-word");
          spans.forEach(s => {{
            s.style.transition = "all 0.5s cubic-bezier(0.16,1,0.3,1)";
            s.style.opacity = "0";
            s.style.filter = "blur(0.8rem)";
            s.style.transform = "translateY(-12px)";
          }});
        }}
        const enterContainer = curDialog.querySelector(".preloader-enter-container");
        if (enterContainer) {{
          enterContainer.style.transition = "all 0.4s cubic-bezier(0.16,1,0.3,1)";
          enterContainer.style.opacity = "0";
          enterContainer.style.transform = "translateY(16px)";
        }}

        curDialog.style.transition = "opacity 0.8s cubic-bezier(0.16,1,0.3,1)";
        curDialog.style.opacity = "0";
        curDialog.style.pointerEvents = "none";
      }}

      document.documentElement.classList.add("site-entered");
      document.body.classList.add("site-entered");
      document.documentElement.classList.remove("lenis-stopped");
      document.querySelectorAll(".lenis").forEach(el => {{
        el.classList.remove("lenis-stopped");
        el.style.overflowY = "auto";
      }});

      const introVid = document.querySelector(".hero-blend-intro");
      if (introVid && introVid.paused) {{
        introVid.play().catch(() => {{}});
      }}

      setTimeout(() => {{
        if (curDialog) {{
          curDialog.style.display = "none";
          if (curDialog.parentNode && window.__origRemoveChild) {{
            window.__origRemoveChild.call(curDialog.parentNode, curDialog);
          }}
        }}
      }}, 850);
    }}

    // Global capture-phase listeners always active
    document.addEventListener("click", (e) => {{
      const b = e.target.closest("button, [aria-label='Enter Website'], .sc-60e682e4-7, .preloader-enter-btn");
      if (b) {{
        onEnter();
      }}
    }}, true);

    window.addEventListener("keydown", (e) => {{
      if ((e.key === "Enter" || e.key === " ") && !sessionStorage.getItem("forge_entered")) {{
        onEnter();
      }}
    }}, true);

    // Initial preloader setup
    function setupPreloader() {{
      const dialog = document.querySelector('[role="dialog"]');
      if (!dialog) return;

      const forceShow = window.location.search.includes("preloader=1");
      const alreadyEntered = !forceShow && sessionStorage.getItem("forge_entered") === "true";
      if (alreadyEntered) {{
        dialog.style.display = "none";
        document.documentElement.classList.add("site-entered");
        document.body.classList.add("site-entered");
        document.documentElement.classList.remove("lenis-stopped");
        document.querySelectorAll(".lenis").forEach(el => {{
          el.classList.remove("lenis-stopped");
          el.style.overflowY = "auto";
        }});
        const video = document.querySelector(".hero-blend-intro");
        if (video && video.paused && video.currentTime < ((video.duration || 4.1) - 0.1)) {{
          video.play().catch(() => {{}});
        }}
        return;
      }}

      dialog.style.display = "grid";
      dialog.style.opacity = "1";

      const wordsEl = dialog.querySelector("[data-cinematic-words]");
      const progressBox = dialog.querySelector(".sc-60e682e4-4");
      const progressBar = dialog.querySelector(".cGDbxd");
      const enterContainer = dialog.querySelector(".preloader-enter-container");

      if (wordsEl && !wordsEl.dataset.split) {{
        wordsEl.dataset.split = "true";
        const txt = wordsEl.textContent.trim();
        const words = txt.split(/\\s+/);
        wordsEl.innerHTML = words.map(w => `<span class="cinematic-word" style="display:inline-block; margin-right:0.35em; opacity:0; filter:blur(0.8rem); transform:translateY(12px); will-change:opacity,filter,transform; transition:opacity 0.65s cubic-bezier(0.16,1,0.3,1), filter 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1);">${{w}}</span>`).join("");
        wordsEl.style.visibility = "visible";
        wordsEl.style.opacity = "1";

        const spans = wordsEl.querySelectorAll(".cinematic-word");
        spans.forEach((span, idx) => {{
          setTimeout(() => {{
            span.style.opacity = "1";
            span.style.filter = "blur(0)";
            span.style.transform = "translateY(0)";
          }}, 200 + idx * 110);
        }});
      }}

      if (progressBar) {{
        progressBar.style.transition = "transform 2.2s cubic-bezier(0.25, 1, 0.5, 1)";
        setTimeout(() => {{
          progressBar.style.transform = "scaleX(1)";
        }}, 300);
      }}

      setTimeout(() => {{
        if (progressBox) {{
          progressBox.style.transition = "opacity 0.35s ease";
          progressBox.style.opacity = "0";
          setTimeout(() => {{ progressBox.style.display = "none"; }}, 350);
        }}
        if (enterContainer) {{
          enterContainer.style.display = "flex";
          enterContainer.style.opacity = "0";
          enterContainer.style.transform = "translateY(16px)";
          enterContainer.style.transition = "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)";
          requestAnimationFrame(() => {{
            enterContainer.style.opacity = "1";
            enterContainer.style.transform = "translateY(0)";
          }});
        }}
      }}, 2300);
    }}

    setupPreloader();
    if (document.readyState === "loading") {{
      document.addEventListener("DOMContentLoaded", setupPreloader);
    }}
  }})();
}})();
</script>
<style id="hero-blend-styles">
.hero-bg-media,
.sc-2b039258-5 canvas {{
  display: none !important;
}}
.sc-60e682e4-0 {{
  pointer-events: auto !important;
}}
.sc-60e682e4-2,
.sc-60e682e4-3,
.sc-60e682e4-7,
.preloader-enter-btn,
[aria-label="Enter Website"] {{
  position: relative !important;
  z-index: 1000 !important;
  pointer-events: auto !important;
  cursor: pointer !important;
}}
.preloader-enter-btn {{
  background: transparent;
  border: none;
  color: var(--brand-bc5, #F2F1ED);
  font-family: inherit;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.35rem;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  padding: 0.75rem 1.8rem;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}}
.preloader-enter-btn .enter-text-wrap {{
  display: inline-flex;
  position: relative;
}}
.preloader-enter-btn .enter-text-wrap > span {{
  display: inline-block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
}}
.preloader-enter-btn:hover .enter-text-wrap > span {{
  transform: translateY(-3px);
  color: #fff;
}}
.preloader-enter-btn::after {{
  content: '';
  position: absolute;
  bottom: 4px;
  left: 15%;
  width: 70%;
  height: 1px;
  background: var(--brand-bc5, #F2F1ED);
  opacity: 0.5;
  transform: scaleX(0.5);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
}}
.preloader-enter-btn:hover::after {{
  transform: scaleX(1);
  opacity: 1;
}}
html .lenis.lenis-stopped:not(.lenis-autoToggle) {{
  overflow: auto !important;
}}
.lenis {{
  overflow-y: auto !important;
  -webkit-overflow-scrolling: touch;
}}
</style>
"""

# Runtime interceptor for images and subpath compatibility
RUNTIME_HEAD_INJECTION = f"""
<script id="gh-pages-base">
(function() {{
  const isGh = window.location.hostname.includes('github.io') || window.location.pathname.startsWith('{BASE_PATH}');
  window.__BASE_PATH__ = isGh ? '{BASE_PATH}' : '';
  window.TURBOPACK_CHUNK_BASE_PATH = (isGh ? '{BASE_PATH}' : '') + '/_next/';

  // Protect preloader root from unmounting by React DOM during client hydration
  const origRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function(child) {{
    if (child && (child.id === 'forge-preloader-root' || (child.getAttribute && child.getAttribute('role') === 'dialog'))) {{
      return child;
    }}
    return origRemoveChild.apply(this, arguments);
  }};
  window.__origRemoveChild = origRemoveChild;
}})();
</script>
<script id="runtime-image-guard">
(function() {{
  const imgMap = {json.dumps(IMAGE_MAP)};
  function rewriteUrl(url) {{
    if (!url || typeof url !== 'string') return url;
    if (url.includes('.svg')) return url; // NEVER TOUCH OEM SVGS
    if (url.includes('cdn.sanity.io/images/')) {{
      const parts = url.split('?')[0].split('/');
      const fname = parts[parts.length - 1];
      if (fname.startsWith('fcdbdf14cba64b77f457e40c415f08366cd05043')) {{
        return '{BASE_PATH}/assets/cars/atelier_stitching.jpg';
      }}
      if (fname.startsWith('135b8a261d63c2eacb7a981b7479b94c4a74998c')) {{
        return '{BASE_PATH}/assets/cars/porsche_gt3rs_overhead.png';
      }}
      if (imgMap[fname]) return '{BASE_PATH}/assets/cars/' + imgMap[fname];
      const h = fname.slice(0, 40);
      if (imgMap[h]) return '{BASE_PATH}/assets/cars/' + imgMap[h];
      if (fname.includes('4d877ce34')) return '{BASE_PATH}/assets/cars/4d877ce34bbd3354636fb32f4d5f944e2487c8b4-512x512.png';
      if (fname.includes('d7577b4b')) return '{BASE_PATH}/assets/cars/d7577b4b9f6a6acda5594e9e6171678dba58e133-1200x630.jpg';
      return '{BASE_PATH}/assets/cars/' + fname;
    }}
    return url;
  }}

  function rewriteSrcset(val) {{
    if (!val || typeof val !== 'string') return val;
    return val.replace(/https?:\\/\\/cdn\\.sanity\\.io\\/images\\/[^\\/]+\\/production\\/([a-zA-Z0-9_\\-\\.]+)(?:[^\\s,]*)/g, function(match, fname) {{
      return rewriteUrl(match);
    }});
  }}

  function cleanImg(img) {{
    if (!img) return;
    const s = img.getAttribute('src');
    if (s && s.includes('cdn.sanity.io') && !s.includes('.svg')) {{
      img.setAttribute('src', rewriteUrl(s));
    }}
    const ss = img.getAttribute('srcset');
    if (ss && ss.includes('cdn.sanity.io')) {{
      img.setAttribute('srcset', rewriteSrcset(ss));
    }}
  }}

  const imgProto = HTMLImageElement.prototype;
  const origSrcDesc = Object.getOwnPropertyDescriptor(imgProto, 'src') || Object.getOwnPropertyDescriptor(Element.prototype, 'src');
  if (origSrcDesc && origSrcDesc.set) {{
    Object.defineProperty(imgProto, 'src', {{
      set: function(val) {{
        return origSrcDesc.set.call(this, rewriteUrl(val));
      }},
      get: function() {{
        return origSrcDesc.get.call(this);
      }},
      configurable: true
    }});
  }}

  const origSrcsetDesc = Object.getOwnPropertyDescriptor(imgProto, 'srcset') || Object.getOwnPropertyDescriptor(Element.prototype, 'srcset');
  if (origSrcsetDesc && origSrcsetDesc.set) {{
    Object.defineProperty(imgProto, 'srcset', {{
      set: function(val) {{
        return origSrcsetDesc.set.call(this, rewriteSrcset(val));
      }},
      get: function() {{
        return origSrcsetDesc.get.call(this);
      }},
      configurable: true
    }});
  }}

  const origSetAttr = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function(name, val) {{
    if (name === 'src' && typeof val === 'string') {{
      val = rewriteUrl(val);
    }} else if ((name === 'srcset' || name === 'srcSet') && typeof val === 'string') {{
      val = rewriteSrcset(val);
    }}
    return origSetAttr.call(this, name, val);
  }};

  if (typeof MutationObserver !== 'undefined') {{
    const mo = new MutationObserver(function(mutations) {{
      for (let i = 0; i < mutations.length; i++) {{
        const m = mutations[i];
        if (m.type === 'childList') {{
          for (let j = 0; j < m.addedNodes.length; j++) {{
            const node = m.addedNodes[j];
            if (node.nodeType === 1) {{
              if (node.tagName === 'IMG') cleanImg(node);
              if (node.querySelectorAll) {{
                const nested = node.querySelectorAll('img');
                for (let k = 0; k < nested.length; k++) cleanImg(nested[k]);
              }}
            }}
          }}
        }} else if (m.type === 'attributes') {{
          cleanImg(m.target);
        }}
      }}
    }});
    mo.observe(document.documentElement, {{ childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'srcset'] }});
  }}

  document.addEventListener('DOMContentLoaded', function() {{
    document.querySelectorAll('img').forEach(cleanImg);
  }});
}})();
</script>
"""

def process_page(slug):
    in_file = os.path.join(SRC_DIR, slug, 'index.html') if slug else os.path.join(SRC_DIR, 'index.html')
    out_dir = os.path.join(DEST_DIR, slug) if slug else DEST_DIR
    out_file = os.path.join(out_dir, 'index.html')

    with open(in_file, 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. Replace Sanity images (preserving Section 4 OEM partner logo SVGs)
    html, rep_count = sanity_pattern.subn(sanity_replacer, html)

    # 2. Wire GitHub Pages subpath compatibility (prevent double prefix)
    html = re.sub(r'([\"\'`])/_next/', rf'\1{BASE_PATH}/_next/', html)
    html = re.sub(r'([\"\'`])/(favicon\.ico|icon0\.svg|icon1\.png|apple-icon\.png|manifest\.json)', rf'\1{BASE_PATH}/\2', html)
    html = re.sub(r'([\"\'`])/web-app-manifest-', rf'\1{BASE_PATH}/web-app-manifest-', html)

    # Internal links
    html = re.sub(r'href="/(builds|stock|contact|cookies|privacy|terms)(/?)"', rf'href="{BASE_PATH}/\1\2"', html)
    html = re.sub(r'href="/(builds|stock)/(fa\d+)(/?)"', rf'href="{BASE_PATH}/\1/\2\3"', html)
    html = re.sub(r'href="/"', f'href="{BASE_PATH}/"', html)

    # Inject runtime head scripts
    if '<head>' in html:
        html = html.replace('<head>', f'<head>\n{RUNTIME_HEAD_INJECTION}')

    # If home page, unhide preloader, inject Enter markup and 2-video scroll blend engine
    if slug == '':
        html = html.replace('<div hidden id="S:0">', '<div id="S:0">')
        html = html.replace('<div hidden="" id="S:0">', '<div id="S:0">')
        enter_markup = """<div class="sc-60e682e4-3 eAUikG preloader-enter-container" style="display:none; flex-direction:column; align-items:center; text-align:center; opacity:0; transform:translateY(12px); will-change:opacity,transform; margin-top:1.5rem;"><button type="button" aria-label="Enter Website" class="sc-60e682e4-7 Wejkv preloader-enter-btn"><span class="enter-text-wrap"><span>E</span><span>n</span><span>t</span><span>e</span><span>r</span></span></button><span class="sc-60e682e4-6 eIFaFQ preloader-cookie-notice" style="margin-top:0.75rem; font-size:0.75rem; letter-spacing:0.06rem; color:rgba(242,241,237,0.5); text-transform:uppercase; font-family:var(--font-body,sans-serif); max-width:380px; line-height:1.4;">By pressing “Enter” on this website, you accept the use of cookies for analytics</span></div>"""
        html = re.sub(r'(<div class="sc-60e682e4-5 cGDbxd"></div></div>)', rf'\1{enter_markup}', html)
        html = re.sub(r'<img([^>]+alt="Three custom Forge vehicles[^>]+)src="data:image/gif;base64,[^"]+"([^>]*)>',
                      rf'<img\1src="{BASE_PATH}/assets/cars/9ae611ac36488077eadfc0d1f8a5aa163aae1c8e-880x1592.jpg"\2>', html)
        html = html.replace('</body>', f'{HERO_BLEND_ENGINE}\n</body>')

    # If builds catalog page, restore all 7 build cards with their authentic photography
    if slug == 'builds':
        card_map = {
            'Porsche 911': 'fdaa9824ff8842641b99786a35370f65f6ec521d-880x1592.jpg',
            'Defender 130': 'd44ccc566e08123c477f06b6eee3aec7c01de1f7-880x1592.jpg',
            'Lamborghini Urus': '0109009941f809c9ec799f8cb8331a3dfa054074-880x1592.jpg',
            'BMW M5': '422b56f1c62d29f61f570927fafcf0016fb731aa-880x1592.jpg',
            'Mercedes G63': 'f44102fb39a1f2853a2b050188e2ec2c66b4bcca-880x1592.jpg',
        }
        def replace_deferred_build(match):
            tag = match.group(0)
            for k, v in card_map.items():
                if k in tag:
                    tag = re.sub(r'src="data:image/gif;base64,[^"]+"', f'src="{BASE_PATH}/assets/cars/{v}"', tag)
                    tag = tag.replace('data-deferred="true"', '')
                    break
            return tag
        html = re.sub(r'<img[^>]+data-deferred="true"[^>]*>', replace_deferred_build, html)

    os.makedirs(out_dir, exist_ok=True)
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(html)

    print(f"Processed {slug or 'home'} -> {out_file} (replaced {rep_count} sanity images)")

print("Building exact site from live source...")
for p in PAGES:
    process_page(p)

# Create 404.html from builds/index.html as GitHub Pages SPA fallback
with open(os.path.join(DEST_DIR, 'builds/index.html'), 'r', encoding='utf-8') as f:
    b_html = f.read()
with open(os.path.join(DEST_DIR, '404.html'), 'w', encoding='utf-8') as f:
    f.write(b_html)
print("Updated 404.html")

# Turbopack base path update
turbo_path = os.path.join(DEST_DIR, '_next/static/chunks/turbopack-09j_a0p3oj5e6.js')
if os.path.exists(turbo_path):
    with open(turbo_path, 'r', encoding='utf-8') as f:
        t_code = f.read()
    t_code = t_code.replace('"string"==typeof TURBOPACK_CHUNK_BASE_PATH?TURBOPACK_CHUNK_BASE_PATH:"/_next/"',
                            f'"string"==typeof TURBOPACK_CHUNK_BASE_PATH?TURBOPACK_CHUNK_BASE_PATH:"{BASE_PATH}/_next/"')
    with open(turbo_path, 'w', encoding='utf-8') as f:
        f.write(t_code)
    print("Patched turbopack chunk base path")

# Ensure .nojekyll exists
with open(os.path.join(DEST_DIR, '.nojekyll'), 'w') as f:
    pass

print("Build complete!")
