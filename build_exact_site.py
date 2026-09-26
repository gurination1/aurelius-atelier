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
  let introVideo = null;
  let scrollVideo = null;
  let heroWrapper = null;

  function ensureHeroMedia() {{
    const heroSection = document.querySelector("section.sc-2b039258-0") || document.querySelector(".sc-2b3d2147-2");
    if (!heroSection) return;

    if (!heroWrapper) {{
      heroWrapper = document.createElement("div");
      heroWrapper.id = "hero-blend-wrapper";
      heroWrapper.className = "hero-blend-wrapper";
      heroWrapper.style.cssText = "position:absolute; inset:0; width:100%; height:100%; overflow:hidden; pointer-events:none; z-index:0; background:#000000 url('{BASE_PATH}/assets/videos/hero_settled_frame.jpg') center/cover no-repeat; opacity:0; visibility:hidden; transition:opacity 0.6s cubic-bezier(0.16,1,0.3,1);";

      // 1. Lineup Hero Video (Video 1 - Plays once and holds last frame, DOES NOT LOOP)
      introVideo = document.createElement("video");
      introVideo.className = "hero-blend-intro";
      introVideo.autoplay = false;
      introVideo.loop = false;
      introVideo.muted = true;
      introVideo.playsInline = true;
      introVideo.preload = "auto";
      introVideo.poster = "{BASE_PATH}/assets/videos/hero_settled_frame.jpg";
      introVideo.style.cssText = "position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:1; pointer-events:none; opacity:1; will-change:opacity,transform; transition:opacity 0.25s ease-out;";

      introVideo.addEventListener("ended", () => {{
        if (introVideo.duration) {{
          try {{
            introVideo.currentTime = Math.max(0, introVideo.duration - 0.08);
          }} catch(e) {{}}
        }}
        introVideo.pause();
      }});

      const s1 = document.createElement("source");
      s1.src = "{BASE_PATH}/assets/videos/hero_desktop_4k.mp4";
      s1.type = "video/mp4";
      s1.media = "(min-width: 768px)";
      const s2 = document.createElement("source");
      s2.src = "{BASE_PATH}/assets/videos/hero_mobile_upscaled.mp4";
      s2.type = "video/mp4";
      introVideo.appendChild(s1);
      introVideo.appendChild(s2);

      // 2. Flythrough Scrub Video (Video 2 - All-Intra 100% Keyframe 4K/FHD)
      scrollVideo = document.createElement("video");
      scrollVideo.className = "hero-blend-scroll";
      scrollVideo.autoplay = false;
      scrollVideo.loop = false;
      scrollVideo.muted = true;
      scrollVideo.playsInline = true;
      scrollVideo.preload = "auto";
      scrollVideo.poster = "{BASE_PATH}/assets/videos/hero_settled_frame.jpg";
      scrollVideo.style.cssText = "position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:2; pointer-events:none; opacity:0; will-change:opacity; transition:opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1);";

      const sc1 = document.createElement("source");
      sc1.src = "{BASE_PATH}/assets/videos/scroll_desktop_4k_intra.mp4";
      sc1.type = "video/mp4";
      sc1.media = "(min-width: 768px)";
      const sc2 = document.createElement("source");
      sc2.src = "{BASE_PATH}/assets/videos/scroll_mobile_fhd_intra.mp4";
      sc2.type = "video/mp4";
      scrollVideo.appendChild(sc1);
      scrollVideo.appendChild(sc2);

      heroWrapper.appendChild(scrollVideo);
      heroWrapper.appendChild(introVideo);

      // Prime scrollVideo buffer for instant decoding
      scrollVideo.load();
    }}

    if (!heroSection.contains(heroWrapper)) {{
      heroSection.insertBefore(heroWrapper, heroSection.firstChild);
    }}

    if (document.documentElement.classList.contains("site-entered")) {{
      heroWrapper.style.setProperty("opacity", "1", "important");
      heroWrapper.style.setProperty("visibility", "visible", "important");
      if (introVideo && introVideo.paused && introVideo.currentTime < 0.1) {{
        introVideo.play().catch(() => {{}});
      }}
    }} else {{
      if (introVideo && !introVideo.paused) {{
        introVideo.pause();
      }}
      if (introVideo && introVideo.currentTime > 0.05) {{
        try {{ introVideo.currentTime = 0; }} catch(e) {{}}
      }}
    }}
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
    if (scrollY > 180 || !introVideo) return;
    lastTiltX = (e.clientX / window.innerWidth - 0.5) * 2;
    lastTiltY = (e.clientY / window.innerHeight - 0.5) * 2;
    if (!tiltRAF) {{
      tiltRAF = requestAnimationFrame(() => {{
        if (introVideo) {{
          introVideo.style.transform = `perspective(1200px) rotateY(${{lastTiltX * -2.5}}deg) rotateX(${{lastTiltY * 2.5}}deg) scale(1.02)`;
        }}
        tiltRAF = null;
      }});
    }}
  }}, {{ passive: true }});

  // 5. Ultra-Smooth Lerped Video Blend & Scrub Controller (Source-Site Architecture)
  let targetProgress = 0;
  let currentProgress = 0;
  let isSeeking = false;
  let nextSeekTarget = -1;

  function updateTargetProgress() {{
    const scrollY = getScrollY();
    if (scrollY > 50) {{
      document.documentElement.classList.add("hero-scrolled");
    }} else {{
      document.documentElement.classList.remove("hero-scrolled");
    }}
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

  function triggerSeek(time) {{
    if (!scrollVideo || !scrollVideo.duration) return;
    isSeeking = true;
    if (typeof scrollVideo.fastSeek === 'function') {{
      scrollVideo.fastSeek(time);
    }} else {{
      scrollVideo.currentTime = time;
    }}
  }}

  function renderScrubLoop() {{
    updateTargetProgress();

    // Silky smooth lerp matching Lenis momentum
    const diff = targetProgress - currentProgress;
    if (Math.abs(diff) > 0.001) {{
      currentProgress += diff * 0.32;
    }} else {{
      currentProgress = targetProgress;
    }}
    if (targetProgress < 0.06 && currentProgress < 0.08) {{
      currentProgress = 0;
    }}
    if (targetProgress === 1 && currentProgress > 0.95) {{
      currentProgress = 1;
    }}

    if (introVideo && scrollVideo) {{
      // Crossfade Blend: Progress 0.00 -> 0.22 (smooth settle at top)
      const blendStart = 0.06;
      const blendEnd = 0.22;
      if (currentProgress <= blendStart) {{
        scrollVideo.style.opacity = "0";
        introVideo.style.opacity = "1";
        if (introVideo.paused && introVideo.currentTime < ((introVideo.duration || 4.1) - 0.1) && !introVideo.ended && document.documentElement.classList.contains("site-entered")) {{
          introVideo.play().catch(() => {{}});
        }}
      }} else if (currentProgress < blendEnd) {{
        const ratio = (currentProgress - blendStart) / (blendEnd - blendStart);
        scrollVideo.style.opacity = ratio.toFixed(4);
        introVideo.style.opacity = (1 - ratio).toFixed(4);
        if (introVideo.paused && introVideo.currentTime < ((introVideo.duration || 4.1) - 0.1) && !introVideo.ended && document.documentElement.classList.contains("site-entered")) {{
          introVideo.play().catch(() => {{}});
        }}
      }} else {{
        scrollVideo.style.opacity = "1";
        introVideo.style.opacity = "0";
        if (!introVideo.paused) introVideo.pause();
      }}

      // Non-blocking seek on all-intra video stream
      if (scrollVideo.duration) {{
        const targetTime = Math.min(scrollVideo.duration - 0.04, Math.max(0, currentProgress * scrollVideo.duration));
        if (Math.abs(scrollVideo.currentTime - targetTime) > 0.025) {{
          if (!isSeeking && !scrollVideo.seeking) {{
            triggerSeek(targetTime);
          }} else {{
            nextSeekTarget = targetTime;
          }}
        }}
      }}
    }}

    requestAnimationFrame(renderScrubLoop);
  }}

  ensureHeroMedia();
  if (scrollVideo) {{
    scrollVideo.addEventListener("seeked", () => {{
      isSeeking = false;
      if (nextSeekTarget >= 0) {{
        const t = nextSeekTarget;
        nextSeekTarget = -1;
        triggerSeek(t);
      }}
    }});
  }}

  requestAnimationFrame(renderScrubLoop);
  updateTargetProgress();

  if (typeof MutationObserver !== 'undefined') {{
    const heroObserver = new MutationObserver(() => {{
      ensureHeroMedia();
    }});
    heroObserver.observe(document.body || document.documentElement, {{ childList: true, subtree: true }});
  }}

  // Interactive Preloader Controller (Authentic 1:1 Forge lifecycle)
  (function() {{
    let isExiting = false;
    function onEnter() {{
      if (isExiting) return;
      isExiting = true;

      // Reveal heroWrapper smoothly after enter
      const heroWrapper = document.getElementById("hero-blend-wrapper");
      if (heroWrapper) {{
        heroWrapper.style.setProperty("opacity", "1", "important");
        heroWrapper.style.setProperty("visibility", "visible", "important");
      }}

      // Trigger native React Enter Button if present so React state machine updates
      const reactEnterBtn = document.querySelector('[role="dialog"] button, [aria-label="Enter Website"]');
      if (reactEnterBtn && !reactEnterBtn.dataset.simulated) {{
        reactEnterBtn.dataset.simulated = "true";
        try {{
          reactEnterBtn.dispatchEvent(new MouseEvent('click', {{ bubbles: true, cancelable: true }}));
        }} catch(e) {{}}
      }}

      // Fade out all preloader dialogs smoothly
      const allDialogs = document.querySelectorAll('[role="dialog"]');
      allDialogs.forEach(dialog => {{
        dialog.style.transition = "opacity 0.6s cubic-bezier(0.16,1,0.3,1)";
        dialog.style.opacity = "0";
        dialog.style.pointerEvents = "none";
      }});

      // Activate entered state on document
      document.documentElement.classList.add("site-entered");
      document.body.classList.add("site-entered");
      document.documentElement.classList.remove("lenis-stopped");

      // Unlock lenis
      document.querySelectorAll(".lenis").forEach(el => {{
        el.classList.remove("lenis-stopped");
      }});

      // Reveal hero text and header with authentic styles
      const h1 = document.querySelector('h1') || document.querySelector('.dpFkxc') || document.querySelector('.sc-12ea9db1-3');
      if (h1) {{
        h1.style.setProperty('visibility', 'visible', 'important');
        h1.style.setProperty('opacity', '1', 'important');
      }}
      const desc = document.querySelector('p[data-sanity*="heroDescription"]') || document.querySelector('.hflLLX') || document.querySelector('.sc-12ea9db1-4');
      if (desc) {{
        desc.style.setProperty('visibility', 'visible', 'important');
        desc.style.setProperty('opacity', '1', 'important');
      }}
      const header = document.querySelector('header');
      if (header) {{
        header.style.setProperty('visibility', 'visible', 'important');
        header.style.setProperty('opacity', '1', 'important');
        header.style.setProperty('display', 'flex', 'important');
      }}

      // Start intro video cleanly from frame 0
      const introVid = document.querySelector(".hero-blend-intro");
      if (introVid) {{
        try {{ introVid.currentTime = 0; }} catch(e) {{}}
        introVid.play().catch(() => {{}});
      }}

      // Prime scroll video decoder pipeline
      const scrVid = document.querySelector(".hero-blend-scroll");
      if (scrVid) {{
        scrVid.play().then(() => {{
          scrVid.pause();
          try {{ scrVid.currentTime = 0; }} catch(e) {{}}
        }}).catch(() => {{}});
      }}

      // Hide preloader elements after fadeout completes (CSS only, do not remove DOM nodes)
      setTimeout(() => {{
        document.querySelectorAll('[role="dialog"]').forEach(d => {{
          d.style.setProperty('display', 'none', 'important');
          d.style.setProperty('opacity', '0', 'important');
          d.style.setProperty('visibility', 'hidden', 'important');
          d.style.setProperty('pointer-events', 'none', 'important');
        }});
      }}, 650);
    }}

    // Global capture-phase listeners always active
    document.addEventListener("click", (e) => {{
      const b = e.target.closest("button, [aria-label='Enter Website'], .sc-60e682e4-7");
      if (b) {{
        onEnter();
      }}
    }}, true);

    window.addEventListener("keydown", (e) => {{
      if ((e.key === "Enter" || e.key === " ") && !document.documentElement.classList.contains("site-entered")) {{
        onEnter();
      }}
    }}, true);
  }})();
}})();
</script>
<style id="hero-blend-styles">
.hero-bg-media,
.sc-2b039258-5 canvas {{
  display: none !important;
}}
html.site-entered,
body.site-entered {{
  scroll-behavior: auto !important;
}}
html.site-entered #page,
body.site-entered #page,
#page {{
  clip-path: none !important;
  view-transition-name: none !important;
}}
.sc-2b3d2147-1,
.gGcwzA {{
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 0px !important;
  z-index: 1 !important;
  height: 100dvh !important;
  width: 100% !important;
}}
.sc-2b3d2147-2,
.lmcVrK {{
  position: absolute !important;
  inset: 0px !important;
  width: 100% !important;
  height: 100dvh !important;
  z-index: 1 !important;
}}
#hero-blend-wrapper,
.hero-blend-wrapper {{
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}}
html.site-entered #hero-blend-wrapper,
body.site-entered #hero-blend-wrapper,
.site-entered #hero-blend-wrapper,
.site-entered .hero-blend-wrapper {{
  opacity: 1 !important;
  visibility: visible !important;
}}
html.site-entered [role="dialog"],
body.site-entered [role="dialog"],
.site-entered [role="dialog"] {{
  display: none !important;
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}}
html.site-entered .sc-12ea9db1-3,
html.site-entered .dpFkxc,
body.site-entered .sc-12ea9db1-3,
body.site-entered .dpFkxc,
html.site-entered h1[data-sanity*="heroHeading"],
body.site-entered h1[data-sanity*="heroHeading"],
html.site-entered h1 {{
  visibility: visible !important;
  opacity: 1 !important;
  color: #ffffff !important;
  transition: opacity 0.8s ease 0.1s;
}}
html.site-entered:not(.hero-scrolled) h1 div,
html.site-entered:not(.hero-scrolled) .dpFkxc div,
html.site-entered:not(.hero-scrolled) [data-text="top"] h1 div {{
  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
  filter: none !important;
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s cubic-bezier(0.16, 1, 0.3, 1) !important;
}}
html.site-entered .sc-12ea9db1-4,
html.site-entered .hflLLX,
body.site-entered .sc-12ea9db1-4,
body.site-entered .hflLLX,
html.site-entered p[data-sanity*="heroDescription"],
body.site-entered p[data-sanity*="heroDescription"] {{
  visibility: visible !important;
  opacity: 1 !important;
  color: #ffffff !important;
  transition: opacity 0.8s ease 0.3s;
}}
html.site-entered:not(.hero-scrolled) [data-text="bottom"] .line,
html.site-entered:not(.hero-scrolled) [data-text="bottom"] div.line,
html.site-entered:not(.hero-scrolled) .hflLLX .line,
html.site-entered:not(.hero-scrolled) p[data-sanity*="heroDescription"] div {{
  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s !important;
}}
html.site-entered header,
body.site-entered header,
html.site-entered .sc-cf9722b1-0 {{
  visibility: visible !important;
  opacity: 1 !important;
  pointer-events: auto !important;
  transition: opacity 0.6s ease;
}}
/* Section 4 & BuildsIntroduction pure black background without car bleed */
section.sc-3a017878-0,
[class*="BuildsIntroduction"],
.sc-d3167531-0,
div[data-name="jacket"] {{
  background-color: #000000 !important;
}}

