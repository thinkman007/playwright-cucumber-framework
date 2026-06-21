const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {

    this.browser = await chromium.launch({
        headless: true
    });

    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();
});

// After(async function () {

//     await this.browser.close();
// });


After(async function (scenario) {

    if (scenario.result.status === 'FAILED' && this.page) {

        const screenshot = await this.page.screenshot({
            path: `reports/screenshots/${Date.now()}.png`
        });

        this.attach(screenshot, 'image/png');
    }

    if (this.browser) {
        await this.browser.close();
    }
});