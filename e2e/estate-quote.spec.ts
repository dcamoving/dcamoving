import { test, expect } from '@playwright/test';

test.describe('Estate Consultation Form', () => {
  test('should successfully complete the estate consultation form on the white-glove page', async ({ page }) => {
    // Intercept the API call to avoid sending a real email during the test
    await page.route('/api/estate-quote', async route => {
      const json = { message: 'Estate consultation request received successfully!' };
      await route.fulfill({ json, status: 200 });
    });

    await page.goto('/white-glove');
    
    // Wait for the form to be visible
    const form = page.locator('form:has-text("Request a Private Consultation")');
    await form.waitFor({ state: 'visible' });

    // Take a screenshot of the initial state
    await page.screenshot({ path: 'screenshots/estate-form-initial.png' });

    // Fill in the form fields
    await form.locator('input[name="Name"]').fill('VIP Estate Client');
    await form.locator('input[name="Phone"]').fill('(416) 555-9999');
    await form.locator('input[name="Email"]').fill('vip@example.com');
    await form.locator('select[name="Nature_of_Relocation"]').selectOption('Fine Art / Antique Collection');
    await form.locator('input[name="Origin"]').fill('Rosedale, Toronto');
    await form.locator('input[name="Destination"]').fill('Bridle Path, Toronto');
    await form.locator('input[name="Target_Date"]').fill('Next Month');
    await form.locator('textarea[name="Additional_Context"]').fill('Needs custom crating for a grand piano and 3 paintings.');

    // Take a screenshot before submitting
    await page.screenshot({ path: 'screenshots/estate-form-filled.png' });

    // Submit the form
    await form.locator('button[type="submit"]').click();

    // Verify Success State
    const successMessage = page.locator('h3:has-text("Request Received")');
    await successMessage.waitFor({ state: 'visible', timeout: 5000 });
    
    await expect(successMessage).toBeVisible();
    await expect(page.locator('p:has-text("Our Dedicated Relocation Director has been notified")')).toBeVisible();

    // Take a screenshot of the success state
    await page.screenshot({ path: 'screenshots/estate-form-success.png' });
  });
});
