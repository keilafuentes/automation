import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { AddCart } from "../pages/add-cart";
import dotenv from "dotenv";
dotenv.config();

test("Add item to cart", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const addCart = new AddCart(page);
  loginPage.goToLoginPage();
  loginPage.logIn(process.env.USER, process.env.PASSWORD);
  await loginPage.clickLoginButton();
  await addCart.goToInventoryPage();
  await addCart.selectItem();
  await addCart.addItemCart();
});
