// Import playwright module
import { test, expect } from '@playwright/test';

// Write a test

test('My First Playwright TypeScript Test1',{tag:['@smokeTesting']}, async ({ page }) => {


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

test('My First Playwright TypeScript Test2', {tag:['@smokeTesting','@regressionTesting']},async ({ page }) => {


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

test('My First Playwright TypeScript Test3', {tag:['@regressionTesting']}, async ({ page }) => {


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