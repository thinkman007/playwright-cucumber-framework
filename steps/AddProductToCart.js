const { Given, When, Then } = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');

Then('user add a product to the cart', async function () {
    const page = this.page;
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body");
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles); 
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
    }

    await page.waitForTimeout(3000);

});