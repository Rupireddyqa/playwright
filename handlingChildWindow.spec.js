const {test,expect} = require ('@playwright/test');
const { assert } = require('console');

test('childWindow', async ({page}) =>{

// playwright will not detect different tab automatically. we need to use a seperate method for handling different tabs. 

await page.goto('')










})