import { test, expect } from '@playwright/test';

// Write a test

test('Assertions  in playwright', async ({ page }) => {


    // Go to URL 
    await page.goto('https://www.youtube.com/');

    // visible, editable, enabled, empty

    // await expect(page.locator('[name="search_query"]').first()).toBeVisible();
    // await expect(page.locator('[name="search_query"]').first()).toBeEditable();
    // await expect(page.locator('[name="search_query"]').first()).toBeEnabled();
    // await expect(page.locator('[name="search_query"]').first()).toBeEmpty();

    // Verify URL, title, text, count
    await page.locator('[name="search_query"]').first().click();
    await page.locator('[name="search_query"]').first().fill('Playwright Tutorial by Testers Talk');
    await page.locator('[name="search_query"]').first().press('Enter');
    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+Tutorial+by+Testers+Talk');
    await expect(page).toHaveTitle('Playwright Tutorial by Testers Talk - YouTube');
    await expect.soft(page.locator('ytd-video-renderer')).toHaveCount(24);

});