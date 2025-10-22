import { test, expect } from '@playwright/test';

test('V005 Total is correct after customer remove one drink', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Americano"]').click();
  await page.locator('[data-test="Flat_White"]').click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await page.getByRole('button', { name: 'Remove all Americano' }).click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $18.00');
});