import { test, expect } from '@playwright/test';

test('Booksy home page loads', async ({ page }) => {
  await page.goto('/en-pl/');
  await expect(page).toHaveTitle(/booksy/i);
});