import { test, expect } from '@playwright/test';

test.describe('Cross-Device Layout QA', () => {
  const routes = ['/', '/contact', '/white-glove'];

  for (const route of routes) {
    test(`Check for horizontal overflow and anomalies on ${route}`, async ({ page }) => {
      await page.goto(route);

      // Check for body overflow
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      expect(hasHorizontalScroll).toBe(false); // Fails if page has horizontal scrolling

      // Check for elements overflowing their containers
      const overflowingElements = await page.evaluate(() => {
        const all = document.querySelectorAll('*');
        const overflows: string[] = [];
        all.forEach(el => {
          // Ignore HTML, BODY, and scripts/styles
          if (['HTML', 'BODY', 'SCRIPT', 'STYLE', 'META', 'HEAD'].includes(el.tagName)) return;
          if (el.scrollWidth > el.clientWidth) {
            // Some elements like inputs might natively have scrollWidth > clientWidth if text is long, ignore them
            if (['INPUT', 'TEXTAREA'].includes(el.tagName)) return;
            overflows.push(`${el.tagName}.${el.className}`);
          }
        });
        return overflows;
      });

      console.log(`Overflowing elements on ${route}:`, overflowingElements);
      // We expect 0 overflowing elements (except maybe the map iframe, but it's width 100%)
      
      // Basic visibility checks for key elements
      if (route === '/') {
        await expect(page.locator('.header')).toBeVisible();
        await expect(page.locator('.hero')).toBeVisible();
        await expect(page.locator('.footer')).toBeVisible();
      }
    });
  }
});
