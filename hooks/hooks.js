const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {

    this.browser = await chromium.launch({
        headless: false
    });

    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();
});

// After(async function () {

//     await this.browser.close();
// });


After(async function (scenario) {

    if (scenario.result.status === 'FAILED') {

        const screenshot = await this.page.screenshot({
            path: `reports/screenshots/${Date.now()}.png`
        });

        this.attach(
            screenshot,
            'image/png'
        );
    }

    await this.browser.close();
});