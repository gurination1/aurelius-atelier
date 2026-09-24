import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            executable_path='/usr/bin/chromium',
            args=['--no-sandbox', '--disable-setuid-sandbox']
        )
        ctx = await browser.new_context(viewport={'width': 1920, 'height': 1080})
        page = await ctx.new_page()

        print("1. Loading replica...")
        await page.goto("http://127.0.0.1:5173/aurelius-atelier/", wait_until="domcontentloaded")
        await asyncio.sleep(2)
        await page.screenshot(path="/tmp/v2_01_preloader.png")

        print("2. Clicking ENTER...")
        btn = await page.wait_for_selector('button[aria-label="Enter Website"], aside button', timeout=10000)
        await btn.click()
        
        # Capture 1 second in (intro headlights flaring up)
        await asyncio.sleep(1.0)
        await page.screenshot(path="/tmp/v2_02_hero_headlights_flaring.png")

        # Capture 3.5 seconds in (intro settled on 3 cars)
        await asyncio.sleep(2.5)
        await page.screenshot(path="/tmp/v2_03_hero_settled.png")

        # Scroll to hero flythrough
        print("3. Scrubbing hero...")
        await page.evaluate("window.scrollTo(0, 1000)")
        await asyncio.sleep(0.8)
        await page.screenshot(path="/tmp/v2_04_hero_scrubbed_1000.png")

        # Scroll to brand quote & philosophy
        print("4. Philosophy section...")
        await page.evaluate("window.scrollTo(0, 2200)")
        await asyncio.sleep(0.8)
        await page.screenshot(path="/tmp/v2_05_brand_quote.png")

        await page.evaluate("window.scrollTo(0, 3800)")
        await asyncio.sleep(0.8)
        await page.screenshot(path="/tmp/v2_06_philosophy_card.png")

        # Scroll to Approach
        print("5. Approach section...")
        await page.evaluate("window.scrollTo(0, 6800)")
        await asyncio.sleep(0.8)
        await page.screenshot(path="/tmp/v2_07_approach.png")

        # Scroll to Services
        print("6. Services section...")
        await page.evaluate("window.scrollTo(0, 9500)")
        await asyncio.sleep(0.8)
        await page.screenshot(path="/tmp/v2_08_services_wheels.png")

        # Scroll to Footer
        print("7. Footer CTA...")
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await asyncio.sleep(1.0)
        await page.screenshot(path="/tmp/v2_09_footer_cta.png")

        print("Verification captures completed successfully!")
        await browser.close()

if __name__ == '__main__':
    asyncio.run(verify())
