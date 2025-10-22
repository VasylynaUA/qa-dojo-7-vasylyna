import { test, expect } from '@playwright/test';

test('V001 User can fill inputs in Text Box page', async ({ page, baseURL }) => {
    await page.goto(baseURL + 'text-box');
    await page.locator('//input[@id="userName"]').fill('Lola');
    expect(await page.locator('//input[@id="userName"]').inputValue()).toBe('Lola');
    await page.locator('//input[@id="userEmail"]').fill('test@email.com');
    expect(await page.locator('//input[@id="userEmail"]').inputValue()).toBe('test@email.com');
    await page.locator('//textarea[@id="currentAddress"]').fill('Ukraine, Kyiv, 123 Main St');
    expect(await page.locator('//textarea[@id="currentAddress"]').inputValue()).toBe('Ukraine, Kyiv, 123 Main St');
    await page.locator('//textarea[@id="permanentAddress"]').fill('Ukraine, Kyiv, 456 Another St');
    expect(await page.locator('//textarea[@id="permanentAddress"]').inputValue()).toBe('Ukraine, Kyiv, 456 Another St');
});

test('V002 User can submit filled form on Text Box page', async ({ page, baseURL }) => {
    await page.goto(baseURL + 'text-box');
    await page.locator('//input[@id="userName"]').fill('Lola');
    expect(await page.locator('//input[@id="userName"]').inputValue()).toBe('Lola');
    await page.locator('//input[@id="userEmail"]').fill('test@email.com');
    expect(await page.locator('//input[@id="userEmail"]').inputValue()).toBe('test@email.com');
    await page.locator('//textarea[@id="currentAddress"]').fill('Ukraine, Kyiv, 123 Main St');
    expect(await page.locator('//textarea[@id="currentAddress"]').inputValue()).toBe('Ukraine, Kyiv, 123 Main St');
    await page.locator('//textarea[@id="permanentAddress"]').fill('Ukraine, Kyiv, 456 Another St');
    expect(await page.locator('//textarea[@id="permanentAddress"]').inputValue()).toBe('Ukraine, Kyiv, 456 Another St');
    await page.locator('//button[@id="submit"]').click();
    expect(await page.locator('//div[@id="output"]//p[@id="name"]').textContent()).toBe('Name:Lola');
    expect(await page.locator('//div[@id="output"]//p[@id="email"]').textContent()).toBe('Email:test@email.com');
    expect(await page.locator('//div[@id="output"]//p[@id="currentAddress"]').textContent()).toBe('Current Address :Ukraine, Kyiv, 123 Main St ');
    expect(await page.locator('//div[@id="output"]//p[@id="permanentAddress"]').textContent()).toBe('Permananet Address :Ukraine, Kyiv, 456 Another St');
});

test('V003 User can check all check boxes on Checkbox page', async ({ page, baseURL }) => {
    await page.goto(baseURL + 'checkbox');
    await page.locator('//div/ol/li/span/button').click(); //expand home
    await page.locator('//div/ol/li/ol/li[1]/span/button').click(); //expand desktop
    await page.locator('//div/ol/li/ol/li[2]/span/button').click(); //expand documents
    await page.locator('//div/ol/li/ol/li[3]/span/button').click(); //expand downloads
    await page.locator('//div/ol/li/ol/li[1]/ol/li[1]/span/label/span[1]').click(); //select notes
    await page.locator('//div/ol/li/ol/li[1]/ol/li[2]/span/label/span[1]').click(); //select commands
    await page.locator('//div/ol/li/ol/li[2]/ol/li[1]/span/label/span[1]').click(); //select WorkSpace
    await page.locator('//div/ol/li/ol/li[2]/ol/li[2]/span/label/span[1]').click(); //select Office
    await page.locator('//div/ol/li/ol/li[3]/ol/li[1]/span/label/span[1]').click(); //select Word File
    await page.locator('//div/ol/li/ol/li[3]/ol/li[2]/span/label/span[1]').click(); //select Excel File

    expect(await page.locator('//div[@id="result"]')).toContainText('notes');
});