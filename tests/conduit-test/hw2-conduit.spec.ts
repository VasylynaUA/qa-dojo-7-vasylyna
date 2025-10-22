import { chromium, expect, Locator, test } from '@playwright/test';
import path from 'path';

const Username = 'dojo7Lyna5';
const Email = 't5@gmail.com';

//registretion on Conduit website

test('V006 Register new user', async ({page, baseURL}) => {
    await page.goto(''+'/register');
    await page.locator('[placeholder="Username"]').fill(Username);
    await page.locator('[placeholder="Email"]').fill(Email);
    await page.locator('[placeholder="Password"]').fill('Lyna12345');
    await page.locator('button:has-text("Sign up")').click();
    await page.waitForTimeout(2000);
    await page.screenshot({path: 'screenshots/V006_result1.png'});
    await expect(page.getByRole('link', { name: 'dojo7Lyna5' })).toBeVisible();
});

test('V008 Registration of already existing user with same email and username', async ({page, baseURL}) => {
    await page.goto(''+'/register');
    await page.locator('[placeholder="Username"]').fill(Username);
    await page.locator('[placeholder="Email"]').fill(Email);
    await page.locator('[placeholder="Password"]').fill('Lyna12345');
    await page.locator('button:has-text("Sign up")').click();
    await page.waitForTimeout(2000);
    await page.screenshot({path: 'screenshots/V008_result.png'});
    await expect(page.getByText('username is already taken')).toBeVisible();
    await expect(page.getByText('email is already taken')).toBeVisible();
});

test('V009 Link to login is working on registration page', async ({page, baseURL}) => {
    await page.goto(''+'/register');
    await page.getByRole('link', { name: 'Have an account?' }).click();
    await page.waitForTimeout(2000);
    expect(page.url()).toBe(baseURL + 'login');
});

//login on Conduit website

test('V007 Login existing user', async ({page, baseURL}) => {
    await page.goto(''+'/login');
    await page.locator('[placeholder="Email"]').fill('t@gmail.com');
    await page.locator('[placeholder="Password"]').fill('Lyna12345');
    await page.locator('button:has-text("Sign in")').click();
    await page.waitForTimeout(2000);
    await page.screenshot({path: 'screenshots/V007_result.png'});
    await expect(page.getByRole('link', { name: 'dojo7Lyna1' })).toBeVisible();
});

test('V010 Link to registration is working on login page', async ({page, baseURL}) => {
    await page.goto(''+'/login');
    await page.getByRole('link', { name: 'Need an account?' }).click();
    await page.waitForTimeout(2000);
    await expect(page.url()).toBe(baseURL + 'register');
});

test('V011 Login with credentials that has not been used', async ({page, baseURL}) => {
    await page.goto(''+'/login');
    await page.locator('[placeholder="Email"]').fill('t9@gmail');
    await page.locator('[placeholder="Password"]').fill('Lyna12345');
    await page.locator('button:has-text("Sign in")').click();
    await page.waitForTimeout(2000);
    await page.screenshot({path: 'screenshots/V011_result.png'});
    await expect(page.getByText('email or password is invalid')).toBeVisible();
});


