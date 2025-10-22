import {test, expect} from '@playwright/test';

test('V001 I can sand payment info with empty cart', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('textbox', { name: 'Name' }).fill('lola');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('prim@ht.co');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('button', { name: 'Thanks for your purchase.' })).toBeHidden({ timeout: 1000 });
});

test('V002 Price the same if you skip sale', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Cafe_Latte"]').click();
  await page.locator('[data-test="Espresso_Con Panna"]').click();
  await page.locator('[data-test="Cafe_Breve"]').click();
  await page.getByRole('button', { name: 'Nah, I\'ll skip.' }).click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $45.00');
});

test('V003 You cant add discounted drink from cart without buying two more drinks', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.getByRole('button', { name: 'Yes, of course!' }).click();
  await expect(page.getByRole('button', { name: 'Add one (Discounted) Mocha' })).toBeDisabled();
});

test('V004 Check is visible when you hover over checkout', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="checkout"]').hover();
  await expect(page.getByRole('list').filter({ hasText: 'Espresso Macchiato x 1+-' })).toBeVisible();
});

test('V005 Total is correct after customer remove one drink', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Americano"]').click();
  await page.locator('[data-test="Flat_White"]').click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await page.getByRole('button', { name: 'Remove all Americano' }).click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $18.00');
});