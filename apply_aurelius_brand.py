import os, re
from PIL import Image, ImageDraw

print('=== Applying Aurelius Atelier Brand Identity ===')

# 1. Update 3dca2icpnmf5w.js
p_js3 = '/root/forge-source/_next/static/chunks/3dca2icpnmf5w.js'
with open(p_js3, 'r') as f:
    js3 = f.read()

old_icon = 's=(0,t.jsx)("g",{className:"icon",children:[(0,t.jsx)("path",{d:"M39 21.5L25 3.5H32.5L39 12.8L45.5 3.5H53L39 21.5Z",fill:"#FFFFFF"}),(0,t.jsx)("path",{d:"M39 6.2L41.8 10.2L39 13.8L36.2 10.2L39 6.2Z",fill:"#C5A064"})]})'

new_icon = 's=(0,t.jsx)("g",{className:"icon",children:[(0,t.jsx)("path",{d:"M39 3L26 21.5H32L39 10Z",fill:"#FFFFFF"}),(0,t.jsx)("path",{d:"M39 3L52 21.5H46L39 10Z",fill:"rgba(255,255,255,0.85)"}),(0,t.jsx)("path",{d:"M39 8.5L42.5 13.5L39 18.5L35.5 13.5Z",fill:"#C5A064"}),(0,t.jsx)("path",{d:"M31.5 16.5H46.5V17.8H31.5Z",fill:"#FFFFFF",opacity:"0.9"})]})'

js3 = js3.replace(old_icon, new_icon)
js3 = js3.replace('children:"VANGUARD"', 'children:"AURELIUS"')
js3 = js3.replace('"VANGUARD"', '"AURELIUS"')
js3 = js3.replace('Vanguard Atelier', 'Aurelius Atelier')
js3 = js3.replace('vanguardatelier.co.uk', 'aureliusatelier.co.uk')

with open(p_js3, 'w') as f:
    f.write(js3)
print('Updated 3dca2icpnmf5w.js')

# 2. Update 1o6f75j2bh32_.js
p_js1 = '/root/forge-source/_next/static/chunks/1o6f75j2bh32_.js'
with open(p_js1, 'r') as f:
    js1 = f.read()

old_watermark = 'd:"M220 700L-50 150H70L220 480L370 150H490L220 700Z"'
new_watermark = 'd:"M220 80L-40 720H60L220 330L380 720H480L220 80ZM135 520H305V580H135Z"'

js1 = js1.replace(old_watermark, new_watermark)
js1 = js1.replace('children:"VANGUARD ATELIER"', 'children:"AURELIUS ATELIER"')
js1 = js1.replace('VANGUARD ATELIER', 'AURELIUS ATELIER')
js1 = js1.replace('Vanguard Atelier', 'Aurelius Atelier')
js1 = js1.replace('vanguardatelier.co.uk', 'aureliusatelier.co.uk')

with open(p_js1, 'w') as f:
    f.write(js1)
print('Updated 1o6f75j2bh32_.js')

# 3. Update index.html
p_html = '/root/forge-source/index.html'
with open(p_html, 'r') as f:
    html = f.read()

old_svg_chunk = """<g class="icon">
<path d="M39 21.5L25 3.5H32.5L39 12.8L45.5 3.5H53L39 21.5Z" fill="#FFFFFF"/>
<path d="M39 6.2L41.8 10.2L39 13.8L36.2 10.2L39 6.2Z" fill="#C5A064"/>
</g>"""

new_svg_chunk = """<g class="icon">
<path d="M39 3L26 21.5H32L39 10Z" fill="#FFFFFF"/>
<path d="M39 3L52 21.5H46L39 10Z" fill="rgba(255,255,255,0.85)"/>
<path d="M39 8.5L42.5 13.5L39 18.5L35.5 13.5Z" fill="#C5A064"/>
<path d="M31.5 16.5H46.5V17.8H31.5Z" fill="#FFFFFF" opacity="0.9"/>
</g>"""

