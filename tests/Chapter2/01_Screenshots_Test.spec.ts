// Import playwright module
import { test, expect } from '@playwright/test';

// Write a test

test('Capture screenshots in playwright', async ({ page }) => {


  // Go to URL 
  await page.goto('https://www.youtube.com/@testerstalk');

//   Element screenshot
   await page.locator('#page-header-container').screenshot({path:'tests/Chapter2/screenshots/element_screenshot.png'});

// page screenshot
    await page.screenshot({path:'tests/Chapter2/screenshots/page_screenshot2.png' });
// full page screenshot
    await page.screenshot({path:'tests/Chapter2/screenshots/full_page_screenshot3.png', fullPage: true});

});