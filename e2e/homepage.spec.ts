import { test, expect } from '@playwright/test';

test.describe('Homepage Structural Integrity', () => {
  test('all core sections should render successfully', async ({ page }) => {
    await page.goto('/');

    // Check for the Hero section
    await expect(page.locator('.hero')).toBeVisible();

    // Check for TrustBar
    await expect(page.locator('.trust-bar')).toBeVisible();
    
    // Check for Services section
    await expect(page.locator('#services')).toBeVisible();

    // Check for Methodology section
    await expect(page.locator('.methodology')).toBeVisible();

    // Check for WhyUs section
    await expect(page.locator('.why')).toBeVisible();

    // Check for HowItWorks section
    await expect(page.locator('.how')).toBeVisible();

    // Check for Areas section
    await expect(page.locator('#areas')).toBeVisible();

    // Check for Reviews section
    await expect(page.locator('#reviews')).toBeVisible();

    // Check for About section
    await expect(page.locator('#about')).toBeVisible();

    // Check for FAQ section
    await expect(page.locator('#faq')).toBeVisible();

    // Check for Footer Contact section
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('bottom quote form should function exactly like the hero form', async ({ page }) => {
    await page.route('/api/quote', async route => {
      const json = { message: 'Estimate request received successfully!' };
      await route.fulfill({ json, status: 200 });
    });

    await page.goto('/');
    
    // Use the bottom form specifically
    const bottomForm = page.locator('#contact .quote__form-wrapper, #contact form').last();
    await bottomForm.scrollIntoViewIfNeeded();

    // Step 1
    await bottomForm.locator('input[name="Move_From"]').fill('123 Bottom St');
    await bottomForm.locator('input[name="Move_To"]').fill('456 Bottom Ave');
    await bottomForm.locator('input[name="Move_Date"]').fill('2027-02-02');
    await bottomForm.locator('button:has-text("Continue")').click();

    // Step 2
    const sizeButton = bottomForm.locator('button:has-text("Office")');
    await sizeButton.waitFor({ state: 'visible' });
    await sizeButton.click();
    await bottomForm.locator('button:has-text("Continue")').click();

    // Step 3
    const nameInput = bottomForm.locator('input[name="Name"]');
    await nameInput.waitFor({ state: 'visible' });
    await nameInput.fill('Bottom Tester');
    await bottomForm.locator('input[name="Phone"]').fill('(416) 555-1111');
    await bottomForm.locator('input[name="Email"]').fill('bottom@example.com');

    // Submit
    await bottomForm.locator('button:has-text("Request Estimate")').click();

    // Assert Success
    // The success message should appear within the #contact section
    const successMessage = page.locator('#contact h3:has-text("Request Sent!")');
    await successMessage.waitFor({ state: 'visible' });
    await expect(successMessage).toBeVisible();
  });
});
