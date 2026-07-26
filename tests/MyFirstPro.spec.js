const {test, expect}=require('@playwright/test');
// require is used to import the Playwright module; we destructure `test` and `expect`
// Use the exported names from ./Demo/hello (lowercase)
const {hello, helloWorld}=require('./Demo/hello');

console.log(helloWorld());
console.log(hello());

test ('My first test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    
    await context.tracing.start(
        { screenshots: true, 
          snapshots: true }
    );

    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle(/A_Playwright/);

    await context.tracing.stop({ path: 'trace.zip' });
});

//goto is the url to visit the url
//async is used to make the function asynchronous, waiting to return the promise. It will wait till page is loaded