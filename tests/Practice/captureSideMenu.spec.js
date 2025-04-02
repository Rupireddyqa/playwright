const { test,expect } = require('@playwright/test');
const { assert } = require('console');

// test.only('firstUiTest', async ({ page }) => { is a FUNCTION. Inside function, we are writing tests by calling different methods.
test('captureSideMenu', async ({ page }) => {
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   await page.getByPlaceholder('username').fill('Admin') // using attribute we are entering usernmae
   await page.locator('input[type="password"]').fill('admin123'); // using CSS we are entering password
   await page.locator('button[type="submit"]').click(); // using XPath, we are clicking on submit button
   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); // assertion for home page

   // using CSS, we are locating main element for side menu. 
   await page.locator("//ul[contains(@class, 'oxd-main-menu')]").waitFor(); 

  // here we are checking every item in side menu. this is under Li/a/span. 
  let sideMenu = await page.locator(".oxd-main-menu li a span").allTextContents();
  console.log(sideMenu);
  expect(sideMenu).toContain('Admin');

})

