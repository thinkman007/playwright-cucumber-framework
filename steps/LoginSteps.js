const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/Loginpage');
const assert = require('assert');
const {expect} = require('@playwright/test');

let loginPage;

Given('User navigates to login page', async function () {

    loginPage = new LoginPage(this.page);

    await loginPage.goto();
});

When('User enters valid username and password', async function () {

    await loginPage.login(
        "shubablughule@gmail.com",
        "Password@123"
    );
});



Then('User should be logged in successfully', async function () {

    const title = await this.page.title();
    console.log("Page title is: " + title);

    assert(title.length > 0);

    await expect(
        this.page.getByText("Automation Practice")
    ).toBeVisible();

    await this.page.waitForTimeout(3000);

});