html = html.replace(old_svg_chunk, new_svg_chunk)
html = html.replace('>VANGUARD</text>', '>AURELIUS</text>')
html = html.replace('VANGUARD ATELIER', 'AURELIUS ATELIER')
html = html.replace('Vanguard Atelier', 'Aurelius Atelier')
html = html.replace('Vanguard', 'Aurelius')
html = html.replace('VANGUARD', 'AURELIUS')
html = html.replace('vanguardatelier.co.uk', 'aureliusatelier.co.uk')
html = html.replace('vanguard-atelier', 'aurelius-atelier')

with open(p_html, 'w') as f:
    f.write(html)
print('Updated index.html')

# 4. Update terms.html & privacy.html
for p in ['/root/forge-source/privacy.html', '/root/forge-source/terms.html']:
    if os.path.exists(p):
        with open(p, 'r') as f:
            c = f.read()
        c = c.replace('Vanguard Atelier', 'Aurelius Atelier')
        c = c.replace('Vanguard', 'Aurelius')
        c = c.replace('vanguardatelier.co.uk', 'aureliusatelier.co.uk')
        with open(p, 'w') as f:
            f.write(c)
        print('Updated', p)

# 5. Generate high-res icons for Aurelius
icon_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#0A0A0A"/>
  <!-- Aurelius Crown Emblem -->
  <!-- Left Wing -->
  <path d="M50 12 L22 68 H35 L50 34 Z" fill="#FFFFFF"/>
  <!-- Right Wing -->
  <path d="M50 12 L78 68 H65 L50 34 Z" fill="#E5E5E5"/>
  <!-- Gold Facet Jewel -->
  <path d="M50 28 L57 41 L50 54 L43 41 Z" fill="#C5A064"/>
  <!-- Horizontal Crossbar Accent -->
  <path d="M34 50 H66 V54 H34 Z" fill="#FFFFFF" opacity="0.9"/>
  <!-- Bottom Baseline Pedestal -->
  <circle cx="50" cy="78" r="3.5" fill="#C5A064"/>
</svg>"""

with open('/root/forge-source/icon0.svg', 'w') as f:
    f.write(icon_svg)

def render_icon(size):
    img = Image.new('RGBA', (size, size), (10, 10, 10, 255))
    draw = ImageDraw.Draw(img)
    scale = size / 100.0
    
    # Left wing
    p_left = [(50*scale, 12*scale), (22*scale, 68*scale), (35*scale, 68*scale), (50*scale, 34*scale)]
    draw.polygon(p_left, fill=(255, 255, 255, 255))
    
    # Right wing
    p_right = [(50*scale, 12*scale), (78*scale, 68*scale), (65*scale, 68*scale), (50*scale, 34*scale)]
    draw.polygon(p_right, fill=(229, 229, 229, 255))
    
    # Crossbar
    draw.rectangle([34*scale, 50*scale, 66*scale, 54*scale], fill=(255, 255, 255, 230))
    
    # Gold Jewel
    p_gold = [(50*scale, 28*scale), (57*scale, 41*scale), (50*scale, 54*scale), (43*scale, 41*scale)]
    draw.polygon(p_gold, fill=(197, 160, 100, 255))
    
    # Gold Dot
    r = 3.5 * scale
    draw.ellipse([50*scale - r, 78*scale - r, 50*scale + r, 78*scale + r], fill=(197, 160, 100, 255))
    return img

render_icon(96).save('/root/forge-source/icon1.png', 'PNG')
render_icon(180).save('/root/forge-source/apple-icon.png', 'PNG')
render_icon(48).save('/root/forge-source/favicon.ico', 'ICO')

print('Rendered icon0.svg, icon1.png, apple-icon.png, favicon.ico')
print('=== Aurelius Atelier Brand Identity Applied Successfully ===')
