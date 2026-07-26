import { test, expect } from '@playwright/test';

test('selector demo', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/")
  await page.waitForTimeout(2000);
  //await page.pause();

  //Using any Obj property
  await page.locator('[id="user-name"]').click();
  await page.locator('[id="user-name"]').fill('standard_user');
  await page.locator('[id="password"]').click();
  await page.locator('[id="password"]').fill('secret_sauce');
  //await page.locator('[id="login-button"]').click();

  //using CSS selector
  await page.locator('#user-name').first().click();
  //Using xpath selector
  await page.locator('//input[@id="user-name"]').click();
  //using text selector
  await page.getByText('Login').click();
});