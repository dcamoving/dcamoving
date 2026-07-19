import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  // Basic sanity check for the homepage
  await expect(page).toHaveTitle(/DCA Moving/i);
});
