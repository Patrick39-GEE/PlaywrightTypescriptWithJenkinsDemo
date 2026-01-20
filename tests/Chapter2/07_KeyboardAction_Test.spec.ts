// Import playwright module
import { test, expect } from '@playwright/test';

// Write a test

 test('Keyboard Action in playwright', async ({ page }) => {


    // Go to URL 
    await page.goto('https://www.google.com/');
// Keyboard actions
//     await page.getByLabel('Search', { exact: true }).fill('Playwright by Testers Talk');
//     await page.getByLabel('Search', { exact: true }).click();
//     await page.getByLabel('Search', { exact: true }).press('Enter');

// // selecting & deleting from keyboard
//     await page.getByLabel('Search', { exact: true }).click();
//     await page.keyboard.press('Meta+A');
//     await page.keyboard.press('Delete');

// Pressing Tab key
    await page.getByLabel('Search', { exact: true }).fill('Playwright Tutorial');
    await page.getByLabel('Search', { exact: true }).click();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');





});