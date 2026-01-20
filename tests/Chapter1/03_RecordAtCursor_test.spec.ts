// Import playwright module
import { test, expect } from '@playwright/test';

// Write a test

test('My First Playwright TypeScript Test', async ({ page }) => {


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
  await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
  await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();
  await expect(page.getByLabel('#1 Playwright Tutorial Full').locator('#video-title')).toContainText('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial');
  await expect(page.locator('ytd-playlist-video-list-renderer')).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');
  await expect(page.locator('ytd-playlist-video-list-renderer')).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');
});