import os
import re
import json
import shutil

SRC_DIR = '/root/forge-site-live'
DEST_DIR = '/root/forge-source'
BASE_PATH = '/branders'

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
        return ('logo', fname)
    if fname in IMAGE_MAP:
        return ('car', IMAGE_MAP[fname])
    h = fname[:40]
    if h in IMAGE_MAP:
        return ('car', IMAGE_MAP[h])
    if '4d877ce34' in fname:
        return ('car', '4d877ce34bbd3354636fb32f4d5f944e2487c8b4-512x512.png')
    if 'd7577b4b' in fname:
        return ('car', 'd7577b4b9f6a6acda5594e9e6171678dba58e133-1200x630.jpg')
    return None

sanity_pattern = re.compile(r'https?://cdn\.sanity\.io/images/[^/]+/production/([a-zA-Z0-9_\-\.]+)(?:\\u[0-9a-fA-F]{4}|[^\s"\'<>\\])*')

def sanity_replacer(match):
    fname = match.group(1)
    mapped = map_sanity_file(fname)
    if mapped is None:
        return match.group(0)
    folder, path = mapped
    if folder == 'logo':
        return f"{BASE_PATH}/assets/logos/{path}"
    return f"{BASE_PATH}/assets/cars/{path}"

# Exact 2-Video Scroll Blend Engine (Non-looping intro + Lenis-aware scroll scrub)
HERO_BLEND_ENGINE = f"""
<!-- Smooth 2-Video Scroll Blend Engine (Non-looping intro + Lenis-aware scroll scrub) -->
<script id="hero-blend-engine">
(function() {{
  let introVideo = null;
  let scrollVideo = null;
  let heroWrapper = null;
  let introWordsInitialized = false;
  let introWordSpans = [];

  function initIntroWords(introH2) {{
    if (!introH2 || introWordsInitialized) return;
    const line1 = ["We", "don’t", "modify", "vehicles"];
    const line2 = ["We", "build", "them", "for", "you"];
    
    const renderWords = function(arr) {{
      return arr.map(function(w) {{
        return '<span class="intro-word" style="position:relative; display:inline-block; vertical-align:top; margin:0 0.18em; will-change:transform,opacity,filter; opacity:0; visibility:hidden; transform:scale(0); filter:blur(8px);">' + w + '</span>';
      }}).join('');
    }};

    introH2.innerHTML = '<span class="intro-line" style="display:block;">' + renderWords(line1) + '</span><span class="intro-line" style="display:block; margin-top:0.18em;">' + renderWords(line2) + '</span>';
    introWordSpans = Array.from(introH2.querySelectorAll(".intro-word"));
    introWordsInitialized = true;

    function updateWordOrigins() {{
      if (!introWordSpans.length) return;
      let minLeft = Infinity, minTop = Infinity, maxRight = -Infinity, maxBottom = -Infinity;
      introWordSpans.forEach(function(el) {{
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0) {{
          minLeft = Math.min(minLeft, r.left);
          minTop = Math.min(minTop, r.top);
          maxRight = Math.max(maxRight, r.right);
          maxBottom = Math.max(maxBottom, r.bottom);
        }}
      }});
      if (minLeft < Infinity && maxRight > -Infinity) {{
        const cx = (minLeft + maxRight) / 2;
        const cy = (minTop + maxBottom) / 2;
        introWordSpans.forEach(function(el) {{
          const r = el.getBoundingClientRect();
          el.style.transformOrigin = (cx - r.left).toFixed(1) + 'px ' + (cy - r.top).toFixed(1) + 'px';
        }});
      }}
    }}
    requestAnimationFrame(updateWordOrigins);
    window.addEventListener("resize", updateWordOrigins, {{ passive: true }});
  }}

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
    const heroSpacer = document.querySelector(".sc-2b3d2147-3") || document.querySelector(".fHUmBT");
    const spacerHeight = heroSpacer ? heroSpacer.offsetHeight : (window.innerHeight * 1.4);
    targetProgress = Math.min(1, Math.max(0, scrollY / spacerHeight));
    if (targetProgress > 0.20) {{
      document.documentElement.classList.add("hero-scrolled");
    }} else {{
      document.documentElement.classList.remove("hero-scrolled");
    }}
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

    // 6. Synchronized Hero Text Fade-out & Introduction Scroll-Reveal
    const heroSection = document.querySelector(".sc-12ea9db1-0") || document.querySelector(".lagqCY");
    const introH2 = document.querySelector(".sc-2b039258-4") || document.querySelector(".gSwEKM") || document.querySelector('h2[data-sanity*="introductionHeading"]');

    // A) Hero Section Glide & Fade (0.02 -> 0.20)
    if (heroSection) {{
      if (currentProgress <= 0.02) {{
        heroSection.style.setProperty('opacity', '1', 'important');
        heroSection.style.setProperty('transform', 'none', 'important');
        heroSection.style.setProperty('visibility', 'visible', 'important');
        heroSection.style.setProperty('pointer-events', 'auto', 'important');
      }} else if (currentProgress < 0.20) {{
        const ratio = (currentProgress - 0.02) / (0.20 - 0.02);
        const alpha = Math.max(0, 1 - ratio);
        heroSection.style.setProperty('opacity', alpha.toFixed(4), 'important');
        heroSection.style.setProperty('transform', `translate3d(0, ${{-(ratio * 35).toFixed(1)}}px, 0)`, 'important');
        heroSection.style.setProperty('visibility', alpha > 0.01 ? 'visible' : 'hidden', 'important');
        heroSection.style.setProperty('pointer-events', alpha > 0.1 ? 'auto' : 'none', 'important');
      }} else {{
        heroSection.style.setProperty('opacity', '0', 'important');
        heroSection.style.setProperty('visibility', 'hidden', 'important');
        heroSection.style.setProperty('pointer-events', 'none', 'important');
      }}
    }}

    // B) Scroll-Reveal Introduction Heading (0.10 -> 0.94)
    // Synchronized authentic Forge typography scale(0 -> 1.0) & blur(8px -> 0px) from optical center
    if (introH2) {{
      if (!introWordsInitialized) {{
        initIntroWords(introH2);
      }}

      if (currentProgress < 0.10) {{
        introH2.style.setProperty('visibility', 'hidden', 'important');
        introH2.style.setProperty('opacity', '0', 'important');
        introWordSpans.forEach(function(w) {{
          w.style.opacity = '0';
          w.style.visibility = 'hidden';
          w.style.transform = 'scale(0)';
          w.style.filter = 'blur(8px)';
        }});
      }} else if (currentProgress >= 0.10 && currentProgress < 0.46) {{
        introH2.style.setProperty('visibility', 'visible', 'important');
        introH2.style.setProperty('opacity', '1', 'important');
        introH2.style.setProperty('filter', 'none', 'important');
        introH2.style.setProperty('transform', 'none', 'important');
        
        // Exact Forge staggered zoom math from module 221781
        const pNorm = (currentProgress - 0.10) / (0.46 - 0.10);
        const total = introWordSpans.length || 9;
        const gap = 0.15;
        const duration = 0.8;
        const totalWindow = (total - 1) * gap + duration;
        introWordSpans.forEach(function(w, idx) {{
          const wp = Math.max(0, Math.min(1, (pNorm * totalWindow - idx * gap) / duration));
          const scale = wp;
          const opacity = wp;
          const blur = (1 - wp) * 8;
          w.style.visibility = wp > 0.01 ? 'visible' : 'hidden';
          w.style.opacity = opacity.toFixed(4);
          w.style.transform = `scale(${{scale.toFixed(4)}})`;
          w.style.filter = `blur(${{blur.toFixed(2)}}px)`;
        }});
      }} else if (currentProgress >= 0.46 && currentProgress <= 0.68) {{
        introH2.style.setProperty('visibility', 'visible', 'important');
        introH2.style.setProperty('opacity', '1', 'important');
        introH2.style.setProperty('filter', 'none', 'important');
        introH2.style.setProperty('transform', 'none', 'important');
        introWordSpans.forEach(function(w) {{
          w.style.visibility = 'visible';
          w.style.opacity = '1';
          w.style.transform = 'scale(1)';
          w.style.filter = 'blur(0px)';
        }});
      }} else if (currentProgress > 0.68 && currentProgress <= 0.94) {{
        // As Section 2 ("Our Approach To Every Build") rises, blur out and fade
        const outRatio = (currentProgress - 0.68) / (0.94 - 0.68);
        const alpha = Math.max(0, 1 - outRatio);
        const blur = Math.min(12, outRatio * 12);
        const scale = 1.0 + (0.05 * Math.min(1, outRatio));
        introH2.style.setProperty('visibility', alpha > 0.01 ? 'visible' : 'hidden', 'important');
        introH2.style.setProperty('opacity', alpha.toFixed(4), 'important');
        introH2.style.setProperty('transform', `scale(${{scale.toFixed(4)}})`, 'important');
        introH2.style.setProperty('filter', `blur(${{blur.toFixed(1)}}px)`, 'important');
      }} else {{
        introH2.style.setProperty('visibility', 'hidden', 'important');
        introH2.style.setProperty('opacity', '0', 'important');
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
      const heroSection = document.querySelector(".sc-12ea9db1-0") || document.querySelector(".lagqCY");
      if (heroSection) {{
        heroSection.style.setProperty('visibility', 'visible', 'important');
        heroSection.style.setProperty('opacity', '1', 'important');
        heroSection.style.setProperty('pointer-events', 'auto', 'important');
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
html.site-entered:not(.hero-scrolled) .sc-12ea9db1-3,
html.site-entered:not(.hero-scrolled) .dpFkxc,
body.site-entered:not(.hero-scrolled) .sc-12ea9db1-3,
body.site-entered:not(.hero-scrolled) .dpFkxc,
html.site-entered:not(.hero-scrolled) h1[data-sanity*="heroHeading"],
body.site-entered:not(.hero-scrolled) h1[data-sanity*="heroHeading"],
html.site-entered:not(.hero-scrolled) h1 {{
  visibility: visible !important;
  opacity: 1 !important;
  color: #ffffff !important;
}}
html.site-entered:not(.hero-scrolled) h1 div,
html.site-entered:not(.hero-scrolled) .dpFkxc div,
html.site-entered:not(.hero-scrolled) [data-text="top"] h1 div {{
  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
  filter: none !important;
}}
html.site-entered .sc-12ea9db1-4,
html.site-entered .hflLLX,
body.site-entered .sc-12ea9db1-4,
body.site-entered .hflLLX,
html.site-entered p[data-sanity*="heroDescription"],
body.site-entered p[data-sanity*="heroDescription"],
html.site-entered p[data-sanity*="heroSubheading"],
body.site-entered p[data-sanity*="heroSubheading"] {{
  color: #ffffff !important;
  max-width: 600px !important;
  margin: 0 auto !important;
  padding-bottom: clamp(1.5rem, 3.5vh, 4rem) !important;
  line-height: 1.4 !important;
  font-size: clamp(1.4rem, 1.25vw, 1.8rem) !important;
  text-wrap: balance !important;
  text-align: center !important;
}}
html.site-entered:not(.hero-scrolled) .sc-12ea9db1-4,
html.site-entered:not(.hero-scrolled) .hflLLX,
body.site-entered:not(.hero-scrolled) .sc-12ea9db1-4,
body.site-entered:not(.hero-scrolled) .hflLLX,
html.site-entered:not(.hero-scrolled) p[data-sanity*="heroDescription"],
body.site-entered:not(.hero-scrolled) p[data-sanity*="heroDescription"],
html.site-entered:not(.hero-scrolled) p[data-sanity*="heroSubheading"],
body.site-entered:not(.hero-scrolled) p[data-sanity*="heroSubheading"] {{
  visibility: visible !important;
  opacity: 1 !important;
}}
html.site-entered:not(.hero-scrolled) [data-text="bottom"] .line,
html.site-entered:not(.hero-scrolled) [data-text="bottom"] div.line,
html.site-entered:not(.hero-scrolled) .hflLLX .line,
html.site-entered:not(.hero-scrolled) p[data-sanity*="heroDescription"] div,
html.site-entered:not(.hero-scrolled) p[data-sanity*="heroSubheading"] div {{
  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
}}
html.hero-scrolled .sc-12ea9db1-0,
html.hero-scrolled .lagqCY,
html.hero-scrolled .sc-12ea9db1-3,
html.hero-scrolled .dpFkxc,
html.hero-scrolled .sc-12ea9db1-4,
html.hero-scrolled .hflLLX {{
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}}

/* Hero section text in front of video */
.sc-12ea9db1-0,
.lagqCY {{
  position: absolute !important;
  inset: 0 !important;
  z-index: 15 !important;
  pointer-events: none !important;
}}
.sc-12ea9db1-0 [data-sanity],
.lagqCY [data-sanity] {{
  pointer-events: auto !important;
}}

/* Introduction section holding background video */
.sc-2b039258-0,
.dKbqDu {{
  position: absolute !important;
  inset: 0 !important;
  z-index: 1 !important;
  pointer-events: none !important;
}}
.sc-2b039258-3,
.fubkDG {{
  position: absolute !important;
  inset: 0 !important;
  z-index: 25 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  pointer-events: none !important;
  padding-inline: var(--gap-l, 2rem) !important;
}}
.sc-2b039258-4,
.gSwEKM,
h2[data-sanity*="introductionHeading"] {{
  position: relative !important;
  z-index: 26 !important;
  color: #ffffff !important;
  text-align: center !important;
  text-wrap: balance !important;
  font-family: var(--font-heading) !important;
  font-weight: 200 !important;
  font-size: clamp(2.5rem, 5.5vw, 6.5rem) !important;
  line-height: 1.15 !important;
  letter-spacing: -0.04em !important;
  will-change: transform, opacity, filter !important;
  pointer-events: none !important;
}}
.sc-2b039258-4 .intro-word,
.gSwEKM .intro-word,
h2[data-sanity*="introductionHeading"] .intro-word {{
  display: inline-block !important;
  vertical-align: top !important;
  will-change: transform, opacity, filter !important;
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

  // 1. Silent fetch interceptor for static host: prevent _rsc and sanity.io network hits
  const origFetch = window.fetch;
  window.fetch = function(resource, init) {{
    const url = typeof resource === 'string' ? resource : (resource && resource.url ? resource.url : '');
    if (url && (url.includes('_rsc=') || url.includes('sanity.io'))) {{
      if (url.includes('api.sanity.io')) {{
        return Promise.resolve(new Response('{{}}', {{ status: 200, headers: {{ 'Content-Type': 'application/json' }} }}));
      }}
      return new Promise(function() {{}}); // never errors, never hits network
    }}
    return origFetch.apply(this, arguments);
  }};

  // 2. Neutralize EventSource for Sanity Live
  if (typeof window.EventSource !== 'undefined') {{
    const OrigEventSource = window.EventSource;
    window.EventSource = function(url, options) {{
      if (typeof url === 'string' && url.includes('sanity.io')) {{
        return {{
          addEventListener: function() {{}},
          removeEventListener: function() {{}},
          close: function() {{}},
          dispatchEvent: function() {{ return false; }}
        }};
      }}
      return new OrigEventSource(url, options);
    }};
  }}

  // 3. Block DOM injection of speculative prefetch/preload links for _rsc or sanity.io
  const origAppend = Node.prototype.appendChild;
  Node.prototype.appendChild = function(node) {{
    if (node && node.nodeName === 'LINK') {{
      const h = node.getAttribute('href') || node.href || '';
      if (h.includes('_rsc=') || h.includes('sanity.io')) {{
        return node;
      }}
    }}
    return origAppend.apply(this, arguments);
  }};
  const origInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function(node, ref) {{
    if (node && node.nodeName === 'LINK') {{
      const h = node.getAttribute('href') || node.href || '';
      if (h.includes('_rsc=') || h.includes('sanity.io')) {{
        return node;
      }}
    }}
    return origInsertBefore.apply(this, arguments);
  }};

  // 4. Capture-phase navigation and popup neutralization
  document.addEventListener('click', function(e) {{
    var a = e.target.closest('a');
    if (!a) return;
    var h = a.getAttribute('href');
    if (!h) return;
    if (h === '#social' || h === '#locations') {{
      e.preventDefault();
      e.stopPropagation();
      return false;
    }}
    // Static internal navigation without broken RSC stalls
    if (h.startsWith('/branders') || h.startsWith('./') || (h.startsWith('/') && !h.startsWith('//'))) {{
      if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0) {{
        var targetUrl = a.href;
        if (targetUrl && targetUrl !== window.location.href && !targetUrl.endsWith('#')) {{
          e.preventDefault();
          e.stopPropagation();
          if (document.startViewTransition) {{
            document.startViewTransition(function() {{
              window.location.href = targetUrl;
            }});
          }} else {{
            window.location.href = targetUrl;
          }}
          return false;
        }}
      }}
    }}
  }}, true);
}})();
</script>
<script id="runtime-image-guard">
(function() {{
  const imgMap = {json.dumps(IMAGE_MAP)};
  const oemLogos = {json.dumps(list(OEM_SVGS))};
  function rewriteUrl(url) {{
    if (!url || typeof url !== 'string') return url;
    for (let i = 0; i < oemLogos.length; i++) {{
      if (url.includes(oemLogos[i])) return '{BASE_PATH}/assets/logos/' + oemLogos[i];
    }}
    if (url.includes('.svg')) return url;
    if (url.includes('cdn.sanity.io/images/') || url.includes('/images/branders/production/') || url.includes('/images/ed72g2cx/production/')) {{
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
    const headerHome = document.querySelector('a[aria-label*="home"].glWlYP, a[aria-label*="Forge home"]');
    if (headerHome && headerHome.getAttribute('aria-label') !== 'Branders home') {{
      headerHome.setAttribute('aria-label', 'Branders home');
    }}
    const dialog = document.querySelector('[role="dialog"][aria-label*="Forge"]');
    if (dialog) {{
      dialog.setAttribute('aria-label', 'Welcome to Branders');
    }}
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
BRANDERS_EMBLEM_D = "M39 1.5L48 8.5L45 10L39 5L33 10L30 8.5L39 1.5ZM28.5 9.5L14 3.5L25 11.5L33 11.5L28.5 9.5ZM49.5 9.5L64 3.5L53 11.5L45 11.5L49.5 9.5ZM31.5 13L18 8.5L27 15.5L33.5 15.5L31.5 13ZM46.5 13L60 8.5L51 15.5L44.5 15.5L46.5 13ZM39 7.5L44.5 14L39 20.5L33.5 14L39 7.5ZM39 11L36.2 14.5L39 17.5L41.8 14.5L39 11Z"

BRANDERS_LETTERS = [
    ("b", "M1.5905 35.8465V25.6072H5.1094Q6.9265 25.6072 7.835 26.2706Q8.7436 26.934 8.7436 28.3617Q8.7436 29.0251 8.4552 29.5299Q8.1667 30.0346 7.6331 30.3158Q7.0995 30.5971 6.364 30.5971L6.3496 30.5105Q7.662 30.5105 8.4191 31.21Q9.1762 31.9094 9.1762 33.0343Q9.1762 34.4332 8.2677 35.1398Q7.3591 35.8465 5.6862 35.8465ZM2.8308 34.6351H5.6862Q6.739 34.6351 7.3086 34.2024Q7.8783 33.7698 7.8783 32.9622Q7.8783 32.1546 7.3086 31.7003Q6.739 31.246 5.6862 31.246H2.8308ZM2.8308 30.0346H5.1094Q6.2342 30.0346 6.8399 29.6092Q7.4457 29.1837 7.4457 28.4194Q7.4457 27.6118 6.8616 27.2152Q6.2775 26.8186 5.1094 26.8186H2.8308Z"),
    ("r", "M11.3972 35.8465V25.6072H15.2766Q16.3582 25.6072 17.1369 25.9822Q17.9157 26.3571 18.3411 27.0566Q18.7666 27.756 18.7666 28.7078Q18.7666 29.4001 18.4421 29.9409Q18.1176 30.4817 17.6128 30.799Q17.1081 31.1162 16.5601 31.1451L16.4735 31.0153Q17.411 31.0153 17.9517 31.4479Q18.4925 31.8806 18.5791 32.8324L18.8675 35.8465H17.6128L17.3533 32.9622Q17.2956 32.3276 16.899 32.0248Q16.5024 31.7219 15.6083 31.7219H12.6373V35.8465ZM12.6373 30.5105H15.4352Q16.3726 30.5105 16.9206 30.0346Q17.4686 29.5587 17.4686 28.679Q17.4686 27.7849 16.9062 27.3017Q16.3438 26.8186 15.2766 26.8186H12.6373Z"),
    ("a", "M20.0501 35.8465 23.742 25.6072H25.4149L29.1068 35.8465H27.7512L26.7273 32.9333H22.4296L21.4057 35.8465ZM22.8479 31.7219H26.309L24.5785 26.6888Z"),
    ("n", "M30.722 35.8465V25.6072H32.4815L37.5434 34.6062V25.6072H38.7837V35.8465H36.9377L31.9623 27.0205V35.8465Z"),
    ("d", "M41.4372 35.8465V25.6072H44.61Q46.9751 25.6072 48.2514 26.9412Q49.5277 28.2752 49.5277 30.7413Q49.5277 33.1929 48.2731 34.5197Q47.0184 35.8465 44.6965 35.8465ZM42.6775 34.6351H44.61Q46.4127 34.6351 47.3212 33.6616Q48.2298 32.6882 48.2298 30.7413Q48.2298 28.7655 47.3212 27.7921Q46.4127 26.8186 44.61 26.8186H42.6775Z"),
    ("e", "M51.4458 35.8465V25.6072H57.8778V26.8186H52.6861V30.1211H57.7047V31.3037H52.6861V34.6351H57.9932V35.8465Z"),
    ("r", "M60.142 35.8465V25.6072H64.0214Q65.103 25.6072 65.8818 25.9822Q66.6605 26.3571 67.086 27.0566Q67.5114 27.756 67.5114 28.7078Q67.5114 29.4001 67.1869 29.9409Q66.8624 30.4817 66.3577 30.799Q65.8529 31.1162 65.3049 31.1451L65.2184 31.0153Q66.1558 31.0153 66.6966 31.4479Q67.2374 31.8806 67.3239 32.8324L67.6124 35.8465H66.3577L66.0981 32.9622Q66.0404 32.3276 65.6438 32.0248Q65.2472 31.7219 64.3531 31.7219H61.3822V35.8465ZM61.3822 30.5105H64.18Q65.1174 30.5105 65.6654 30.0346Q66.2135 29.5587 66.2135 28.679Q66.2135 27.7849 65.651 27.3017Q65.0886 26.8186 64.0214 26.8186H61.3822Z"),
    ("s", "M73.3521 36.0772Q72.1696 36.0772 71.2898 35.6302Q70.4101 35.1831 69.8982 34.3971Q69.3862 33.6112 69.2997 32.5728L70.5976 32.4863Q70.6986 33.2506 71.0447 33.7842Q71.3908 34.3178 71.9749 34.5918Q72.5589 34.8658 73.381 34.8658Q74.1021 34.8658 74.6068 34.6784Q75.1116 34.4909 75.3784 34.1303Q75.6452 33.7698 75.6452 33.2506Q75.6452 32.7747 75.4216 32.407Q75.1981 32.0392 74.5708 31.7291Q73.9434 31.4191 72.7176 31.1162Q71.535 30.8134 70.8356 30.4528Q70.1361 30.0923 69.8261 29.5731Q69.516 29.054 69.516 28.2896Q69.516 27.4243 69.927 26.7681Q70.338 26.112 71.1024 25.7442Q71.8667 25.3765 72.9195 25.3765Q74.0444 25.3765 74.852 25.8019Q75.6596 26.2273 76.1355 26.9628Q76.6114 27.6983 76.7268 28.6357L75.4288 28.7223Q75.3423 28.1021 75.0322 27.619Q74.7222 27.1359 74.1886 26.8619Q73.655 26.5879 72.8906 26.5879Q71.9388 26.5879 71.3764 27.0421Q70.8139 27.4964 70.8139 28.2319Q70.8139 28.7078 71.0375 29.0179Q71.261 29.328 71.8379 29.5659Q72.4147 29.8039 73.4963 30.0779Q74.7799 30.3952 75.537 30.835Q76.2941 31.2749 76.6186 31.8517Q76.9431 32.4286 76.9431 33.1641Q76.9431 34.0582 76.4816 34.7144Q76.0201 35.3706 75.2125 35.7239Q74.4049 36.0772 73.3521 36.0772Z"),
]

def replace_branders_logo_and_text(html_str):
    m = re.search(r'clipPath id="([^"]+)"', html_str)
    clip_id = m.group(1) if m else '_R_dmiivb_'
    letters_svg = "".join(f'<path d="{d}" data-logo="{l}"></path>' for l, d in BRANDERS_LETTERS)
    branders_svg = (
        f'<svg width="78" height="36" viewBox="0 0 78 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-e576e939-0 gBefHe logo">'
        f'<defs><clipPath id="{clip_id}"><rect x="0" y="24" width="78" height="12"></rect></clipPath></defs>'
        f'<g class="icon"><path d="{BRANDERS_EMBLEM_D}"></path></g>'
        f'<g class="text" clip-path="url(#{clip_id})">{letters_svg}</g></svg>'
    )
    html_str = re.sub(r'<svg width="78" height="36" viewBox="0 0 78 36"[^>]*class="[^"]*logo[^"]*"[^>]*>.*?</svg>', branders_svg, html_str, count=1)
    
    html_str = re.sub(r'Forge\s+Automotive\s+Ltd', 'Branders Ltd', html_str)
    html_str = re.sub(r'Forge\s+Automotive', 'Branders', html_str)
    html_str = re.sub(r'Forge\s+Ltd', 'Branders Ltd', html_str)
    html_str = re.sub(r'\bForge\s+home\b', 'Branders home', html_str)
    html_str = re.sub(r'\bWelcome to Forge\b', 'Welcome to Branders', html_str)
    html_str = re.sub(r'\bForge\b', 'Branders', html_str)
    
    html_str = sanitize_forge_credentials(html_str)
    return html_str

def sanitize_forge_credentials(html_str):
    # 1. Phone numbers: replace Forge numbers with user requested 62808 34006 / tel:+916280834006
    html_str = re.sub(r'href=[\"\']tel:\+?44\s*\(?0\)?\s*3330\s*417\s*965[\"\']', 'href="tel:+916280834006"', html_str)
    html_str = re.sub(r'href=[\"\']tel:\+?443330417965[\"\']', 'href="tel:+916280834006"', html_str)
    html_str = re.sub(r'href=[\"\']tel:03330417965[\"\']', 'href="tel:+916280834006"', html_str)
    html_str = re.sub(r'tel:\+?443330417965', 'tel:+916280834006', html_str)
    html_str = re.sub(r'tel:03330417965', 'tel:+916280834006', html_str)
    html_str = re.sub(r'tel:3330417965', 'tel:+916280834006', html_str)

    phone_spans = ''.join(f'<span>{c}</span>' for c in '+91\xa062808\xa034006')
    html_str = re.sub(r'<h3><a href=[\"\']tel:[^\"\']*[\"\']><span>(?:<span>.*?</span>)+</span></a></h3>',
                      f'<h3><a href="tel:+916280834006"><span>{phone_spans}</span></a></h3>', html_str)

    html_str = html_str.replace('+44(0) 3330 417 965', '+91 62808 34006')
    html_str = html_str.replace('+44(0)\xa03330\xa0417\xa0965', '+91 62808 34006')
    html_str = html_str.replace('+44 3330 417 965', '+91 62808 34006')
    html_str = html_str.replace('0333 0417 965', '+91 62808 34006')
    html_str = html_str.replace('03330417965', '+91 62808 34006')
    html_str = html_str.replace('3330417965', '6280834006')

    # 2. Email: scrub all forgeautomotive & wrpdgroup emails -> contact@branders.co.uk
    html_str = re.sub(r'href=[\"\']mailto:[^\"\']*forgeautomotive[^\"\']*[\"\']', 'href="mailto:contact@branders.co.uk"', html_str)
    html_str = re.sub(r'href=[\"\']mailto:[^\"\']*wrpdgroup[^\"\']*[\"\']', 'href="mailto:contact@branders.co.uk"', html_str)
    html_str = re.sub(r'[a-zA-Z0-9._%+-]+@forgeautomotive\.co\.uk', 'contact@branders.co.uk', html_str)
    html_str = re.sub(r'[a-zA-Z0-9._%+-]+@wrpdgroup\.com', 'contact@branders.co.uk', html_str)
    html_str = html_str.replace('bookings@wrpdgroup.comTelephone', 'contact@branders.co.uk | Telephone')
    html_str = html_str.replace('contact@branders.co.ukTelephone', 'contact@branders.co.uk | Telephone')
    html_str = html_str.replace('builds@forgeautomotive.co.uk', 'contact@branders.co.uk')
    html_str = html_str.replace('bookings@wrpdgroup.com', 'contact@branders.co.uk')
    html_str = html_str.replace('info@forgeautomotive.co.uk', 'contact@branders.co.uk')
    html_str = html_str.replace('alex@forgeautomotive.co.uk', 'contact@branders.co.uk')

    # 3. Social links: LinkedIn, Instagram, Facebook pointing to Forge -> #social with popup prevention
    html_str = re.sub(r'href=[\"\']https?://(?:www\.)?linkedin\.com/company/forge-automotive-ltd/?[\"\']', 'href="#social" onclick="event.preventDefault(); return false;"', html_str)
    html_str = re.sub(r'href=[\"\']https?://(?:www\.)?instagram\.com/forgeautomotive/?[\"\']', 'href="#social" onclick="event.preventDefault(); return false;"', html_str)
    html_str = re.sub(r'href=[\"\']https?://(?:www\.)?facebook\.com/profile\.php\?id=61588925168989/?[\"\']', 'href="#social" onclick="event.preventDefault(); return false;"', html_str)
    html_str = re.sub(r'https?://(?:www\.)?linkedin\.com/company/forge-automotive-ltd/?', '#social', html_str)
    html_str = re.sub(r'https?://(?:www\.)?instagram\.com/forgeautomotive/?', '#social', html_str)
    html_str = re.sub(r'https?://(?:www\.)?facebook\.com/profile\.php\?id=61588925168989/?', '#social', html_str)

    # 4. Map links: Google Maps pins pointing to Forge workshops -> #locations
    html_str = re.sub(r'href=[\"\']https?://maps\.app\.goo\.gl/NmTzBYkb544jSnia8[\"\']', 'href="#locations" onclick="event.preventDefault(); return false;"', html_str)
    html_str = re.sub(r'href=[\"\']https?://maps\.app\.goo\.gl/sppHgGfo8j5p6x2LA[\"\']', 'href="#locations" onclick="event.preventDefault(); return false;"', html_str)
    html_str = re.sub(r'https?://maps\.app\.goo\.gl/[a-zA-Z0-9]+/?', '#locations', html_str)

    # 5. Legal / Corporate WRPD credentials
    html_str = re.sub(r'The\s+WRPD\s+Group\s+Ltd', 'Branders Ltd', html_str)
    html_str = re.sub(r'WRPD\s+Group\s+Ltd', 'Branders Ltd', html_str)
    html_str = re.sub(r'WRPD\s+Group', 'Branders', html_str)
    html_str = html_str.replace('Unit 5 Overland ParkGelderd RoadGildersomeLeedsWest YorkshireLS27 7FE', 'Branders Atelier, London, United Kingdom')
    html_str = html_str.replace('Unit 5 Overland Park', 'Branders Atelier')
    html_str = html_str.replace('Gelderd Road', 'Atelier Way')
    html_str = html_str.replace('Gildersome', 'London')
    html_str = html_str.replace('Leeds', 'London')
    html_str = html_str.replace('LS27 7FE', 'SW1A 1AA')
    html_str = html_str.replace('LS27\xa07FE', 'SW1A 1AA')

    # 6. Domains & Netlify
    html_str = html_str.replace('https%3A%2F%2Fforge-automotive.netlify.app%2Fstudio', '')
    html_str = html_str.replace('https://forge-automotive.netlify.app/studio', '')
    html_str = html_str.replace('https://forge-automotive.netlify.app', '')
    html_str = html_str.replace('https://forgeautomotive.co.uk/', f'https://gurination1.github.io{BASE_PATH}/')
    html_str = html_str.replace('https://forgeautomotive.co.uk', f'https://gurination1.github.io{BASE_PATH}')
    html_str = html_str.replace('https://cdn.forgeautomotive.media/files/ed72g2cx/production/', f'{BASE_PATH}/assets/videos/')
    html_str = html_str.replace('https://cdn.forgeautomotive.media/', f'{BASE_PATH}/assets/videos/')
    html_str = html_str.replace(f'{BASE_PATH}/assets/videos/files/ed72g2cx/production/', f'{BASE_PATH}/assets/videos/')
    html_str = html_str.replace('files/ed72g2cx/production/', '')
    html_str = html_str.replace('https://ed72g2cx.api.sanity.io', f'https://gurination1.github.io{BASE_PATH}')
    html_str = html_str.replace('https:\\/\\/ed72g2cx.api.sanity.io', f'https:\\/\\/gurination1.github.io{BASE_PATH}')
    html_str = html_str.replace('ed72g2cx.api.sanity.io', f'gurination1.github.io{BASE_PATH}')
    html_str = html_str.replace('ed72g2cx', 'branders')
    html_str = html_str.replace('<link rel="preconnect" href="https://cdn.sanity.io"/>', '')
    html_str = html_str.replace('<link rel="dns-prefetch" href="https://cdn.sanity.io"/>', '')
    html_str = html_str.replace('<link rel="preconnect" href="https://cdn.sanity.io">', '')
    html_str = html_str.replace('<link rel="dns-prefetch" href="https://cdn.sanity.io">', '')

    return html_str

COPYWRITING_REPLACEMENTS = [
    # 1. Preloader, Footer Quote & Marquee Ticker
    ('Bespoke vehicles built on distinction, desire, and identity. not simply to be modified.',
     'Raw performance re-engineered with surgical craft. Built for those who refuse stock.'),
    # Note: Scroll text & hero text retained with authentic Forge phrasing:
    # "We don’t modify vehicles / We build them for you"
    # "For Those Who Refuse Ordinary"
    # "A luxury automotive atelier for bespoke styling, performance and craftsmanship."
    # 2. Hero Section
    ('A luxury automotive atelier for bespoke styling, performance and craftsmanship — one-off Defender, G63, Range Rover, Urus and 911 builds.',
     'An elite automotive atelier engineering bespoke widebody styling, forged carbon aero, and race-bred performance modifications for Defender, G63, Urus, and 911 platforms.'),

    # 3. Modification Pillars (01 Vision, 02 Engineering, 03 Execution)
    ('<h3>Identity</h3>', '<h3>Vision</h3>'),
    ('\\"heading\\":\\"Identity\\"', '\\"heading\\":\\"Vision\\"'),
    ('Forge Identity', 'Branders Vision'),
    ('Every build begins with the person behind the wheel, shaped around their individual taste, lifestyle, presence and personal sense of identity on the road.',
     'Every commission starts with the driver’s DNA. From bespoke leather palettes to aggressive widebody proportions, we shape a silhouette that commands the road before the engine even turns.'),
    ('<h3>Insight</h3>', '<h3>Engineering</h3>'),
    ('\\"heading\\":\\"Insight\\"', '\\"heading\\":\\"Engineering\\"'),
    ('Forge Insight', 'Branders Engineering'),
    ('Exterior, interior and performance are brought together through a considered, detail-led approach, creating one complete and fully resolved vision.',
     'Aerodynamics, cockpit ergonomics, and acoustics are tuned in total unison. Computational airflow, forged monoblock offsets, and active valved exhausts converge into one lethal, unified machine.'),
    ('<h3>Cohesion</h3>', '<h3>Execution</h3>'),
    ('\\"heading\\":\\"Cohesion\\"', '\\"heading\\":\\"Execution\\"'),
    ('Forge Cohesion', 'Branders Execution'),
    ('Every modification is chosen with precision, ensuring each detail adds purpose, balance and distinction to the final bespoke automotive build.',
     'Zero compromise on fit and finish. Exposed carbon weave alignment, bespoke CNC billet hardware, and surgical multi-stage paint correction ensure your build withstands high-speed scrutiny on track and street.'),

    # 4. Services Section (Intro & 6 Disciplines)
    ('A vehicle should say something before it moves. Every line, material, and finish is considered.',
     'A true build commands the asphalt before the engine starts. Every contour, weave, and exhaust note is calculated.'),
    ('Our services are shaped with intent, from exterior styling and interior refinement to performance upgrades, detailing and bespoke finishes; each detail sharpens the vehicle’s character without overpowering it.',
     'From radical widebody conversions and forged carbon aero to custom valved titanium exhausts, bespoke cockpit re-trims, and self-healing armor detailing — we engineer visceral presence that leaves standard supercars in the dust.'),
    ('From aero styling to carbon details and exterior refinement,  bodywork is designed to change the vehicle’s presence without compromising its original character.',
     'Widebody arch sculpting, high-downforce front splitters, rear diffusers, and autoclave-cured dry carbon fiber. We re-engineer aerodynamic flow and aggressive stance with OEM-grade panel tolerances.'),
    ('From aero styling to carbon details and exterior refinement, bodywork is designed to change the vehicle’s presence without compromising its original character.',
     'Widebody arch sculpting, high-downforce front splitters, rear diffusers, and autoclave-cured dry carbon fiber. We re-engineer aerodynamic flow and aggressive stance with OEM-grade panel tolerances.'),
    ('Material, stitching, trim and finish are selected to create an interior that feels personal, tactile and composed. We turn the cabin into a space of identity, comfort and control.',
     'Bespoke cockpit architecture tailored to you: full Italian Nappa leather re-trims, Alcantara headliners, custom hexagonal quilting, forged carbon console inlays, and CNC-machined paddle shifters.'),
    ('Bespoke wheel upgrades designed to enhance stance, proportion and road presence, with fitments selected to complement the vehicle’s character and performance.',
     'Ultra-lightweight forged monoblock and multi-piece modular wheels. Custom-engineered offsets, deep concave profiles, and track-tested fitments that fill widebody arches with millimeter-flush stance.'),
    ('Lighting gives a vehicle its expression. From subtle tinting to signature illumination and refined visual details, we use light to sharpen character, presence and atmosphere.',
     'Smoked laser headlamps, custom LED daytime running signatures, animated welcome sequences, and ambient multi-zone cockpit fiber-optics engineered to give the vehicle a menacing nocturnal signature.'),
    ('Exhaust upgrades are chosen for tone, response and presence. Not noise for the sake of noise, but a sound profile that gives the vehicle more character and depth.',
     'Handcrafted lightweight titanium and Inconel valved exhaust systems. Engineered for spine-tingling acoustic pitch, instant throttle response, crackles on downshift, and switchable stealth-to-fury valves.'),
    ('Paint protective film solutions that preserve the finish of the vehicle while allowing for satin finishes, coloured films and full visual transformation.',
     'Self-healing ceramic Paint Protection Film (PPF), satin stealth wraps, custom liquid color transformations, and multi-stage paint correction detailing that guarantees mirror-gloss armor against high-speed rock chips.'),

    # 5. Mid CTAs & Global Section Transitions
    ('<em>Ordinary</em><span class="sr-only">Ordinary</span>',
     '<em>Standard</em><span class="sr-only">Standard</span>'),
    ('\\"line1\\":\\"Ordinary\\"', '\\"line1\\":\\"Standard\\"'),
    ('Complete expressions of taste, intent and individuality, shaped through detail, restraint and presence.',
     'Unapologetic expressions of power, craft, and individuality. Engineered for drivers who refuse to blend into traffic.'),
    ('The archive — a collection of bespoke builds shaped by craft, character and the people behind the wheel.',
     'The Branders archive — an elite garage of fully transformed supercars, widebody conversions, and bespoke custom machines built without compromise.'),
    ('A collection of previous bespoke builds, shaped by craft, character and the people behind the wheel.',
     'Explore our garage of fully transformed supercars, widebody icons, and bespoke custom machines built without limits.'),
    ('Finished Forge Automotive builds for sale now, each with a full specification. Viewings by appointment in Yorkshire and the North West.',
     'Finished bespoke Branders commissions available for immediate acquisition. Fully modified, track-calibrated, and ready to dominate the streets.'),
    ('Builds available for purchase, refined with intent, engineered with purpose, and ready to make a statement.',
     'Fully transformed bespoke builds available for immediate delivery. Meticulously modified, dialed in, and ready to dominate the streets.'),
    ('Builds available for purchase, custom refined with intent, purpose and ready to to make a statement.',
     'Fully transformed bespoke builds available for immediate delivery. Meticulously modified, dialed in, and ready to dominate the streets.'),


    # 6. Builds Catalog & Detail Cards
    ('Satin grey against gloss black, widened arches and a stance built to be noticed.',
     'Satin grey over gloss black, widened track arches, forged monoblocks, and a widebody stance built to command the street.'),
    ('Satin black from crest to calliper, with every brightwork detail taken out of the picture.',
     'Satin black from crest to calliper, stealth ceramic PPF, valved titanium exhaust, and every trace of factory chrome eliminated.'),
    ('Satin graphite over gloss black, widened at every arch and loaded for the long way round.',
     'Satin graphite over gloss black, widebody fender flares, bespoke roof architecture, and dialed in for ultimate overland dominance.'),
    ('Gloss yellow against forged carbon, with nothing about it asking to be overlooked.',
     'Gloss Giallo yellow against exposed forged carbon aero, high-flow downpipes, and a visceral widebody presence impossible to ignore.'),
    ('Grey held to a mirror gloss, carbon at every edge, and yellow light in the eyes.',
     'Mirror-gloss Brooklyn Grey, dry carbon splitters and diffusers, yellow DRL race optics, and precision titanium acoustics.'),
    ('Satin green over tan leather, with bronze standing in wherever chrome used to be.',
     'Satin olive green over saddle tan leather, brushed bronze billet accents, side-exit valved exhaust, and bespoke forged 24-inch wheels.'),
    ('Military green against gloss black, short in the wheelbase and heavy in the stance.',
     'Military matte green against gloss black, short wheelbase agility, heavy widebody stance, and custom leather cockpit.'),

    # 7. Stock Page & Available Commissions
    ('Satin protection, sculpted carbon and 24-inch forged alloys for undeniable road presence.',
     'Satin stealth PPF armor, exposed autoclave carbon aero, and custom 24-inch forged monoblock fitment for commanding stance.'),
    ('This build will be available soon. Check back for updates.',
     'In build pipeline. Bespoke coachbuilt interior and widebody stance in progress. Enquire for early allocation.'),

    # 8. Contact & Concierge Experience
    ('Every build starts with a conversation. Call, email or visit by appointment in Yorkshire or the North West to begin a bespoke vehicle commission.',
     'Every masterpiece begins with a consultation. Connect directly with our engineering team to allocate and specify your bespoke vehicle transformation.'),
    ('Every build starts with a conversation', 'Every Masterpiece Begins With A Consultation'),
    ('Define Your Specification', 'Specify Your Commission'),
    ('Share your build details so we can prepare a tailored quote. We aim to respond within 1–3 business days',
     'Submit your platform specs and target modifications. Our engineering atelier provides dedicated build feasibility and allocation within 24 hours.'),
    ('Share your build details so we can prepare a tailored quote. We aim to respond within 1-3 business days',
     'Submit your platform specs and target modifications. Our engineering atelier provides dedicated build feasibility and allocation within 24 hours.'),
    ('A considered process built around you', 'A Precision Engineering Protocol'),
    ('We’ll Review Your Enquiry', '1. Technical Consultation & Feasibility'),
    ('We\'ll Review Your Enquiry', '1. Technical Consultation & Feasibility'),
    ('Our team will review your details and get back to you to learn more about your vision and goals.',
     'Our master technicians analyze your vehicle platform dynamics, styling targets, and bespoke component tolerances.'),
    ('Discovery Call Or Studio Visit', '2. Studio Immersion & Spec Finalization'),
    ('We’ll arrange a call of meeting to explore ideas, expectations and potential solutions',
     'Experience physical carbon swatches, forged wheel profiles, and acoustic sound clips in-studio or via private consultation.'),
    ('We\'ll arrange a call of meeting to explore ideas, expectations and potential solutions',
     'Experience physical carbon swatches, forged wheel profiles, and acoustic sound clips in-studio or via private consultation.'),
    ('Tailored Proposal Delivered', '3. Blueprint & Build Allocation'),
    ('You’ll receive a bespoke proposal outlining the approach, timeline and investment required.',
     'Receive an exhaustive technical specification breakdown, 3D visualization render, production timeline, and dedicated bay allocation.'),
    ('You\'ll receive a bespoke proposal outlining the approach, timeline and investment required.',
     'Receive an exhaustive technical specification breakdown, 3D visualization render, production timeline, and dedicated bay allocation.'),

    # 9. Titles & Meta Tags
    ('Bespoke Vehicle Builds &amp; Styling', 'Bespoke Supercar Builds &amp; Performance Styling'),
    ('Bespoke Vehicle Builds & Styling', 'Bespoke Supercar Builds & Performance Styling'),
    ('Bespoke Builds for Sale', 'Bespoke Supercars Available'),
    ('Contact &amp; Commissions', 'Commissions &amp; Spec Consultation'),
    ('Contact & Commissions', 'Commissions & Spec Consultation'),
]

def apply_copywriting_overhaul(html_str, slug=''):
    for src, dst in COPYWRITING_REPLACEMENTS:
        html_str = html_str.replace(src, dst)
    return html_str

def process_page(slug):
    in_file = os.path.join(SRC_DIR, slug, 'index.html') if slug else os.path.join(SRC_DIR, 'index.html')
    out_dir = os.path.join(DEST_DIR, slug) if slug else DEST_DIR
    out_file = os.path.join(out_dir, 'index.html')

    with open(in_file, 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. Replace Sanity images (including OEM partner logo SVGs)
    html, rep_count = sanity_pattern.subn(sanity_replacer, html)

    # 1a. Also replace escaped sanity URLs in JSON flight payloads
    escaped_sanity_pattern = re.compile(r'https?:\\/\\/cdn\.sanity\.io\\/images\\/[^\\]+\\/production\\/([a-zA-Z0-9_\-\.]+)(?:\\u[0-9a-fA-F]{4}|[^\s"\'<>\\])*')
    html = escaped_sanity_pattern.sub(sanity_replacer, html)

    # 1b. Psychological Copywriting Overhaul for Automotive Modifiers
    html = apply_copywriting_overhaul(html, slug)

    # 2. Surgical Brand & Logo replacement: Forge -> Branders
    html = replace_branders_logo_and_text(html)

    # 3. Wire GitHub Pages subpath compatibility (prevent double prefix)
    html = re.sub(r'([\"\'`])/_next/', rf'\1{BASE_PATH}/_next/', html)
    html = re.sub(r'([\"\'`])/(ActiveFrame\.js|images/)', rf'\1{BASE_PATH}/\2', html)
    html = re.sub(r'([\"\'`])/(favicon\.ico|icon0\.svg|icon1\.png|apple-icon\.png|manifest\.json)', rf'\1{BASE_PATH}/\2', html)
    html = re.sub(r'([\"\'`])/web-app-manifest-', rf'\1{BASE_PATH}/web-app-manifest-', html)

    # Internal links (HTML attributes)
    html = re.sub(r'href="/(builds|stock|contact|cookies|privacy|terms|sitemap)(/?)"', rf'href="{BASE_PATH}/\1\2"', html)
    html = re.sub(r'href="/(builds|stock)/(fa\d+)(/?)"', rf'href="{BASE_PATH}/\1/\2\3"', html)
    html = re.sub(r'href="/"', f'href="{BASE_PATH}/"', html)

    # Escaped JSON payloads for Next.js App Router hydration
    html = re.sub(r'\\"href\\":\\"/(builds|stock|contact|cookies|privacy|terms|sitemap)(/?)(\\")', rf'\"href\":\"{BASE_PATH}/\1\2\3', html)
    html = re.sub(r'\\"href\\":\\"/(builds|stock)/(fa\d+)(/?)(\\")', rf'\"href\":\"{BASE_PATH}/\1/\2\3\4', html)
    html = re.sub(r'\\"href\\":\\"/\\"', rf'\"href\":\"{BASE_PATH}/\"', html)

    # Inject runtime head scripts
    if '<head>' in html:
        html = html.replace('<head>', f'<head>\n{RUNTIME_HEAD_INJECTION}')

    footer_picture = f'''<picture>
<source media="(min-width: 1024px)" srcSet="{BASE_PATH}/assets/cars/c6f15b9448f9090f3c7d9f0b5fab4e3cbc8e7284-2880x1800.jpg 3840w, {BASE_PATH}/assets/cars/c6f15b9448f9090f3c7d9f0b5fab4e3cbc8e7284-2880x1800.jpg 2048w, {BASE_PATH}/assets/cars/c6f15b9448f9090f3c7d9f0b5fab4e3cbc8e7284-2880x1800.jpg 1920w, {BASE_PATH}/assets/cars/c6f15b9448f9090f3c7d9f0b5fab4e3cbc8e7284-2880x1800.jpg 1400w, {BASE_PATH}/assets/cars/c6f15b9448f9090f3c7d9f0b5fab4e3cbc8e7284-2880x1800.jpg 1080w, {BASE_PATH}/assets/cars/c6f15b9448f9090f3c7d9f0b5fab4e3cbc8e7284-2880x1800.jpg 750w" sizes="100vw"/>
<img alt="Three custom Branders vehicles, a black Mercedes G-Wagen, a red Porsche 911 GT3, and a black Land Rover Defender, are parked on a dark surface." loading="lazy" decoding="async" srcSet="{BASE_PATH}/assets/cars/9ae611ac36488077eadfc0d1f8a5aa163aae1c8e-880x1592.jpg 880w" src="{BASE_PATH}/assets/cars/9ae611ac36488077eadfc0d1f8a5aa163aae1c8e-880x1592.jpg" width="880" height="1592" crossorigin="anonymous" data-deferred="false" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent;" data-loaded="true" class="sc-b83f0c97-0 ckbPhL"/>
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
    # 4. Recognize subpath /branders as homepage for Loader and SmoothScroll
    p_code = p_code.replace('F="/"===(0,p.usePathname)()', 'F=["/","/branders","/branders/","/aurelius-atelier","/aurelius-atelier/"].includes((0,p.usePathname)())')
    p_code = p_code.replace('x="/"===f&&!p', 'x=(["/","/branders","/branders/","/aurelius-atelier","/aurelius-atelier/"].includes(f))&&!p')
    # 5. Ensure preloader completes reliably once cinematic text completes
    p_code = p_code.replace('Y=(F?K&&(!M||R):J)&&B', 'Y=B')
    # 6. Surgical Brand Name replacement: Forge Automotive -> Branders
    p_code = p_code.replace('"aria-label":"Welcome to Forge Automotive"', '"aria-label":"Welcome to Branders"')
    with open(preloader_chunk_path, 'w', encoding='utf-8') as f:
        f.write(p_code)
    print("Patched 414 chunk: scroll reset, mini site preview, subpath homepage, reliable preloader & Branders aria-label")

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

# Header chunks logo update: Branders winged shield emblem & Branders letter paths
BRANDERS_REACT_PATHS = ",".join(
    f'(0,t.jsx)("path",{{d:"{d}","data-logo":"{l}"}})'
    for l, d in BRANDERS_LETTERS
)

def patch_logo_in_chunk(chunk_path, backup_path):
    if not os.path.exists(backup_path):
        return
    shutil.copyfile(backup_path, chunk_path)
    with open(chunk_path, 'r', encoding='utf-8') as f:
        code = f.read()

    def logo_replacer(match):
        v = match.group(1)
        return (
            f'{v}=l.forwardRef(function(e,n){{'
            f'let x=l.useId().replace(/:/g,"");'
            f'let defs=(0,t.jsx)("defs",{{children:(0,t.jsx)("clipPath",{{id:x,children:(0,t.jsx)("rect",{{x:"0",y:"24",width:"78",height:"12"}})}})}});'
            f'let icon=(0,t.jsx)("g",{{className:"icon",children:(0,t.jsx)("path",{{d:"{BRANDERS_EMBLEM_D}"}})}});'
            f'let text=(0,t.jsxs)("g",{{className:"text",clipPath:`url(#${{x}})`,children:[{BRANDERS_REACT_PATHS}]}}'
            f');'
            f'return (0,t.jsxs)(d,{{width:"78",height:"36",viewBox:"0 0 78 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,className:"logo",...e,children:[defs,icon,text]}});'
            f'}});{v}.displayName="Logo"'
        )

    code = re.sub(r'([a-zA-Z0-9_$]+)=l\.forwardRef\(function\(e,n\)\{.*?\}\);\1\.displayName="Logo"', logo_replacer, code)
    code = code.replace('"aria-label":"Forge home"', '"aria-label":"Branders home"')
    code = code.replace('/aurelius-atelier/', f'{BASE_PATH}/')
    code = code.replace('/aurelius-atelier', f'{BASE_PATH}')

    with open(chunk_path, 'w', encoding='utf-8') as f:
        f.write(code)
    print(f"Patched header logo in {os.path.basename(chunk_path)}")

patch_logo_in_chunk(
    os.path.join(DEST_DIR, '_next/static/chunks/0mxr_1ejp16yi.js'),
    os.path.join(DEST_DIR, 'original_0mxr.js')
)
patch_logo_in_chunk(
    os.path.join(DEST_DIR, '_next/static/chunks/1n4wodqi4yntq.js'),
    os.path.join(DEST_DIR, 'original_1n4.js')
)
patch_logo_in_chunk(
    os.path.join(DEST_DIR, '_next/static/chunks/3dca2icpnmf5w.js'),
    os.path.join(DEST_DIR, 'original_3dc.js')
)

def patch_link_chunk():
    orig_path = os.path.join(DEST_DIR, 'original_2oj.js')
    target_path = os.path.join(DEST_DIR, '_next/static/chunks/2ojz0fep8owih.js')
    if not os.path.exists(orig_path):
        return
    shutil.copyfile(orig_path, target_path)
    with open(target_path, 'r', encoding='utf-8') as f:
        code = f.read()
    # 1. module 522016 (next/link)
    code = code.replace('prefetch:T=null', 'prefetch:T=!1')
    code = code.replace('M=!1!==T', 'M=!1')
    # 2. Link in module 951847
    code = code.replace('i.prefetch(e)', '/* noop */')
    code = code.replace('let i=l(),{href:s,replace:u,scroll:f,transitionTypes:m,transitionAwaitsContent:d,...p}=e,h=',
                        f'let i=l(),{{href:s,replace:u,scroll:f,transitionTypes:m,transitionAwaitsContent:d,...p}}=e,o_href="string"==typeof s&&s.startsWith("/")&&!s.startsWith("{BASE_PATH}")?"{BASE_PATH}"+("/"===s?"/":s):s,h=')
    code = code.replace('let e="string"==typeof s?s:s.pathname+(s.search||"")+(s.hash||"");',
                        'let e="string"==typeof o_href?o_href:o_href.pathname+(o_href.search||"")+(o_href.hash||"");')
    code = code.replace(',href:s,', ',href:o_href,')
    code = code.replace('return(0,t.jsx)(r.default,{...p,ref:o,href:o_href,',
                        'return(0,t.jsx)(r.default,{prefetch:!1,...p,ref:o,href:o_href,')
    with open(target_path, 'w', encoding='utf-8') as f:
        f.write(code)
    print("Patched Link chunk (2ojz0fep8owih.js): safe prefix & prefetch disabled")

patch_link_chunk()

def patch_menu_alt_chunk():
    orig_path = os.path.join(DEST_DIR, 'original_3pg.js')
    target_path = os.path.join(DEST_DIR, '_next/static/chunks/3pgt5eg5ybvup.js')
    if not os.path.exists(orig_path):
        return
    shutil.copyfile(orig_path, target_path)
    with open(target_path, 'r', encoding='utf-8') as f:
        code = f.read()
    code = code.replace('{label:"Builds",href:"/builds",aria:"Navigate to Builds"}',
                        f'{{label:"Builds",href:"{BASE_PATH}/builds",aria:"Navigate to Builds"}}')
    code = code.replace('{label:"Stock",href:"/stock",aria:"Navigate to Stock"}',
                        f'{{label:"Stock",href:"{BASE_PATH}/stock",aria:"Navigate to Stock"}}')
    code = code.replace('{label:"Contact",href:"/contact",aria:"Navigate to Contact"}',
                        f'{{label:"Contact",href:"{BASE_PATH}/contact",aria:"Navigate to Contact"}}')
    code = code.replace('let r=n.startsWith("/")?n:`/${n}`;',
                        f'let r="string"==typeof n&&n.startsWith("{BASE_PATH}")?n:"{BASE_PATH}"+(n.startsWith("/")?n:"/"+n);')
    code = code.replace('return l[6]!==c||l[7]!==f||l[8]!==o||l[9]!==p||l[10]!==n?(r=(0,t.jsx)(L.default,{href:o,',
                        f'let o_safe="string"==typeof o&&o.startsWith("/")&&!o.startsWith("{BASE_PATH}")?"{BASE_PATH}"+("/"===o?"/":o):o;return l[6]!==c||l[7]!==f||l[8]!==o||l[9]!==p||l[10]!==n?(r=(0,t.jsx)(L.default,{{href:o_safe,')
    code = code.replace('Powered by WRPD', 'Made by Gurdharam')
    code = code.replace('https://wrpdgroup.com', 'https://github.com/gurination1')
    code = code.replace('"aria-label":"Powered by WRPD"', '"aria-label":"Made by Gurdharam"')
    with open(target_path, 'w', encoding='utf-8') as f:
        f.write(code)
    print("Patched alt menu chunk (3pgt5eg5ybvup.js): /branders links & Made by Gurdharam")

patch_menu_alt_chunk()

# Sanitize all chunks to ensure BASE_PATH (/branders) and clean credentials
import glob
for cfile in glob.glob(os.path.join(DEST_DIR, '_next/static/chunks/*.js')):
    with open(cfile, 'r', encoding='utf-8') as cf:
        cdata = cf.read()
    changed = False
    if '/aurelius-atelier' in cdata or 'aurelius-atelier' in cdata:
        cdata = cdata.replace('/aurelius-atelier/', f'{BASE_PATH}/')
        cdata = cdata.replace('/aurelius-atelier', f'{BASE_PATH}')
        cdata = cdata.replace('aurelius-atelier', 'branders')
        changed = True
    if 'LS27 7FE' in cdata:
        cdata = cdata.replace('LS27 7FE', 'SW1A 1AA')
        changed = True
    if 'forge-automotive.netlify.app' in cdata:
        cdata = cdata.replace('https://forge-automotive.netlify.app/studio', f'https://gurination1.github.io{BASE_PATH}')
        cdata = cdata.replace('https://forge-automotive.netlify.app', f'https://gurination1.github.io{BASE_PATH}')
        cdata = cdata.replace('forge-automotive.netlify.app', f'gurination1.github.io{BASE_PATH}')
        changed = True
    if '+443330417965' in cdata or '03330417965' in cdata or '3330417965' in cdata:
        cdata = cdata.replace('+443330417965', '+916280834006')
        cdata = cdata.replace('03330417965', '+916280834006')
        cdata = cdata.replace('3330417965', '6280834006')
        changed = True
    if 'builds@forgeautomotive.co.uk' in cdata:
        cdata = cdata.replace('builds@forgeautomotive.co.uk', 'contact@branders.co.uk')
        changed = True
    if 'bookings@wrpdgroup.com' in cdata:
        cdata = cdata.replace('bookings@wrpdgroup.com', 'contact@branders.co.uk')
        changed = True

    # Neutralize SanityLive live connection
    if '03hdi6auigpk_.js' in cfile:
        cdata = cdata.replace('function o(e){let{config:o,includeDrafts:f=!1,', 'function o(e){return null;let{config:o,includeDrafts:f=!1,')
        changed = True
    if 'SanityLive' in cdata:
        cdata = cdata.replace('["SanityLive",0,function(t){let[i,o]=(0,r.useState)(!1)', '["SanityLive",0,function(t){return null;let[i,o]=(0,r.useState)(!1)')
        cdata = cdata.replace('["SanityLive",0,function(e){let[r,i]=(0,n.useState)(!1)', '["SanityLive",0,function(e){return null;let[r,i]=(0,n.useState)(!1)')
        changed = True

    # Disable React 19 image preload of external sanity CDN in SanityImage
    if '2isoue6d_buae.js' in cfile or '3_85i70d26t0h.js' in cfile:
        cdata = cdata.replace('y&&L&&(0,l.preload)(g.src', 'void 0&&(0,l.preload)(g.src')
        changed = True

    # Scrub Sanity credentials and domains
    if 'ed72g2cx' in cdata:
        cdata = cdata.replace('ed72g2cx', 'branders')
        changed = True
    if 'api.sanity.io' in cdata:
        cdata = cdata.replace('https://api.sanity.io', f'https://gurination1.github.io{BASE_PATH}')
        cdata = cdata.replace('api.sanity.io', f'gurination1.github.io{BASE_PATH}')
        changed = True
    if 'cdn.sanity.io' in cdata:
        cdata = cdata.replace('https://cdn.sanity.io', f'https://gurination1.github.io{BASE_PATH}')
        cdata = cdata.replace('cdn.sanity.io', f'gurination1.github.io{BASE_PATH}')
        changed = True

    # Ensure menu and CTA links have /branders prefix
    if 'Navigate to Builds' in cdata:
        cdata = cdata.replace('{label:"Builds",href:"/builds",aria:"Navigate to Builds"}', f'{{label:"Builds",href:"{BASE_PATH}/builds",aria:"Navigate to Builds"}}')
        cdata = cdata.replace('{label:"Stock",href:"/stock",aria:"Navigate to Stock"}', f'{{label:"Stock",href:"{BASE_PATH}/stock",aria:"Navigate to Stock"}}')
        cdata = cdata.replace('{label:"Contact",href:"/contact",aria:"Navigate to Contact"}', f'{{label:"Contact",href:"{BASE_PATH}/contact",aria:"Navigate to Contact"}}')
        cdata = cdata.replace('let r=n.startsWith("/")?n:`/${n}`;', f'let r=n.startsWith("{BASE_PATH}")?n:(n.startsWith("/")?"{BASE_PATH}"+n:"{BASE_PATH}/"+n);')
        cdata = cdata.replace('(0,t.jsx)($.default,{href:o,', f'(0,t.jsx)($.default,{{href:("string"==typeof o&&o.startsWith("/")&&!o.startsWith("{BASE_PATH}")?"{BASE_PATH}"+("/"===o?"/":o):o),')
        cdata = cdata.replace('(0,t.jsx)(L.default,{href:o,', f'(0,t.jsx)(L.default,{{href:("string"==typeof o&&o.startsWith("/")&&!o.startsWith("{BASE_PATH}")?"{BASE_PATH}"+("/"===o?"/":o):o),')
        changed = True

    if 'to:"/contact"' in cdata:
        cdata = cdata.replace('to:"/contact"', f'to:"{BASE_PATH}/contact"')
        changed = True
    if 'to:"/builds"' in cdata:
        cdata = cdata.replace('to:"/builds"', f'to:"{BASE_PATH}/builds"')
        changed = True
    if 'to:"/stock"' in cdata:
        cdata = cdata.replace('to:"/stock"', f'to:"{BASE_PATH}/stock"')
        changed = True
    if 'href:"/sitemap"' in cdata or 'href:"/sitemap/"' in cdata:
        cdata = cdata.replace('href:"/sitemap/"', f'href:"{BASE_PATH}/sitemap/"')
        cdata = cdata.replace('href:"/sitemap"', f'href:"{BASE_PATH}/sitemap"')
        changed = True

    if changed:
        with open(cfile, 'w', encoding='utf-8') as cf:
            cf.write(cdata)

# Ensure .nojekyll exists
with open(os.path.join(DEST_DIR, '.nojekyll'), 'w') as f:
    pass

print("Build complete!")
