import os
import re
import shutil

SRC_DIR = '/root/forge-clean'
DEST_DIR = '/root/forge-source'
BASE_PATH = '/aurelius-atelier'

print("Starting clean Vanguard build...")

# 1. Copy clean chunks and scripts
os.makedirs(os.path.join(DEST_DIR, '_next/static/chunks'), exist_ok=True)
for item in os.listdir(os.path.join(SRC_DIR, '_next/static/chunks')):
    s = os.path.join(SRC_DIR, '_next/static/chunks', item)
    d = os.path.join(DEST_DIR, '_next/static/chunks', item)
    if os.path.isfile(s):
        shutil.copy2(s, d)

if os.path.exists(os.path.join(SRC_DIR, 'ActiveFrame.js')):
    shutil.copy2(os.path.join(SRC_DIR, 'ActiveFrame.js'), os.path.join(DEST_DIR, 'ActiveFrame.js'))

# Update turbopack chunk base path for subpath compatibility
turbo_chunk = os.path.join(DEST_DIR, '_next/static/chunks/turbopack-09j_a0p3oj5e6.js')
if os.path.exists(turbo_chunk):
    with open(turbo_chunk, 'r', encoding='utf-8') as f:
        t_code = f.read()
    t_code = t_code.replace('"string"==typeof TURBOPACK_CHUNK_BASE_PATH?TURBOPACK_CHUNK_BASE_PATH:"/_next/"',
                            f'"string"==typeof TURBOPACK_CHUNK_BASE_PATH?TURBOPACK_CHUNK_BASE_PATH:"{BASE_PATH}/_next/"')
    with open(turbo_chunk, 'w', encoding='utf-8') as f:
        f.write(t_code)
    print("Turbopack chunk base path configured.")

# 2. Universal script: Hero Video + Menu Drawer Vanguard Branding & Attribution
UNIVERSAL_INJECTION = f"""
<script>
  window.VANGUARD_BASE = "{BASE_PATH}";

  // Hero Video Injection: mounts high-res hero video seamlessly behind canvas
  function initHeroVideo() {{
    const heroBox = document.querySelector('.sc-2b039258-5') || document.querySelector('.sc-2b039258-1');
    if (heroBox && !document.getElementById('vanguard-hero-video')) {{
      const video = document.createElement('video');
      video.id = 'vanguard-hero-video';
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.style.cssText = 'position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:0; pointer-events:none;';
      video.innerHTML = `
        <source src="{BASE_PATH}/assets/videos/hero_desktop.mp4" type="video/mp4" media="(min-width: 768px)">
        <source src="{BASE_PATH}/assets/videos/hero_mobile.mp4" type="video/mp4">
      `;
      heroBox.style.position = 'relative';
      heroBox.prepend(video);
      video.play().catch(() => {{}});
    }}
  }}

  // Navigation Drawer Menu: Vanguard branding and Made by Gurdharam attribution
  function updateMenuAttribution() {{
    const menuEl = document.querySelector('#site-menu') || document.querySelector('[role="dialog"]') || document.querySelector('.sc-a66db614-0');
    if (menuEl) {{
      const meta = menuEl.querySelector('.sc-a66db614-9') || menuEl.querySelector('dl')?.parentElement;
      if (meta && !document.getElementById('vanguard-drawer-attribution')) {{
        const block = document.createElement('dl');
        block.id = 'vanguard-drawer-attribution';
        block.className = 'sc-a66db614-10 crdghV';
        block.innerHTML = `
          <dt style="font-family:var(--font-geist-mono, monospace); font-size:11px; text-transform:uppercase; letter-spacing:0.08em; opacity:0.5; margin-bottom:6px;">Atelier Identity</dt>
          <dd style="color:#ffffff; font-weight:600; font-size:13px; letter-spacing:0.04em;">COPYRIGHT © 2026 VANGUARD</dd>
          <dd style="margin-top:6px;">
            <a href="https://gurdharam.com" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:8px; text-decoration:none; color:#d4af37; font-weight:600; font-size:13px; letter-spacing:0.04em; transition:opacity 0.2s;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="16" height="16"><rect width="100" height="100" rx="20" fill="#0c0c0c"/><circle cx="50" cy="50" r="42" fill="none" stroke="#d4af37" stroke-width="5" stroke-dasharray="200 60"/><text x="50" y="63" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="44" fill="#d4af37" text-anchor="middle">G</text></svg>
              <span>MADE BY GURDHARAM</span>
            </a>
          </dd>
        `;
        meta.appendChild(block);
      }}
    }}
  }}

  document.addEventListener('DOMContentLoaded', () => {{
    initHeroVideo();
    updateMenuAttribution();
    const observer = new MutationObserver(() => {{
      initHeroVideo();
      updateMenuAttribution();
    }});
    observer.observe(document.body, {{ childList: true, subtree: true }});
  }});
</script>
"""

