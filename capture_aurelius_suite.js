const puppeteer = require('/root/guri-v10-webjs/node_modules/puppeteer');
const fs = require('fs');

(async () => {
  const auditDir = '/root/.gemini/antigravity-cli/brain/04dfd179-a154-4136-9b4a-f337aef1f880/aurelius_verified';
  fs.mkdirSync(auditDir, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--window-size=1920,1080']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('Loading http://127.0.0.1:5173/ ...');
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 2000));

  // Trigger Enter explicitly if present
  console.log('Triggering enter transition...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const enter = btns.find(b => b.textContent.trim().toUpperCase() === 'ENTER');
    if (enter) enter.click();
  });

  // Wait 4 seconds for preloader transition animation to fully complete
  await new Promise(r => setTimeout(r, 4500));

  // 1. Capture Hero with Header & Logo
  await page.screenshot({ path: `${auditDir}/01_aurelius_hero.png` });
  console.log('Captured 01_aurelius_hero.png');

  // 2. Open Menu Drawer
  console.log('Opening Menu Drawer...');
  await page.evaluate(() => {
    const btn = document.querySelector('button[aria-label="Toggle menu"]') || Array.from(document.querySelectorAll('button')).find(b => /NAVIGATE/i.test(b.innerText));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 2000));

  await page.screenshot({ path: `${auditDir}/02_aurelius_menu_drawer.png` });
  console.log('Captured 02_aurelius_menu_drawer.png');

  // Close Menu Drawer
  await page.evaluate(() => {
    const btn = document.querySelector('button[aria-label="Toggle menu"]') || Array.from(document.querySelectorAll('button')).find(b => /CLOSE/i.test(b.innerText));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 1500));

  // 3. Scroll to Philosophy Section
  await page.evaluate(() => window.scrollTo(0, 3600));
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: `${auditDir}/03_aurelius_philosophy.png` });
  console.log('Captured 03_aurelius_philosophy.png');

  // 4. Scroll to True Footer & CTA
  await page.evaluate(() => {
    const footer = document.querySelector('footer');
    if (footer) footer.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo(0, document.body.scrollHeight);
  });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: `${auditDir}/04_aurelius_footer.png` });
  console.log('Captured 04_aurelius_footer.png');

  await browser.close();
  console.log('All Aurelius screenshots captured successfully.');
})();
