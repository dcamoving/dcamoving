import { test, expect } from '@playwright/test';

test.describe('Navigation and Mobile Menu', () => {
  test('desktop navigation links should be visible and functional', async ({ page, isMobile }) => {
    if (isMobile) return;
    await page.goto('/');

    const nav = page.locator('.header__nav');
    await expect(nav).toBeVisible();

    // Verify all desktop links are present
    const links = ['Services', 'Areas', 'Reviews', 'About', 'White-Glove & Estates', 'Contact'];
    for (const linkText of links) {
      await expect(nav.locator(`text=${linkText}`)).toBeVisible();
    }
  });

  test('mobile hamburger menu should open and close correctly', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const hamburger = page.locator('button.hamburger');
    const mobileNav = page.locator('#mobile-nav');

    // Wait for the hamburger to be interactable
    await expect(hamburger).toBeVisible();

    // Initially, the mobile nav should not be "is-open"
    await expect(mobileNav).not.toHaveClass(/is-open/);

    // Click hamburger to open
    await hamburger.click();
    await expect(mobileNav).toHaveClass(/is-open/);
    await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');

    // Click a link inside mobile nav to test closing
    await mobileNav.locator('text=Services').click();

    // Menu should close
    await expect(mobileNav).not.toHaveClass(/is-open/);
    await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
  });

  test('mobile bottom bar should be visible on mobile devices', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const bottomBar = page.locator('.mobile-bottom-bar');
    await expect(bottomBar).toBeVisible();
    await expect(bottomBar.locator('text=Call Now')).toBeVisible();
    await expect(bottomBar.locator('text=Free Estimate')).toBeVisible();
  });
});
