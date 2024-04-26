import { test, expect } from "@playwright/test";
import { ContextMenu } from "../pages/context-menu";

test("Test ", async ({ page }) => {
  const contexMenu = new ContextMenu(page);
  await contexMenu.gotoContextMenuPage();
  await contexMenu.clickBox();
});