PAGES = [
    ('/', 'index.html'),
    ('/builds/', 'builds/index.html'),
    ('/builds/fa001/', 'builds/fa001/index.html'),
    ('/builds/fa002/', 'builds/fa002/index.html'),
    ('/builds/fa005/', 'builds/fa005/index.html'),
    ('/builds/fa006/', 'builds/fa006/index.html'),
    ('/builds/fa007/', 'builds/fa007/index.html'),
    ('/builds/fa008/', 'builds/fa008/index.html'),
    ('/builds/fa009/', 'builds/fa009/index.html'),
    ('/stock/', 'stock/index.html'),
    ('/stock/fa003/', 'stock/fa003/index.html'),
    ('/contact/', 'contact/index.html'),
    ('/cookies/', 'cookies/index.html'),
    ('/privacy/', 'privacy/index.html'),
    ('/terms/', 'terms/index.html')
]

for route, rel_path in PAGES:
    src_file = os.path.join(SRC_DIR, rel_path)
    dest_file = os.path.join(DEST_DIR, rel_path)
    if not os.path.exists(src_file):
        print(f"Skipping {src_file}, not found")
        continue

    with open(src_file, 'r', encoding='utf-8') as f:
        html = f.read()

    # Wire subpath prefix /aurelius-atelier/
    html = re.sub(r'href="/_next/', f'href="{BASE_PATH}/_next/', html)
    html = re.sub(r'src="/_next/', f'src="{BASE_PATH}/_next/', html)
    html = re.sub(r'src="/ActiveFrame\.js"', f'src="{BASE_PATH}/ActiveFrame.js"', html)
    html = re.sub(r'href="/favicon\.ico"', f'href="{BASE_PATH}/favicon.ico"', html)
    html = re.sub(r'href="/icon0\.svg', f'href="{BASE_PATH}/icon0.svg', html)
    html = re.sub(r'href="/apple-icon\.png', f'href="{BASE_PATH}/apple-icon.png', html)
    html = re.sub(r'href="/manifest\.json"', f'href="{BASE_PATH}/manifest.json"', html)

    # Internal page routing links
    html = re.sub(r'href="/(builds|stock|contact|cookies|privacy|terms)/"', rf'href="{BASE_PATH}/\1/"', html)
    html = re.sub(r'href="/(builds|stock)/([^"]+)/"', rf'href="{BASE_PATH}/\1/\2/"', html)
    html = re.sub(r'href="/"', f'href="{BASE_PATH}/"', html)

    # Brand updates: Forge -> Vanguard
    html = re.sub(r'\bForge Automotive\b', 'Vanguard Automotive', html)
    html = re.sub(r'\bFORGE AUTOMOTIVE\b', 'VANGUARD AUTOMOTIVE', html)
    html = html.replace('Forge home', 'Vanguard home')
    html = html.replace('Welcome to Forge Automotive', 'Welcome to Vanguard')
    html = html.replace('Forge Automotive Limited', 'Vanguard Automotive Limited')
    html = html.replace('© 2026 Forge', 'COPYRIGHT © 2026 VANGUARD')
    html = html.replace('© 2024 Forge', 'COPYRIGHT © 2026 VANGUARD')
    html = html.replace('© 2025 Forge', 'COPYRIGHT © 2026 VANGUARD')

    # Header Logo Replacement
    vanguard_logo = f'''<a aria-label="Vanguard home" class="sc-cf9722b1-1 glWlYP" href="{BASE_PATH}/"><svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-e576e939-0 gBefHe logo"><g fill="#ffffff"><path d="M60 2L54 18H57.5L60 11L62.5 18H66L60 2Z"/><text x="60" y="27" font-family="sans-serif" font-size="8" font-weight="700" letter-spacing="0.35em" text-anchor="middle" fill="#ffffff">VANGUARD</text></g></svg></a>'''
    html = re.sub(r'<a[^>]*aria-label="Vanguard home"[^>]*>.*?</a>', vanguard_logo, html, flags=re.DOTALL)

    # Update Title
    html = re.sub(r'<title>.*?</title>', '<title>For Those Who Refuse Ordinary | Vanguard</title>', html)

    # Inject Universal Vanguard Script
    if '</head>' in html:
        html = html.replace('</head>', f'{UNIVERSAL_INJECTION}\n</head>')

    # Ensure parent dir exists and save
    os.makedirs(os.path.dirname(dest_file), exist_ok=True)
    with open(dest_file, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Generated {rel_path} ({len(html)} bytes)")

# 404.html (for GitHub Pages SPA fallback)
with open(os.path.join(DEST_DIR, 'index.html'), 'r', encoding='utf-8') as f:
    h404 = f.read()
with open(os.path.join(DEST_DIR, '404.html'), 'w', encoding='utf-8') as f:
    f.write(h404)
print("Updated 404.html for GitHub Pages")

print("Vanguard Clean Master Build Complete!")
