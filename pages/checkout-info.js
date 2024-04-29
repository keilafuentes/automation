const { expect } = require("@playwright/test");

exports.CheckoutInfo = class CheckoutInfo {
  constructor(page) {
    this.page = page;
    this.cart = page.locator('[data-test="shopping-cart-link"]');
    this.checkoutBtn = page.locator('[data-test="checkout"]');
    this.nameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalInput = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
    this.errorText = page.locator('[data-test="error"]');
  }

  async clickCart() {
    const cartIcon = this.cart;
    await cartIcon.click();
  }
  async clickCheckoutBtn() {
    const checkoutButton = this.checkoutBtn;
    await checkoutButton.click();
  }

  async enterName(name) {
    const firstName = this.nameInput;
    await firstName.fill(name);
  }
  async enterLastName(lastNames) {
    const lastName = this.lastNameInput;
    await lastName.fill(lastNames);
  }

  async enterPostal(code) {
    const postalCode = this.postalInput;
    await postalCode.fill(code);
  }

  async clickContinue() {
    const continueButton = this.continueBtn;
    await continueButton.click();
  }
  async isErrorMessageVisible() {
    const errorMessage = this.errorText;
    return await errorMessage.isVisible();
  }

  async errorMessageText() {
    const errorMessage = this.errorText;
    return await errorMessage.textContent();
  }
};
