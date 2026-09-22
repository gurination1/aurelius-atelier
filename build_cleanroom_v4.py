import re
import os
import json

print("=== Starting Vanguard Atelier Master Cleanroom v4 Build ===")

with open('/root/forge_raw.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Index all local assets
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
html = html.replace('FORGE AUTOMOTIVE', 'VANGUARD ATELIER')
html = html.replace('Forge Automotive', 'Vanguard Atelier')
html = html.replace('forgeautomotive.co.uk', 'vanguardatelier.co.uk')
html = html.replace('forge-automotive.netlify.app', 'vanguard-atelier.local')
html = html.replace('instagram.com/forgeautomotive', 'instagram.com/vanguardatelier')
html = html.replace('linkedin.com/company/forge-automotive-ltd', 'linkedin.com/company/vanguard-atelier')
html = html.replace('aria-label="Forge home"', 'aria-label="Vanguard Atelier home"')
html = html.replace('content="Forge"', 'content="Vanguard Atelier"')
html = html.replace('alt="Forge ', 'alt="Vanguard Atelier ')
html = html.replace('Forge Lambo Interior', 'Vanguard Cockpit Interior')
html = html.replace('custom Forge collection', 'custom Vanguard collection')
html = html.replace('custom Forge vehicles', 'custom Vanguard vehicles')
html = html.replace('custom Forge Mercedes', 'custom Vanguard Mercedes')
html = html.replace('custom Forge Porsche', 'custom Vanguard Porsche')
html = html.replace('A Forge collection', 'A Vanguard collection')
html = html.replace('Three custom Forge vehicles', 'Three custom Vanguard vehicles')
html = html.replace('Forge —', 'Vanguard —')
html = html.replace('Forge Service: Bodywork', 'Vanguard Atelier: Bodystyling')
html = html.replace('Forge Service: Interior', 'Vanguard Atelier: Interior')
html = html.replace('Forge Service: Wheels', 'Vanguard Atelier: Wheels')
html = html.replace('Forge Service: Lighting', 'Vanguard Atelier: Lighting')
html = html.replace('Forge Service: Exhaust', 'Vanguard Atelier: Exhaust')
html = html.replace('Forge Service: Wraps / PPF', 'Vanguard Atelier: Protection & PPF')
html = html.replace('Forge Identity – Spirit of Ecstasy', 'Vanguard Heritage – Atelier Spirit')
html = html.replace('Forge Intent – Custom Carbon Fibre', 'Vanguard Precision – Carbon Architecture')
html = html.replace('Forge Cohesion – Backend McLaren', 'Vanguard Harmony – Aerodynamic Mastery')
html = html.replace('href="tel:+443330417965"', 'href="tel:+18005558264"')

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

# 5. Inject Local Asset Virtualization & Preloader Bridge & Footer Attribution in <head>
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

  // 7. Preloader Watcher with Smooth Auto-Transition & Footer Attribution Injection
  document.addEventListener('DOMContentLoaded', () => {{
    // Auto-transition preloader
    let triggered = false;
    const observer = new MutationObserver(() => {{
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

      // Ensure Made by Gurdharam is present in footer
      const footer = document.querySelector('footer');
      if (footer && !document.getElementById('vanguard-made-by-gurdharam')) {{
        const credDiv = document.createElement('div');
        credDiv.id = 'vanguard-made-by-gurdharam';
        credDiv.style.cssText = 'display:flex; flex-direction:column; align-items:center; justify-content:center; gap:14px; margin-top:50px; padding:28px 16px; border-top:1px solid rgba(255,255,255,0.08); font-family:var(--font-geist-sans, -apple-system, sans-serif); font-size:13px; color:#888888; z-index:10; position:relative;';
        credDiv.innerHTML = `
          <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap; justify-content:center; letter-spacing:0.4px;">
            <span>© 2026 Vanguard Atelier. All rights reserved.</span>
            <span style="opacity:0.3;">•</span>
            <a href="/terms.html" style="color:#aaaaaa; text-decoration:none; transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#aaa'">Terms &amp; Conditions</a>
            <span style="opacity:0.3;">•</span>
            <a href="/privacy.html" style="color:#aaaaaa; text-decoration:none; transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#aaa'">Privacy Policy</a>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <a href="https://gurdharam.com" target="_blank" rel="noopener noreferrer" style="display:flex; align-items:center; gap:9px; text-decoration:none; color:#d4af37; font-weight:600; font-size:13px; letter-spacing:0.5px; padding:6px 14px; background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.22); border-radius:999px; transition:all 0.25s;" onmouseover="this.style.background='rgba(212,175,55,0.18)'; this.style.borderColor='rgba(212,175,55,0.45)';" onmouseout="this.style.background='rgba(212,175,55,0.08)'; this.style.borderColor='rgba(212,175,55,0.22)';">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="20" height="20"><rect width="100" height="100" rx="20" fill="#080808"/><circle cx="50" cy="50" r="42" fill="none" stroke="#d4af37" stroke-width="5" stroke-dasharray="200 60"/><text x="50" y="63" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="44" fill="#d4af37" text-anchor="middle">G</text></svg>
              <span>Made by Gurdharam</span>
            </a>
          </div>
        `;
        footer.appendChild(credDiv);
      }}

      // Also ensure drawer links Made by Gurdharam
      const drawerUl = document.querySelector('nav ul');
      if (drawerUl && !document.getElementById('drawer-gurdharam-link')) {{
        const li = document.createElement('li');
        li.id = 'drawer-gurdharam-link';
        li.innerHTML = '<a href="https://gurdharam.com" target="_blank" rel="noopener noreferrer" style="color:#d4af37;">Made by Gurdharam</a>';
        drawerUl.appendChild(li);
      }}
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
#vanguard-made-by-gurdharam a {{
  cursor: pointer;
}}
</style>
"""

html = html.replace('<head>', '<head>' + interceptor_script, 1)

# Write master index.html
with open('/root/forge-source/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Master /root/forge-source/index.html written successfully.")
