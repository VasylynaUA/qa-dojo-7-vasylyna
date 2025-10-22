import { test, expect } from '@playwright/test';

test('V003 You cant add discounted drink from cart without buying two more drinks', async ({ page }) => {
  // Recording...
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.getByRole('button', { name: 'Yes, of course!' }).click();
  await expect(page.getByRole('button', { name: 'Add one (Discounted) Mocha' })).toBeDisabled();
});