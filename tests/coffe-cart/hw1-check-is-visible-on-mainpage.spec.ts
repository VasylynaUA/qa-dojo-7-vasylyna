import { test, expect } from '@playwright/test';

test('V004 Check is visible when you hover over checkout', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="checkout"]').hover();
  await expect(page.getByRole('list').filter({ hasText: 'Espresso Macchiato x 1+-' })).toBeVisible();
});