/* Mini site preview when menu is open */
html.site-menu-open main#page,
body.site-menu-open main#page {{
  clip-path: none !important;
  scale: 0.52 !important;
  opacity: 0.55 !important;
  border-radius: 16px !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.95), 0 0 40px rgba(0, 0, 0, 0.7) !important;
  pointer-events: auto !important;
  cursor: pointer !important;
  transform-origin: center center !important;
  transition: scale 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              border-radius 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.8s cubic-bezier(0.16, 1, 0.3, 1) !important;
}}

html:not(.site-menu-open) main#page,
body:not(.site-menu-open) main#page {{
  transition: scale 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              border-radius 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
}}

/* Ensure menu overlay floats in front with semi-transparent backdrop */
nav#site-menu {{
  z-index: 2 !important;
  background: rgba(10, 10, 10, 0.45) !important;
  backdrop-filter: blur(4px) !important;
  -webkit-backdrop-filter: blur(4px) !important;
}}

/* Position Made by Gurdharam in opposite bottom corner to copyright */
nav#site-menu [data-name="powered"] {{
  position: absolute !important;
  bottom: 0 !important;
  right: var(--offset, 4rem) !important;
  left: auto !important;
  text-align: right !important;
  margin: 0 !important;
}}

nav#site-menu [data-name="copyright"] {{
  position: absolute !important;
  bottom: 0 !important;
  left: var(--offset, 4rem) !important;
  right: auto !important;
  text-align: left !important;
  margin: 0 !important;
}}

