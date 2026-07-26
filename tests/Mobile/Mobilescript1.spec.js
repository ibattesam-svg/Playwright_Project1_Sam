import { test, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11'],
});

test('iphone 11 mobile facebook flow', async ({ page }) => {
  await page.goto('https://m.facebook.com/reg/#');
  await page.waitForSelector('input[name=firstname]', { timeout: 10000 });
  await page.locator('input[name=firstname]').fill('Sam');
});
