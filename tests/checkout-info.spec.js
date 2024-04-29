import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { CheckoutInfo } from "../pages/checkout-info";
import dotenv from "dotenv";
dotenv.config();

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  const checkoutPage = new CheckoutInfo(page);
  await loginPage.goToLoginPage();
  await loginPage.logIn(process.env.USER, process.env.PASSWORD);
  await loginPage.clickLoginButton();
  await checkoutPage.clickCart();
  await checkoutPage.clickCheckoutBtn();
});

test.describe("Checkout information form", () => {
  const requiredName = "Error: First Name is required";

  test("Test checkout info without name", async ({ page }) => {
    const checkoutPage = new CheckoutInfo(page);
    await checkoutPage.enterLastName(process.env.LASTNAME);
    await checkoutPage.enterPostal(process.env.POSTALCODE);
    await checkoutPage.clickContinue();
    const actualtext = await checkoutPage.errorMessageText();
    expect(actualtext).toBe(requiredName);
  });

  test("Test succesfull checkout form", async ({ page }) => {
    const checkoutPage = new CheckoutInfo(page);
    await checkoutPage.enterName(process.env.NAME);
    await checkoutPage.enterPostal(process.env.LASTNAME);
    await checkoutPage.enterPostal(process.env.POSTALCODE);
    await checkoutPage.clickContinue();
  });
});
