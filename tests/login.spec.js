import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import dotenv from "dotenv";
dotenv.config();

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.PAGEURL);
});

test.describe("Test Login functionality", () => {
  const wrongUser =
    "Epic sadface: Username and password do not match any user in this service";

  const requireUser = "Epic sadface: Username is required";

  test("Test Login with invalid username and password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.logIn("A", "A");
    await loginPage.clickLoginButton();
    const actualtext = await loginPage.errorMessageText();
    expect(actualtext).toBe(wrongUser);
  });

  test("Test login with empty username and password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.clickLoginButton();
    const actualtext = await loginPage.errorMessageText();
    expect(actualtext).toBe(requireUser);
  });

  test("Test login with a valid user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    loginPage.logIn(process.env.USER, process.env.PASSWORD);
    await loginPage.clickLoginButton();
  });
});