@media (max-width: 768px) {{
  html.site-menu-open main#page {{
    scale: 0.58 !important;
    border-radius: 12px !important;
  }}
  nav#site-menu [data-name="powered"] {{
    right: 2rem !important;
  }}
  nav#site-menu [data-name="copyright"] {{
    left: 2rem !important;
  }}
}}
</style>
"""

# Runtime interceptor for images and subpath compatibility
RUNTIME_HEAD_INJECTION = f"""
<style id="critical-anti-flash">
  html, body {{
    background-color: #000000 !important;
    background: #000000 !important;
    color: #ffffff !important;
  }}
  [role="dialog"] {{
    background-color: #000000 !important;
    background: #000000 !important;
    z-index: 999999 !important;
  }}
  #hero-blend-wrapper, .hero-blend-wrapper {{
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }}
  .site-entered #hero-blend-wrapper, .site-entered .hero-blend-wrapper {{
    opacity: 1 !important;
    visibility: visible !important;
  }}
</style>
<script id="gh-pages-base">
(function() {{
  window.__BASE_PATH__ = '{BASE_PATH}';
  window.TURBOPACK_CHUNK_BASE_PATH = '{BASE_PATH}/_next/';
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
      if (fname.startsWith('f0a6e2fca6100f88fdb82772f94866e7e7f2628c')) {{
        return '{BASE_PATH}/assets/cars/f0a6e2fca6100f88fdb82772f94866e7e7f2628c-740x740.jpg';
      }}
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

  function cleanCredits() {{
    const powered = document.querySelectorAll('[data-name="powered"], a[aria-label="Navigate to WRPD"]');
    powered.forEach(function(el) {{
      const a = el.tagName === 'A' ? el : el.querySelector('a');
      if (a && a.textContent !== 'Made by Gurdharam') {{
        a.href = 'https://github.com/gurination1';
        a.setAttribute('aria-label', 'Made by Gurdharam');
        a.textContent = 'Made by Gurdharam';
      }}
    }});
    const siteby = document.querySelectorAll('[data-name="siteby"]');
    siteby.forEach(function(el) {{
      if (el.style.display !== 'none') el.style.display = 'none';
    }});
  }}

  function fixImageLoaded(img) {{
    if (!img) return;
    if (img.complete && img.naturalWidth > 0) {{
      img.setAttribute('data-loaded', 'true');
      img.style.setProperty('--lqip', 'none', 'important');
      img.style.setProperty('--lqip-mobile', 'none', 'important');
      img.style.setProperty('background', 'none', 'important');
    }}
  }}

  // Mini site state sync and click-to-close handler
  function updateMenuState() {{
    const trigger = document.querySelector('button[aria-controls="site-menu"]');
    const isOpen = trigger && trigger.getAttribute('aria-expanded') === 'true';
    if (document.documentElement) {{
      document.documentElement.classList.toggle('site-menu-open', !!isOpen);
    }}
    if (document.body) {{
      document.body.classList.toggle('site-menu-open', !!isOpen);
    }}
  }}

  document.addEventListener('load', function(e) {{
    if (e.target && e.target.tagName === 'IMG') {{
      cleanImg(e.target);
      fixImageLoaded(e.target);
    }}
  }}, true);

  if (typeof MutationObserver !== 'undefined') {{
    const observer = new MutationObserver((mutations) => {{
      let hasAddedNodes = false;
      let hasAttrChange = false;
      mutations.forEach(m => {{
        if (m.type === 'childList' && m.addedNodes.length > 0) {{
          hasAddedNodes = true;
          m.addedNodes.forEach(node => {{
            if (node.tagName === 'IMG') {{
              cleanImg(node);
              fixImageLoaded(node);
            }} else if (node.querySelectorAll) {{
              node.querySelectorAll('img').forEach(img => {{
                cleanImg(img);
                fixImageLoaded(img);
              }});
            }}
          }});
        }} else if (m.type === 'attributes') {{
          hasAttrChange = true;
        }}
      }});
      if (hasAttrChange) updateMenuState();
      if (hasAddedNodes) cleanCredits();
    }});
    observer.observe(document.documentElement, {{
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['aria-expanded']
    }});
  }}

  document.addEventListener('click', function(e) {{
    const triggerBtn = e.target.closest('button[aria-controls="site-menu"]');
    if (triggerBtn) {{
      setTimeout(updateMenuState, 20);
      setTimeout(updateMenuState, 150);
      setTimeout(cleanCredits, 150);
      return;
    }}

    const isOpen = document.documentElement.classList.contains('site-menu-open');
    if (!isOpen) return;

    const trigger = document.querySelector('button[aria-controls="site-menu"]');
    if (!trigger) return;

    const siteMenu = document.getElementById('site-menu');
    const isInteractiveMenuClick = siteMenu && siteMenu.contains(e.target) && (e.target.closest('a') || e.target.closest('button'));
    if (isInteractiveMenuClick) return;

    // Click on mini preview card or menu backdrop -> close menu
    e.preventDefault();
    e.stopPropagation();
    trigger.click();
    setTimeout(updateMenuState, 50);
  }}, true);

  document.addEventListener('keydown', function(e) {{
    if (e.key === 'Escape' && document.documentElement.classList.contains('site-menu-open')) {{
      const trigger = document.querySelector('button[aria-controls="site-menu"]');
      if (trigger) {{
        trigger.click();
        setTimeout(updateMenuState, 50);
      }}
    }}
  }});

  setInterval(() => {{
    cleanCredits();
    updateMenuState();
  }}, 1000);

  document.addEventListener('DOMContentLoaded', function() {{
    cleanCredits();
    updateMenuState();
  }});

  window.addEventListener('load', function() {{
    cleanCredits();
    updateMenuState();
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
    html = re.sub(r'([\"\'`])/(ActiveFrame\.js|images/)', rf'\1{BASE_PATH}/\2', html)
    html = re.sub(r'([\"\'`])/(favicon\.ico|icon0\.svg|icon1\.png|apple-icon\.png|manifest\.json)', rf'\1{BASE_PATH}/\2', html)
    html = re.sub(r'([\"\'`])/web-app-manifest-', rf'\1{BASE_PATH}/web-app-manifest-', html)

    # Internal links
    html = re.sub(r'href="/(builds|stock|contact|cookies|privacy|terms)(/?)"', rf'href="{BASE_PATH}/\1\2"', html)
    html = re.sub(r'href="/(builds|stock)/(fa\d+)(/?)"', rf'href="{BASE_PATH}/\1/\2\3"', html)
    html = re.sub(r'href="/"', f'href="{BASE_PATH}/"', html)

    # Inject runtime head scripts
    if '<head>' in html:
        html = html.replace('<head>', f'<head>\n{RUNTIME_HEAD_INJECTION}')

    footer_picture = f'''<picture>
<source media="(min-width: 1024px)" srcSet="{BASE_PATH}/assets/cars/c6f15b9448f9090f3c7d9f0b5fab4e3cbc8e7284-2880x1800.jpg 3840w, {BASE_PATH}/assets/cars/c6f15b9448f9090f3c7d9f0b5fab4e3cbc8e7284-2880x1800.jpg 2048w, {BASE_PATH}/assets/cars/c6f15b9448f9090f3c7d9f0b5fab4e3cbc8e7284-2880x1800.jpg 1920w, {BASE_PATH}/assets/cars/c6f15b9448f9090f3c7d9f0b5fab4e3cbc8e7284-2880x1800.jpg 1400w, {BASE_PATH}/assets/cars/c6f15b9448f9090f3c7d9f0b5fab4e3cbc8e7284-2880x1800.jpg 1080w, {BASE_PATH}/assets/cars/c6f15b9448f9090f3c7d9f0b5fab4e3cbc8e7284-2880x1800.jpg 750w" sizes="100vw"/>
<img alt="Three custom Forge vehicles, a black Mercedes G-Wagen, a red Porsche 911 GT3, and a black Land Rover Defender, are parked on a dark surface." loading="lazy" decoding="async" srcSet="{BASE_PATH}/assets/cars/9ae611ac36488077eadfc0d1f8a5aa163aae1c8e-880x1592.jpg 880w" src="{BASE_PATH}/assets/cars/9ae611ac36488077eadfc0d1f8a5aa163aae1c8e-880x1592.jpg" width="880" height="1592" crossorigin="anonymous" data-deferred="false" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent;" data-loaded="true" class="sc-b83f0c97-0 ckbPhL"/>
</picture>'''
    html = re.sub(r'<aside aria-hidden="true" class="[^"]*gXORHV[^"]*"><picture>.*?</picture></aside>',
                  rf'<aside aria-hidden="true" class="sc-337305d3-0 sc-a2c8839e-1 kTCIhD gXORHV">{footer_picture}</aside>', html, flags=re.DOTALL)

    # If home page, inject 2-video scroll blend engine
    if slug == '':
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

# Menu credits update: replace Powered by WRPD with Made by Gurdharam and position in opposite corner
menu_chunk_path = os.path.join(DEST_DIR, '_next/static/chunks/40ga6wtcxfway.js')
if os.path.exists(menu_chunk_path):
    with open(menu_chunk_path, 'r', encoding='utf-8') as f:
        m_code = f.read()
    target_start = m_code.find('r[1]===Symbol.for("react.memo_cache_sentinel")?(a=(0,t.jsx)("p",{"data-name":"powered"')
    if target_start != -1:
        target_end = m_code.find(',r[2]=n):n=r[2],n', target_start)
        if target_end != -1:
            target_end += len(',r[2]=n):n=r[2],n')
            new_credits = 'r[1]===Symbol.for("react.memo_cache_sentinel")?(a=(0,t.jsx)("p",{"data-name":"powered",children:(0,t.jsx)("a",{href:"https://github.com/gurination1",target:"_blank",rel:"noopener noreferrer","aria-label":"Made by Gurdharam",children:"Made by Gurdharam"})}),r[1]=a):a=r[1],r[2]===Symbol.for("react.memo_cache_sentinel")?(n=(0,t.jsxs)(y,{children:[e,a]}),r[2]=n):n=r[2],n'
            m_code = m_code[:target_start] + new_credits + m_code[target_end:]
    m_code = m_code.replace('z-index: 0;\n        background: ${(0,p.getBrand)("bc3")};',
                            'z-index: 2;\n        background: rgba(10, 10, 10, 0.45);\n        backdrop-filter: blur(4px);\n        -webkit-backdrop-filter: blur(4px);')
    m_code = m_code.replace("[data-name='powered'] a{",
                            "[data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] a{")
    with open(menu_chunk_path, 'w', encoding='utf-8') as f:
        f.write(m_code)
    print("Patched menu chunk: Made by Gurdharam in opposite corner & backdrop")

menu_chunk_path_alt = os.path.join(DEST_DIR, '_next/static/chunks/1o6f75j2bh32_.js')
if os.path.exists(menu_chunk_path_alt):
    with open(menu_chunk_path_alt, 'r', encoding='utf-8') as f:
        m_alt = f.read()
    m_alt = m_alt.replace('z-index: 0;\n        background: ${(0,u.getBrand)("bc3")};',
                          'z-index: 2;\n        background: rgba(10, 10, 10, 0.45);\n        backdrop-filter: blur(4px);\n        -webkit-backdrop-filter: blur(4px);')
    m_alt = m_alt.replace("[data-name='powered'] a{",
                          "[data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] a{")
    with open(menu_chunk_path_alt, 'w', encoding='utf-8') as f:
        f.write(m_alt)
    print("Patched alt menu chunk: opposite corner credits & backdrop")

# Restore authentic preloader chunk from original_414.js and patch scrollerProxy, route scroll reset & mini site preview
original_414_path = os.path.join(DEST_DIR, 'original_414.js')
preloader_chunk_path = os.path.join(DEST_DIR, '_next/static/chunks/414eipoaws2vq.js')
if os.path.exists(original_414_path):
    shutil.copyfile(original_414_path, preloader_chunk_path)
    with open(preloader_chunk_path, 'r', encoding='utf-8') as f:
        p_code = f.read()
    # 1. Prevent ScrollTrigger.refresh() from resetting Lenis scroll to 0
    p_code = p_code.replace('scrollTop:e=>(void 0!==e&&i.scrollTo(e,{immediate:!0}),i.scroll)',
                            'scrollTop:e=>(void 0!==e&&!T.default.isRefreshing&&i.scrollTo(e,{immediate:!0}),i.scroll)')
    # 2. Prevent route-reset hook from jumping to top on initial mount or re-mount
    p_code = p_code.replace('if(!e||r.current===t)return;r.current=t,',
                            'if(!e||r.current===t||null===r.current){r.current=t;return;}r.current=t,')
    # 3. Mini site preview when menu is open: remove clip-path inset(50%), scale 0.52, rounded corners, box-shadow, opacity
    p_code = p_code.replace('clip-path: inset(${50*!!e}%);',
                            'clip-path: none; border-radius: ${e?"16px":"0px"}; box-shadow: ${e?"0 30px 100px rgba(0,0,0,0.95), 0 0 40px rgba(0,0,0,0.7)":"none"}; border: ${e?"1px solid rgba(255,255,255,0.18)":"1px solid transparent"}; opacity: ${e?0.55:1}; transform-origin: center center;')
    p_code = p_code.replace('scale: ${e?.5:1};', 'scale: ${e?.52:1};')
    p_code = p_code.replace('y.current?.toggleAttribute("inert",b||h)', 'y.current?.toggleAttribute("inert",b)')
    # 4. Recognize subpath /aurelius-atelier as homepage for Loader and SmoothScroll
    p_code = p_code.replace('F="/"===(0,p.usePathname)()', 'F=["/","/aurelius-atelier","/aurelius-atelier/"].includes((0,p.usePathname)())')
    p_code = p_code.replace('x="/"===f&&!p', 'x=(["/","/aurelius-atelier","/aurelius-atelier/"].includes(f))&&!p')
    # 5. Ensure preloader completes reliably once cinematic text completes
    p_code = p_code.replace('Y=(F?K&&(!M||R):J)&&B', 'Y=B')
    with open(preloader_chunk_path, 'w', encoding='utf-8') as f:
        f.write(p_code)
    print("Patched 414 chunk: scroll reset, mini site preview, subpath homepage & reliable preloader")

# Hero background chunk update: 50ms ActiveFrame timeout & persistent background container
hero_chunk_path = os.path.join(DEST_DIR, '_next/static/chunks/43lg5uv8_am8v.js')
if os.path.exists(hero_chunk_path):
    with open(hero_chunk_path, 'r', encoding='utf-8') as f:
        h_code = f.read()
    h_code = h_code.replace(',"unsupported"===ed||"error"===ed)?null:', ',!1)?null:')
    h_code = h_code.replace('waitForActiveFrameRuntime)(t.signal),2e4,', 'waitForActiveFrameRuntime)(t.signal),50,')
    h_code = h_code.replace('r.loading,2e4,', 'r.loading,100,')
    with open(hero_chunk_path, 'w', encoding='utf-8') as f:
        f.write(h_code)
    print("Patched hero chunk: 50ms ActiveFrame timeout, 100ms loading timeout & persistent container")

# React framework chunk update: error 418 hydration crash & safe insertBefore DOM patch
framework_chunk_path = os.path.join(DEST_DIR, '_next/static/chunks/0-4srap-ffvu1.js')
if os.path.exists(framework_chunk_path):
    with open(framework_chunk_path, 'r', encoding='utf-8') as f:
        f_code = f.read()
    f_code = f_code.replace('function rZ(e){var n=Error(u(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML",""));throw r4(rL(n,e)),rX}', 'function rZ(e){return;}')
    f_code = f_code.replace('n?t.insertBefore(l,n):t.appendChild(l)', 'n&&n.parentNode===t?t.insertBefore(l,n):t.appendChild(l)')
    with open(framework_chunk_path, 'w', encoding='utf-8') as f:
        f.write(f_code)
    print("Patched React framework chunk: neutralized error 418 hydration crash and safe insertBefore")

# Ensure .nojekyll exists
with open(os.path.join(DEST_DIR, '.nojekyll'), 'w') as f:
    pass

print("Build complete!")
