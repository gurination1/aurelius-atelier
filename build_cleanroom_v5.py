import re
import os
import json

print("=== Starting Vanguard Atelier Master Cleanroom v5 Build ===")

with open('/root/forge_raw.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Index all local cleanroom assets
local_map = {}
for root, dirs, files in os.walk('/root/forge-source/assets'):
    for f in files:
        rel = os.path.relpath(os.path.join(root, f), '/root/forge-source')
        local_map[f] = '/' + rel.replace('\\', '/')

print(f"Indexed {len(local_map)} local asset files.")

# 2. Replace Sanity URLs in HTML
def repl_unescaped(match):
    full = match.group(0)
    clean = full.split('?')[0].rstrip('\\')
    fn = clean.split('/')[-1]
    if fn in local_map:
        return local_map[fn]
    return full

html = re.sub(r'https://cdn\.sanity\.io/(?:images|files)/ed72g2cx/production/[a-zA-Z0-9_\-\.]+(?:\?[^\"\'\s<>\\]*)?', repl_unescaped, html)

# Replace escaped Sanity URLs in Next JSON payloads (https:\/\/cdn.sanity.io\/...)
def repl_escaped(match):
    full = match.group(0)
    unescaped = full.replace('\\/', '/')
    clean = unescaped.split('?')[0].rstrip('\\')
    fn = clean.split('/')[-1]
    if fn in local_map:
        return local_map[fn].replace('/', '\\/')
    return full

html = re.sub(r'https:\\/\\/cdn\.sanity\.io\\/(?:images|files)\\/ed72g2cx\\/production\\/[a-zA-Z0-9_\-\.]+(?:\\\?[^\"\'\s<>]*)?', repl_escaped, html)

# Remove preconnect to Sanity CDN
html = html.replace('<link rel="preconnect" href="https://cdn.sanity.io"/>', '')
html = html.replace('{"rel":"preconnect","href":"https://cdn.sanity.io"}', '{"rel":"dns-prefetch","href":"https://vanguardatelier.co.uk"}')
html = html.replace('{\\"rel\\":\\"preconnect\\",\\"href\\":\\"https://cdn.sanity.io\\"}', '{\\"rel\\":\\"dns-prefetch\\",\\"href\\":\\"https://vanguardatelier.co.uk\\"}')

# 3. Decouple Brand Identity: Forge -> Vanguard Atelier
brand_replacements = [
    ('FORGE AUTOMOTIVE', 'VANGUARD ATELIER'),
    ('Forge Automotive', 'Vanguard Atelier'),
    ('forgeautomotive.co.uk', 'vanguardatelier.co.uk'),
    ('forge-automotive.netlify.app', 'vanguardatelier.co.uk'),
    ('info@forgeautomotive.co.uk', 'atelier@vanguardatelier.co.uk'),
    ('instagram.com/forgeautomotive', 'instagram.com/vanguardatelier'),
    ('linkedin.com/company/forge-automotive-ltd', 'linkedin.com/company/vanguard-atelier'),
    ('aria-label="Forge home"', 'aria-label="Vanguard Atelier home"'),
    ('content="Forge"', 'content="Vanguard Atelier"'),
    ('apple-mobile-web-app-title\\",\\"content\\":\\"Forge\\"', 'apple-mobile-web-app-title\\",\\"content\\":\\"Vanguard Atelier\\"'),
    ('alt="Forge ', 'alt="Vanguard Atelier '),
    ('trading as Forge', 'trading as Vanguard Atelier'),
    ('visit the Forge website', 'visit the Vanguard Atelier website'),
    ('potential Forge project', 'potential Vanguard Atelier commission'),
    ('custom Forge vehicle\'s', 'custom Vanguard vehicle\'s'),
    ('custom Forge vehicles', 'custom Vanguard vehicles'),
    ('custom Forge collection', 'custom Vanguard collection'),
    ('custom Forge Mercedes', 'custom Vanguard Mercedes'),
    ('custom Forge Porsche', 'custom Vanguard Porsche'),
    ('Three custom Forge vehicles', 'Three custom Vanguard vehicles'),
    ('Forge Lambo Interior', 'Vanguard Cockpit Interior'),
    ('A Forge collection', 'A Vanguard collection'),
    ('Forge —', 'Vanguard —'),
    ('Forge Service: Bodywork', 'Vanguard Atelier: Bodystyling'),
    ('Forge Service: Interior', 'Vanguard Atelier: Interior'),
    ('Forge Service: Wheels', 'Vanguard Atelier: Wheels'),
    ('Forge Service: Lighting', 'Vanguard Atelier: Lighting'),
    ('Forge Service: Exhaust', 'Vanguard Atelier: Exhaust'),
    ('Forge Service: Wraps / PPF', 'Vanguard Atelier: Protection & PPF'),
    ('Forge Identity – Spirit of Ecstasy', 'Vanguard Heritage – Atelier Spirit'),
    ('Forge Intent – Custom Carbon Fibre', 'Vanguard Precision – Carbon Architecture'),
    ('Forge Cohesion – Backend McLaren', 'Vanguard Harmony – Aerodynamic Mastery'),
    ('href="tel:+443330417965"', 'href="tel:+18005558264"')
]

for b_old, b_new in brand_replacements:
    html = html.replace(b_old, b_new)

# Replace SVG header logo text with crisp VANGUARD text
svg_logo_text_pattern = r'<g class="text" clip-path="url\(#_R_cmiivb_\)">[\s\S]*?</g>'
vanguard_svg_text = '<g class="text"><text x="39" y="34" text-anchor="middle" fill="#ffffff" font-family="\'Geist\', -apple-system, sans-serif" font-size="7.5" font-weight="700" letter-spacing="2.4">VANGUARD</text></g>'
html = re.sub(svg_logo_text_pattern, vanguard_svg_text, html)

# 4. Decouple Editorial Copy & Headlines
copy_pairs = [
    # Headings
    ('For Those Who Refuse Ordinary', 'For Those Who Command Distinction'),
    ('Refuse Ordinary', 'Command Distinction'),
    ('We don’t modify vehiclesWe build them for you', 'We don’t alter vehiclesWe sculpt bespoke commissions'),
    ('We don&#x27;t modify vehiclesWe build them for you', 'We don&#x27;t alter vehiclesWe sculpt bespoke commissions'),
    ('Our Approach To Every Build', 'Our Philosophy To Every Commission'),
    ('A vehicle should say something before it moves. Every line, material, and finish is considered.', 'A machine should captivate before ignition. Every contour, material, and finish is intentional.'),
    ('A vehicle should say something before it moves. Every line, material, and finish is considered.', 'A machine should captivate before ignition. Every contour, material, and finish is intentional.'),
    ('Ordinary Ends Here', 'Compromise Ends Here'),
    ('Ordinary</span>', 'Compromise</span>'),
    ('"line1":"Ordinary"', '"line1":"Compromise"'),
    ('\\"line1\\":\\"Ordinary\\"', '\\"line1\\":\\"Compromise\\"'),
    ('Previous Builds', 'Curated Commissions'),
    ('Available Stock', 'Atelier Inventory'),
    ('Are you ready to', 'Ready to'),
    ('Start Your Project', 'Commission A Build'),
    ('Start Your Project', 'Commission A Build'),
    
    # Preloader & Hero Subhead
    ('Bespoke vehicles built on distinction, desire, and identity. not simply to be modified.', 'Bespoke vehicles forged through distinction, desire, and discipline. Not merely altered, but elevated.'),
    ('Bespoke vehicles built on distinction, desire, and identity.', 'Bespoke vehicles forged through distinction, desire, and discipline.'),
    ('not simply to be modified.', 'Not merely altered, but elevated.'),
    ('A luxury automotive atelier for bespoke styling, performance and craftsmanship.', 'A bespoke automotive atelier dedicated to precision styling, advanced performance and master craftsmanship.'),
    
    # 3 Pillars
    ('Every build begins with the person behind the wheel, shaped around their individual taste, lifestyle, and how they use the car.', 'Every commission begins with the vision behind the wheel, shaped around individual taste, lifestyle, and architectural form.'),
    ('Exterior, interior and performance are brought together through a considered, detail-led approach, creating a cohesive, individual vehicle.', 'Exterior architecture, interior tactile sanctuary, and powertrain calibration unite in singular synchronicity.'),
    ('Every modification is chosen with precision, ensuring each detail adds purpose, balance and distinction to the final build.', 'Every contour is engineered with surgical accuracy, ensuring each line delivers proportion, balance, and poise.'),
    ('Every decision is intentional, every detail has purpose based on your taste, your lifestyle, and your vision.', 'Every decision is intentional, every detail has purpose based on your taste, your lifestyle, and your vision.'),
    
    # Services
    ('Our services are shaped with intent, from exterior styling and interior refinement to performance upgrades and bespoke touches.', 'Our atelier services are shaped with intent, from aerodynamic styling and interior refinement to performance engineering.'),
    ('From aero styling to carbon details and exterior refinement,  bodywork is designed to change the vehicle’s stance, presence, and visual character with intent.', 'From aerodynamic carbon diffusers to bespoke widebody coachwork, sculpted to transform stance and aerodynamic velocity.'),
    ('From aero styling to carbon details and exterior refinement, bodywork is designed to change the vehicle’s stance, presence, and visual character with intent.', 'From aerodynamic carbon diffusers to bespoke widebody coachwork, sculpted to transform stance and aerodynamic velocity.'),
    ('Material, stitching, trim and finish are selected to create an interior that feels personal, tactile, and distinct from factory specification.', 'Hand-stitched semi-aniline leathers, bespoke Alcantara headlining, and forged carbon composites tailored to tactile perfection.'),
    ('Bespoke wheel upgrades designed to enhance stance, proportion and road presence, with fitments selected to complement the lines of the vehicle.', 'Ultra-lightweight forged monoblock alloys engineered for exacting stance, brake clearance, and uncompromising road presence.'),
    ('Lighting gives a vehicle its expression. From subtle tinting to signature illumination and refined visual details, our upgrades create presence day and night.', 'Signature illumination architecture, tinted matrix optic arrays, and dynamic daytime LED halos that establish immediate presence.'),
    ('Exhaust upgrades are chosen for tone, response and presence. Not noise for the sake of noise, but a deeper, more intentional sound.', 'Acoustically tuned titanium and inconel exhaust systems delivering visceral harmonic resonance and immediate throttle response.'),
    ('Paint protective film solutions that preserve the finish of the vehicle while allowing for satin finishes or high-gloss perfection.', 'Self-healing stealth matte and ultra-gloss paint protection film engineered for permanent hydrophobic defense and flawless depth.'),
    
    # Commissions / Builds / Stock
    ('Complete expressions of taste, intent and individuality, shaped through detail, restraint and presence.', 'Curated expressions of individuality, crafted through restraint, bespoke carbon fiber architecture, and uncompromising presence.'),
    ('A collection of previous bespoke builds, shaped by craft, character and the people behind the wheel.', 'A collection of bespoke master commissions, shaped by craft, aerodynamic discipline, and client vision.'),
    ('Builds available for purchase, refined with intent, engineered with purpose, and ready to make a statement.', 'Commissions available for immediate acquisition, refined with purpose, certified by our master technicians, and ready to command the road.')
]

for old_s, new_s in copy_pairs:
    html = html.replace(old_s, new_s)

# 5. Inject Local Asset Virtualization & Drawer Attribution (WITHOUT FOOTER BREAKAGE)
interceptor_script = f"""
<script id="vanguard-cleanroom-bridge">
(function() {{
  const ASSET_MAP = {json.dumps(local_map)};

  function getLocalAsset(url) {{
    if (typeof url !== 'string') return url;
    if (url.includes('cdn.sanity.io')) {{
      const normalized = url.replace(/\\\\\\//g, '/');
      const clean = normalized.split('?')[0].split('/').pop().replace(/\\\\$/, '');
      if (ASSET_MAP[clean]) {{
        return ASSET_MAP[clean];
      }}
    }}
    return url;
  }}

  function cleanSrcset(srcset) {{
    if (typeof srcset !== 'string') return srcset;
    return srcset.split(',').map(entry => {{
      const parts = entry.trim().split(/\\s+/);
      if (parts[0]) parts[0] = getLocalAsset(parts[0]);
      return parts.join(' ');
    }}).join(', ');
  }}

  // 1. Intercept Image prototype src & srcset
  const imgProto = HTMLImageElement.prototype;
  const origSrcDesc = Object.getOwnPropertyDescriptor(imgProto, 'src') || Object.getOwnPropertyDescriptor(Element.prototype, 'src');
  if (origSrcDesc && origSrcDesc.set) {{
    Object.defineProperty(imgProto, 'src', {{
      set: function(val) {{
        return origSrcDesc.set.call(this, getLocalAsset(val));
      }},
      get: function() {{
        return origSrcDesc.get.call(this);
      }},
      configurable: true
    }});
  }}

  const origSrcsetDesc = Object.getOwnPropertyDescriptor(imgProto, 'srcset');
  if (origSrcsetDesc && origSrcsetDesc.set) {{
    Object.defineProperty(imgProto, 'srcset', {{
      set: function(val) {{
        return origSrcsetDesc.set.call(this, cleanSrcset(val));
      }},
      get: function() {{
        return origSrcsetDesc.get.call(this);
      }},
      configurable: true
    }});
  }}

  // 2. Intercept Source prototype srcset
  const sourceProto = HTMLSourceElement.prototype;
  const origSourceSrcsetDesc = Object.getOwnPropertyDescriptor(sourceProto, 'srcset');
  if (origSourceSrcsetDesc && origSourceSrcsetDesc.set) {{
    Object.defineProperty(sourceProto, 'srcset', {{
      set: function(val) {{
        return origSourceSrcsetDesc.set.call(this, cleanSrcset(val));
      }},
      get: function() {{
        return origSourceSrcsetDesc.get.call(this);
      }},
      configurable: true
    }});
  }}

  // 3. Intercept SVGImageElement href
  if (typeof SVGImageElement !== 'undefined') {{
    const svgImgProto = SVGImageElement.prototype;
    const origHrefDesc = Object.getOwnPropertyDescriptor(svgImgProto, 'href');
    if (origHrefDesc && origHrefDesc.set) {{
      Object.defineProperty(svgImgProto, 'href', {{
        set: function(val) {{
          return origHrefDesc.set.call(this, getLocalAsset(val));
        }},
        get: function() {{
          return origHrefDesc.get.call(this);
        }},
        configurable: true
      }});
    }}
  }}

  // 4. Intercept setAttribute & setAttributeNS
  const origSetAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function(name, value) {{
    if (typeof name === 'string') {{
      const lower = name.toLowerCase();
      if (lower === 'src' || lower === 'href' || lower === 'xlink:href') {{
        value = getLocalAsset(value);
      }} else if (lower === 'srcset' || lower === 'imagesrcset') {{
        value = cleanSrcset(value);
      }}
    }}
    return origSetAttribute.call(this, name, value);
  }};

  const origSetAttributeNS = Element.prototype.setAttributeNS;
  if (origSetAttributeNS) {{
    Element.prototype.setAttributeNS = function(ns, name, value) {{
      if (typeof name === 'string') {{
        const lower = name.toLowerCase();
        if (lower === 'src' || lower === 'href' || lower === 'xlink:href') {{
          value = getLocalAsset(value);
        }} else if (lower === 'srcset' || lower === 'imagesrcset') {{
          value = cleanSrcset(value);
        }}
      }}
      return origSetAttributeNS.call(this, ns, name, value);
    }};
  }}

  // 5. Intercept fetch & XMLHttpRequest
  const origFetch = window.fetch;
  window.fetch = function(url, options) {{
    if (typeof url === 'string') {{
      url = getLocalAsset(url);
      if (url.includes('api.sanity.io')) {{
        return Promise.resolve(new Response(JSON.stringify({{
          documents: [],
          result: []
        }}), {{
          status: 200,
          headers: {{ 'Content-Type': 'application/json' }}
        }}));
      }}
    }}
    return origFetch.call(this, url, options);
  }};

  const origOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url, ...rest) {{
    if (typeof url === 'string') {{
      url = getLocalAsset(url);
    }}
    return origOpen.call(this, method, url, ...rest);
  }};

  // 6. Stub EventSource (Sanity live listener)
  if (window.EventSource) {{
    const OrigEventSource = window.EventSource;
    window.EventSource = function(url, opts) {{
      if (typeof url === 'string' && url.includes('sanity.io')) {{
        const dummy = new EventTarget();
        dummy.close = () => {{}};
        dummy.readyState = 1;
        return dummy;
      }}
      return new OrigEventSource(url, opts);
    }};
  }}

  // 7. Auto-Transition Preloader & Inject Made by Gurdharam exclusively in Menu Drawer
  document.addEventListener('DOMContentLoaded', () => {{
    let triggered = false;
    const observer = new MutationObserver(() => {{
      // Preloader auto-transition
      const btns = Array.from(document.querySelectorAll('button'));
      const enterBtn = btns.find(b => b.textContent.trim().toUpperCase() === 'ENTER');
      if (enterBtn && !triggered) {{
        setTimeout(() => {{
          if (!triggered) {{
            triggered = true;
            enterBtn.click();
            console.log('[Vanguard] Preloader auto-transitioned into hero viewport.');
          }}
        }}, 2000);
      }}

      // Place Made by Gurdharam exclusively in slide-out Drawer Menu (in bottom meta dl group)
      const drawerMeta = document.querySelector('.sc-a66db614-9');
      if (drawerMeta && !document.getElementById('drawer-gurdharam-dl')) {{
        const dl = document.createElement('dl');
        dl.id = 'drawer-gurdharam-dl';
        dl.className = 'sc-a66db614-10 crdghV';
        dl.innerHTML = `
          <dt style="font-family:var(--font-geist-mono, monospace); font-size:11px; text-transform:uppercase; letter-spacing:0.08em; opacity:0.5; margin-bottom:6px;">Atelier Craft</dt>
          <dd>
            <a href="https://gurdharam.com" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:8px; text-decoration:none; color:#d4af37; font-weight:600; font-size:13px; letter-spacing:0.04em; transition:opacity 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="18" height="18"><rect width="100" height="100" rx="20" fill="#0c0c0c"/><circle cx="50" cy="50" r="42" fill="none" stroke="#d4af37" stroke-width="5" stroke-dasharray="200 60"/><text x="50" y="63" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="44" fill="#d4af37" text-anchor="middle">G</text></svg>
              <span>Made by Gurdharam</span>
            </a>
          </dd>
          <dd style="color:rgba(255,255,255,0.4); font-size:12px; margin-top:3px; letter-spacing:0.02em;">
            © 2026 Vanguard Atelier
          </dd>
        `;
        drawerMeta.appendChild(dl);
      }}

      // Ensure footer background image is eager loaded with right source
      const footerImg = document.querySelector('footer aside img');
      if (footerImg) {{
        footerImg.loading = 'eager';
        if (!footerImg.getAttribute('src') || footerImg.getAttribute('src').startsWith('data:')) {{
          footerImg.src = '/assets/cars/c6f15b9448f9090f3c7d9f0b5fab4e3cbc8e7284-2880x1800.jpg';
        }}
      }}

      // Also ensure images have data-loaded=true to prevent opacity:0 stalls
      document.querySelectorAll('img').forEach(img => {{
        if (img.complete && img.naturalWidth > 0) {{
          img.setAttribute('data-loaded', 'true');
        }} else {{
          img.addEventListener('load', () => img.setAttribute('data-loaded', 'true'), {{ once: true }});
        }}
      }});
    }});
    observer.observe(document.body || document.documentElement, {{ childList: true, subtree: true }});
  }});
}})();
</script>
<style>
/* Refine logo font rendering */
svg.logo g.text text {{
  letter-spacing: 2.2px;
  text-transform: uppercase;
}}
/* Guarantee images with data-loaded are displayed smoothly */
.sc-b83f0c97-0.ckbPhL {{
  opacity: 1 !important;
}}

/* Hero background picture visibility */
.ktTCgb, .hUxulM {{
  background: transparent !important;
}}
.eiJGlj {{
  position: absolute !important;
  inset: 0 !important;
  z-index: 1 !important;
}}
.eiJGlj picture,
.eiJGlj picture img {{
  display: block !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  opacity: 1 !important;
}}
.ktTCgb:after {{
  z-index: 2 !important;
}}
.dOXBxg {{
  position: relative !important;
  z-index: 5 !important;
}}

/* Ensure footer background image covers beautifully and is visible with dark moody gradient */
footer.kESbul {{
  min-height: 100vh !important;
  position: relative !important;
  overflow: hidden !important;
  background-color: #050505 !important;
}}
footer.kESbul aside,
.gXORHV {{
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  overflow: hidden !important;
  z-index: 1 !important;
  pointer-events: none !important;
}}
footer.kESbul aside picture,
footer.kESbul aside picture img,
.gXORHV picture,
.gXORHV picture img {{
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center bottom !important;
  opacity: 0.75 !important;
  display: block !important;
  z-index: 1 !important;
}}
footer.kESbul:after {{
  content: '' !important;
  position: absolute !important;
  inset: 0 !important;
  z-index: 2 !important;
  background: linear-gradient(180deg, #050505 0%, rgba(5,5,5,0.3) 40%, rgba(5,5,5,0.85) 100%) !important;
  pointer-events: none !important;
}}
footer.kESbul waffl-grid {{
  position: relative !important;
  z-index: 10 !important;
}}
footer.kESbul .dOSZFU {{
  position: absolute !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 15 !important;
}}
</style>
"""

html = html.replace("srcSet=", "srcset=")
html = html.replace('<head>', '<head>' + interceptor_script, 1)

# Write master index.html
with open('/root/forge-source/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Master /root/forge-source/index.html written successfully with v5 cleanroom configuration.")
