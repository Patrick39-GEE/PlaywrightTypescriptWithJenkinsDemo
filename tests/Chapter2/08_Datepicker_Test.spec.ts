import { test, expect } from '@playwright/test';

// Write a test

 test('Select date  in playwright', async ({ page }) => {


    // Go to URL 
    await page.goto('https://jqueryui.com/datepicker/');

    const iframe = page.frameLocator('[class="demo-frame"]');

    // Click on datepicker input field
    // await iframe.locator('[id="datepicker"]').fill('10/15/2026');

    //  Selecting dynamic date from datepicker calendar
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('.ui-datepicker').waitFor({ state: 'visible' });
    // await iframe.locator('[class="ui-state-default"]').first().click();

    // Selecting past date from datepicker calendar
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('[title="Prev"]').click();
    // await iframe.locator('text="20"').click()

     // Selecting future date from datepicker calendar
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('[title="Next"]').click();
    await iframe.locator('text="25"').click()










});