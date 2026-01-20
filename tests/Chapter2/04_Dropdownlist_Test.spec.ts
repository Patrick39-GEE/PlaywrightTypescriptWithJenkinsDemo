// Import playwright module
import { test, expect } from '@playwright/test';

// Write a test

test('Handling Dropdwon list in playwright', async ({ page }) => {


  // Go to URL 
  await page.goto('https://www.facebook.com/');
  await page.getByRole('button', { name: 'Create new account' }).click();

//   Select value from dropdown
    await page.getByLabel('month').selectOption('6');

// Select dropwown by visible text
     await page.getByLabel('month').selectOption({ label: 'Aug' });
     await page.getByLabel('day').selectOption({ label: '15' });
     await page.getByLabel('year').selectOption({ label: '1986' }); 
     await page.getByRole('radio', { name: 'Custom', exact: true }).click();
     await page.getByLabel('Mobile number or email address').fill('pjeribe@yahoo.com');

// validate the selected option

    await expect(page.locator('#month > option')).toHaveText(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);



});