// Import playwright module
import { test, expect } from '@playwright/test';

// Write a test

test('My First Playwright TypeScript Test', async ({ page }) => {


  // Go to URL 
  await page.goto('https://jqueryui.com/droppable/');

// Drag and Drop element
    const frame =page.frameLocator('.demo-frame');
    const dragElement = frame.locator('#draggable');
    const dropElement = frame.locator('#droppable');

    await dragElement.dragTo(dropElement);



});