import { test, expect } from '@playwright/test';

test.describe('Progressive Quote Form', () => {
  test('should successfully complete the 3-step quote form on the homepage', async ({ page }) => {
    // Intercept the API call to avoid sending a real email during the test
    await page.route('/api/quote', async route => {
      const json = { message: 'Estimate request received successfully!' };
      await route.fulfill({ json, status: 200 });
    });

    await page.goto('/');
    const form = page.locator('.hero__form-wrapper');

    // Step 1: Details
    await page.screenshot({ path: 'screenshots/step1.png', fullPage: true });
    await form.locator('input[name="Move_From"]').fill('123 Test St, Toronto');
    await form.locator('input[name="Move_To"]').fill('456 New Home Ave, Vaughan');
    await form.locator('input[name="Move_Date"]').fill('2027-01-01');
    
    await form.locator('button:has-text("Continue")').click();

    // Step 2: Size
    // Wait for the step 2 container or options to be visible
    const sizeButton = form.locator('button:has-text("2 Bedrooms")');
    await sizeButton.waitFor({ state: 'visible' });
    await page.screenshot({ path: 'screenshots/step2.png', fullPage: true });
    await sizeButton.click();
    
    await form.locator('button:has-text("Continue")').click();

    // Step 3: Contact
    const phoneInput = form.locator('input[name="Phone"]');
    await phoneInput.waitFor({ state: 'visible' });
    // Expand the dropdown so we can visually check it
    await form.locator('select[name="Contact_Method"]').click();
    await page.screenshot({ path: 'screenshots/step3.png', fullPage: true });
    
    await form.locator('input[name="Name"]').fill('Test User');
    await form.locator('input[name="Phone"]').fill('(416) 555-0000');
    await form.locator('input[name="Email"]').fill('test@example.com');
    await form.locator('select[name="Contact_Method"]').selectOption('Email');

    // Submit the form
    await form.locator('button:has-text("Get My Guaranteed Quote")').click();

    // Verify Success State
    const successMessage = form.locator('h3:has-text("Request Sent!")');
    await successMessage.waitFor({ state: 'visible' });
    
    await expect(successMessage).toBeVisible();
  });
});
