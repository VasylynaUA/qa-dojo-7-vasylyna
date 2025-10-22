import { test, expect } from '@playwright/test';

test('V001 I can sand payment info with empty cart', async ({ page }) => {
  // Recording...
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('textbox', { name: 'Name' }).fill('lola');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('prim@ht.co');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('button', { name: 'Thanks for your purchase.' })).toBeHidden({ timeout: 1000 });
});
