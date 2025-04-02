const { test,expect } = require('@playwright/test');
const { assert } = require('console');

test('clickOnSlider',async ({page}) =>{

await page.goto("http://www.automationpractice.pl/index.php");
const slider = page.locator('#homepage-slider');
await slider.click();

})

test('validateImage',async ({page}) => {

await page.goto("http://www.automationpractice.pl/index.php");
const slider2 = page.locator('img[alt="sample-2"]');
await expect(slider2).toHaveAttribute("src","http://www.automationpractice.pl/modules/homeslider/images/sample-2.jpg");


})

