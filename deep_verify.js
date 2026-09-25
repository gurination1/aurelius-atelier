const puppeteer = require('/root/guri-v10-webjs/node_modules/puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://127.0.0.1:5173/aurelius-atelier';
const OUT_DIR = '/root/.gemini/antigravity-cli/brain/04dfd179-a154-4136-9b4a-f337aef1f880/final_audit/latest';

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/usr/bin/chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error' && !msg.text().includes('sanity.io')) {
      errors.push('[Console Error] ' + msg.text());
    }
  });
  page.on('pageerror', err => errors.push('[Page Error] ' + err.message));
  page.on('requestfailed', req => {
    if (!req.url().includes('sanity.io')) {
      errors.push('[Req Failed] ' + req.url());
    }
  });

  console.log('=== TEST 1: HOME PAGE PRELOADER & ENTER ===');
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });
  await page.waitForSelector('button[aria-label="Enter Website"]', { timeout: 10000 });
  await page.screenshot({ path: path.join(OUT_DIR, '01_vanguard_preloader_ready.png') });
  console.log('Preloader ready screenshot taken!');

  await page.click('button[aria-label="Enter Website"]');
  console.log('Clicked Enter!');
  await new Promise(r => setTimeout(r, 2500));

  console.log('=== TEST 2: HERO IGNITION & PERMANENT LOGO ===');
  const heroInfo = await page.evaluate(() => {
    const vScroll = document.querySelector('.hero-scroll-video');
    const vIntro = document.querySelector('.hero-intro-video');
    const logo = document.querySelector('header svg.logo, svg.sc-e576e939-0.logo');
    return {
      title: document.title,
      hasScrollVideo: !!vScroll,
      scrollSrc: vScroll?.src,
      hasIntroVideo: !!vIntro,
      introSrc: vIntro?.src,
      logoBg: logo ? window.getComputedStyle(logo).backgroundImage.slice(0, 60) : null
    };
  });
  console.log('Hero Status:', heroInfo);
  await page.screenshot({ path: path.join(OUT_DIR, '02_vanguard_hero_ignited.png') });

  console.log('=== TEST 3: LENIS SCROLL & VIDEO SCRUBBING ===');
  // Scroll down via wheel simulation
  await page.mouse.wheel({ deltaY: 800 });
  await new Promise(r => setTimeout(r, 1200));

  const scrubInfo = await page.evaluate(() => {
    const lenis = document.querySelector('.lenis');
    const vScroll = document.querySelector('.hero-scroll-video');
    const fill = document.getElementById('atelier-timeline-fill');
    return {
      lenisScrollTop: lenis ? lenis.scrollTop : null,
      videoCurrentTime: vScroll ? vScroll.currentTime : null,
      videoDuration: vScroll ? vScroll.duration : null,
      timelineWidth: fill ? fill.style.width : null
    };
  });
  console.log('Scrub Status after wheel:', scrubInfo);
  await page.screenshot({ path: path.join(OUT_DIR, '03_vanguard_hero_scrubbed.png') });

  console.log('=== TEST 4: MIDDLE BESPOKE CARS & SECTIONS ===');
  await page.evaluate(() => {
    const lenis = document.querySelector('.lenis');
    if (lenis) {
      lenis.scrollTop = 2200;
      lenis.dispatchEvent(new Event('scroll'));
    }
  });
  await new Promise(r => setTimeout(r, 1500));

  const middleInfo = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img')).map(i => i.src);
    return {
      totalImgs: imgs.length,
      bespokeImgs: imgs.filter(src => src.includes('/assets/cars/'))
    };
  });
  console.log('Middle bespoke images:', middleInfo);
  await page.screenshot({ path: path.join(OUT_DIR, '03_vanguard_middle_bespoke_cars.png') });

  console.log('=== TEST 5: DRAWER MENU AUDIT ===');
  const navBtn = await page.$('button[aria-label*="menu" i], button.nav, header button');
  if (navBtn) {
    await navBtn.click();
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(OUT_DIR, '04_vanguard_drawer_menu.png') });
    console.log('Drawer menu screenshot taken!');

    const menuCheck = await page.evaluate(() => {
      const menu = document.querySelector('#site-menu');
      return {
        hasMenu: !!menu,
        hasCopyright: !!menu?.innerText.includes('Copyright © 2026 Vanguard'),
        hasMadeByGurdharam: !!menu?.innerText.includes('Made by Gurdharam'),
        hasWRPD: !!menu?.innerText.includes('WRPD')
      };
    });
    console.log('Menu Audit Check:', menuCheck);
    // Close menu
    const closeBtn = await page.$('button[aria-label*="close" i], header button');
    if (closeBtn) await closeBtn.click();
    await new Promise(r => setTimeout(r, 1000));
  }

  console.log('=== TEST 6: SUBPAGES DIRECT ACCESS & ZERO ERRORS ===');
  const subroutes = [
    { name: 'builds', path: '/builds/' },
    { name: 'stock', path: '/stock/' },
    { name: 'contact', path: '/contact/' },
    { name: 'fa001', path: '/builds/fa001/' },
    { name: 'fa007', path: '/builds/fa007/' },
    { name: 'stock_fa003', path: '/stock/fa003/' }
  ];

  for (const r of subroutes) {
    console.log(`Auditing subpage: ${r.name} (${r.path}) ...`);
    await page.goto(`${BASE_URL}${r.path}`, { waitUntil: 'networkidle2' });
    await new Promise(res => setTimeout(res, 1200));

    const pageDetails = await page.evaluate(() => {
      const h1 = document.querySelector('h1')?.innerText;
      const imgs = Array.from(document.querySelectorAll('img')).map(i => ({
        src: i.src,
        loaded: i.complete && i.naturalWidth > 0
      }));
      return {
        title: document.title,
        h1,
        totalImages: imgs.length,
        brokenImages: imgs.filter(i => !i.loaded).map(i => i.src),
        isCrashed: h1 && h1.includes('Didn’t Load')
      };
    });

    console.log(`${r.name} Details:`, JSON.stringify(pageDetails, null, 2));
    await page.screenshot({ path: path.join(OUT_DIR, `05_vanguard_${r.name}.png`) });
  }

  console.log('\n=== COMPLETE AUDIT ERRORS LOGGED ===');
  console.log(errors);

  await browser.close();
  console.log('Deep Verification Completed Successfully!');
})();
