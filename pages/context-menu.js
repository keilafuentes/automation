const { expect } = require("@playwright/test");

exports.ContextMenu = class ContextMenu {
  constructor(page) {
    this.page = page;
    this.titleContext = page.locator("heading", {
      name: "Context Menu",
    });
    this.box = page.locator("#hot-spot");
  }

  async gotoContextMenuPage() {
    await this.page.goto("https://the-internet.herokuapp.com/context_menu");
  }

  async isTitleVisible() {
    const titlePage = this.titleContext;
    return await titlePage.isVisible();
  }

  async clickBox() {
    await this.page.click({ button: "right" });
  }
};
