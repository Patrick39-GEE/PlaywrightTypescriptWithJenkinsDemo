// Import playwright module
import { test, expect } from '@playwright/test';

// Write a test

test('My First Playwright TypeScript Test', async ({ page }) => {


  // Go to URL 
  await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');

//   await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click({ button: 'left' });

//   mouse hover action
    // await page.getByLabel('search by voice').hover();

// Click after hover
    // await page.getByLabel('search by voice').click();

// double click action
     await page.getByLabel('search by voice').dblclick();








});