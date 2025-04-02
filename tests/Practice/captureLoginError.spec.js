const { test, expect } = require('@playwright/test');
const { assert } = require('console');

test('captureLoginError', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('username').fill('Adminy') // using attribute we are entering usernmae
    await page.locator('input[type="password"]').fill('admin1234'); // using CSS we are entering password
    await page.locator('button[type="submit"]').click(); // clicking on login button 

// Capturing the error message on login screen. using single element. 
let errorMessage = await page.locator("[role='alert'] p").textContent();

// Assertion for login error message
await expect(errorMessage).toMatch(/invalid/i);

// Another method to capture the error message

let errorMessage1 = page.locator("[role='alert'] p"); // Keep it as a Locator

await expect(errorMessage1).toHaveText(/invalid/i); // using locator, we should use toHaveText method for assertion. 

})

