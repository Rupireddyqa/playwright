const { test,expect } = require('@playwright/test');
const { assert } = require('console');

// test.only('firstUiTest', async ({ page }) => { is a FUNCTION. Inside function, we are writing tests by calling different methods.
test('login&logout', async ({ page }) => {
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

// testing login feature. page = paramiter. getByPlaceholder is a Method. 
   await page.getByPlaceholder('username').fill('Admin') // using attribute we are entering usernmae
   await page.locator('input[type="password"]').fill('admin123'); // using CSS we are entering password
   await page.locator('button[type="submit"]').click(); // using XPath, we are clicking on submit button
   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); // Adding assertion using url of homepage

// testing logout feature

   // Tapping on dropdown button. here i am using class. in playwright, we can use class using prefix as dot (.)
   await page.locator('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click();
   // before clicking we need to hover. for this, we need to use class name - icon. i.e .oxd-userdropdown-icon
   await page.locator('.oxd-userdropdown-icon').hover();
   // we have three other items in dropdown. Adding text as logout is helping in identifying. 
   await page.locator('.oxd-userdropdown-link', { hasText: 'Logout' }).click();
   // Adding assertion to check whether its landing on login page or not
   await expect(page).toHaveURL ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

});


