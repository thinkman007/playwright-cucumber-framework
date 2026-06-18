class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.loginBtn = page.locator("#login");
    }

    async goto() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async login(user, pass) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }
}

module.exports = LoginPage;