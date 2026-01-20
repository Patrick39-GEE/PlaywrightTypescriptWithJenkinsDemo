// Import playwright module
import { test, expect } from '@playwright/test';

test.beforeAll(async () => {

    console.log('Running before all tests.....');
});

test.beforeEach(async () => {

    console.log('Running before each test.....');
});

test.afterEach(async () => {

    console.log('Running after each test.....');
});

test.afterAll(async () => {

    console.log('Running after all tests.....');
});

// Write a test

test('Test1', async ({ page }) => {

    console.log('Test1 excution started.....');


  // Go to URL 
  await page.goto('https://www.google.com/');

// Search with Keyword
  try {
    await page.getByRole('button', { name: /accept all|i agree|agree|accept cookies/i }).click({ timeout: 3000 });
  } catch (e) {
    // cookie banner not present; continue
  }
  const search = page.getByRole('combobox', { name: /search/i });
  await search.fill('playwright by testers talk');
  await search.press('Enter');
  const channelLink = page.getByRole('link', { name: /Playwright by Testers Talk/i }).first();
  await channelLink.click();

// Click on playlist
    const playlistLink = page.getByRole('link', { name: /#1 Playwright Tutorial Full/i }).first();
    await playlistLink.click();
  // Validate web page title
  const videoTitle = page.locator('#video-title').first();
  await expect(videoTitle).toContainText('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial');

});

test.skip('Test2', async ({ page }) => {

    console.log('Test2 excution started.....');


  // Go to URL 
  await page.goto('https://www.google.com/');

// Search with Keyword
  try {
    await page.getByRole('button', { name: /accept all|i agree|agree|accept cookies/i }).click({ timeout: 3000 });
  } catch (e) {
    // cookie banner not present; continue
  }
  const search = page.getByRole('combobox', { name: /search/i });
  await search.fill('playwright by testers talk');
  await search.press('Enter');
  const channelLink = page.getByRole('link', { name: /Playwright by Testers Talk/i }).first();
  await channelLink.click();

// Click on playlist
    const playlistLink = page.getByRole('link', { name: /#1 Playwright Tutorial Full/i }).first();
    await playlistLink.click();
  // Validate web page title
  const videoTitle = page.locator('#video-title').first();
  await expect(videoTitle).toContainText('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial');

});