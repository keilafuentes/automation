const { expect } = require("@playwright/test");

exports.AddCart = class AddCart {
  constructor(page) {
    this.page = page;
    this.item = page
      .locator('[data-test="inventory-item-name"]')
      .filter({ hasText: "Sauce Labs Backpack" });

    this.addButton = page.locator('[data-test="add-to-cart"]');
    this.descriptionText = page.locator('[data-test="inventory-item-desc"]');
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

  async isDescriptionVisible() {
    const descText = this.descriptionText;
    return await descText.isVisible();
  }
};
