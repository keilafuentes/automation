const { expect } = require("@playwright/test");

exports.AddCart = class AddCart {
  constructor(page) {
    this.page = page;
    this.item = page.locator('[data-test="item-4-title-link"]');
    this.addButton = page.locator('[data-test="add-to-cart"]');
  }

  async selectItem() {
    const item = this.item;
    await item.click();
  }

  async goToInventoryPage() {
    await this.page.goto("https://www.saucedemo.com/inventory.html");
  }

  async addItemCart() {
    const addBtn = this.addButton;
    await addBtn.click();
  }
};
