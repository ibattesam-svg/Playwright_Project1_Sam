import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11'],
});

test('test', async ({ page }) => {
  await page.goto('https://m.facebook.com/');
  await page.getByText('Mobile number or email address').first().click();
  await page.goto('https://m.facebook.com/reg/#');
  await page.getByRole('textbox', { name: 'First name' }).fill('Sam');
});