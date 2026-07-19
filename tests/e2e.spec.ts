import { test, expect } from '@playwright/test';

test.describe('DCA Moving E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('/');
  });

  test('Homepage loads and displays correct hero text', async ({ page }) => {
    // Verify title
    await expect(page).toHaveTitle(/DCA Moving/);
    
    // Verify Hero text
    const heroTitle = page.locator('h1.hero__title');
    await expect(heroTitle).toContainText("Toronto's Top-Rated Movers.");
  });

  test('Mobile Menu opens and closes', async ({ page, isMobile }) => {
    if (!isMobile) return; // Only run on mobile resolutions

    const hamburger = page.locator('.hamburger');
    const mobileNav = page.locator('#mobile-nav');

    // Initially hidden (display: none or not .is-open)
    await expect(mobileNav).not.toHaveClass(/is-open/);

    // Click hamburger to open
    await hamburger.click();
    await expect(mobileNav).toHaveClass(/is-open/);
    await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');

    // Click a link in mobile menu to close it
    await page.locator('#mobile-nav >> text=Services').click();
    await expect(mobileNav).not.toHaveClass(/is-open/);
    await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
  });

  test('FAQ Accordion expands on click', async ({ page }) => {
    // Scroll to FAQ
    const faqSection = page.locator('#faq');
    await faqSection.scrollIntoViewIfNeeded();

    const firstFaqBtn = page.locator('.faq-item__btn').first();
    const firstFaqAnswer = page.locator('.faq-item__answer').first();

    // Verify it's initially hidden
    await expect(firstFaqAnswer).toBeHidden();

    // Click to expand
    await firstFaqBtn.click();
    
    // Verify it becomes visible
    await expect(firstFaqAnswer).toBeVisible();

    // Click again to close
    await firstFaqBtn.click();
    await expect(firstFaqAnswer).toBeHidden();
  });

  test('Quote Form simulates successful submission', async ({ page }) => {
    // Scroll to quote form
    const quoteSection = page.locator('#contact');
    await quoteSection.scrollIntoViewIfNeeded();

    // Fill out form
    await page.locator('#q-name').fill('John Doe');
    await page.locator('#q-phone').fill('416-555-1234');
    await page.locator('#q-email').fill('john@example.com');
    await page.locator('#q-size').selectOption('2BR');
    
    // Submit form
    await page.locator('button[type="submit"]').click();

    // Check for "Sending..." state
    const submitBtn = page.locator('button[type="submit"]');
    await expect(submitBtn).toContainText('Sending...');

    // Check for success message (timeout of 2 seconds should cover the 1s delay)
    const successMsg = page.locator('text=Request Sent!');
    await expect(successMsg).toBeVisible({ timeout: 3000 });
  });

  test('JSON-LD Schema is injected in head', async ({ page }) => {
    // Check if the script tag with application/ld+json is present
    const schemaScript = page.locator('head script[type="application/ld+json"]');
    await expect(schemaScript).toHaveCount(1);
    
    const content = await schemaScript.textContent();
    expect(content).toContain('MovingCompany');
    expect(content).toContain('DCA Moving');
  });
});
