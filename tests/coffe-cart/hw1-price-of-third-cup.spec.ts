import { test, expect } from '@playwright/test';

test('V002 Price the same if you skip sale', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Cafe_Latte"]').click();
  await page.locator('[data-test="Espresso_Con Panna"]').click();
  await page.locator('[data-test="Cafe_Breve"]').click();
  await page.getByRole('button', { name: 'Nah, I\'ll skip.' }).click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $45.00');
});