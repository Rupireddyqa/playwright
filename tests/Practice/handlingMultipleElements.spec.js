
import { test, expect } from '@playwright/test';

test('multipleElements', async ({ page }) => {

await page.goto("http://www.automationpractice.pl/index.php")

// when used this element, we have 4 matching elements
await page.locator(".sf-with-ul").first().click(); // clicking on first element by using as first()

await page.locator(".sf-with-ul").last().click(); // clicking on last element by using as Last() in list of elements.

await page.locator(".sf-with-ul").nth(3).click();
 // here i am tapping on middle one. like 2 or 3. 

})

