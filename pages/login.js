const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginBtn = page.locator('[data-test="login-button"]');
    this.errorText = page.locator('[data-test="error"]');
  }

  async fillUsername(username) {
    const usernameInputField = this.usernameInput;
    await usernameInputField.fill(username);
  }

  async fillPassword(password) {
    const passwordInputField = this.passwordInput;
    await passwordInputField.fill(password);
  }
  async logIn(username, password) {
    await this.fillUsername(username);
    await this.fillPassword(password);
  }
  async clickLoginButton() {
    const submitButton = this.loginBtn;
    await submitButton.click();
  }
  async isErrorMessageVisible() {
    const errorMessage = this.errorText;
    return await errorMessage.isVisible();
  }

  async errorMessageText() {
    const errorMessage = this.errorText;
    return await errorMessage.textContent();
  }

  async goToLoginPage() {
    await this.page.goto("https://www.saucedemo.com/");
  }
};
