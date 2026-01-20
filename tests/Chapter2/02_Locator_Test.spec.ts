// Import playwright module
import { test, expect } from '@playwright/test';

// Write a test

test('Locators in Playwright', async ({ page }) => {


  // Go to URL 
//   await page.goto('https://github.com/BakkappaN');
    //  await page.goto('https://www.youtube.com/@testerstalk');
        await page.goto('https://www.google.com/');

//   getByRole
    // await page.getByRole('link',{name:'sign in'}).click();

// GetByLabel
    // await page.getByLabel('Homepage',{exact:true}).first().click();

// GetByAltText
    // await page.getByAltText("View BakkappaN's full-sized avatar").click();

// GetByTestId
    // await page.getByTestId("overview").first().click();

// GetByText
    // await page.getByText("sign up").click();

// GetByPlaceholder, Xpath, CSS Selector
    // await page.getByPlaceholder('Search').fill('testers talk');

    // await page.locator('//input[@name="search_query"]').fill('testers talk');
    // await page.locator('input[name="search_query"]').first().fill('testers talk');

// GetByTitle
    await page.getByTitle('Search').fill('playwright by testers talk');





});