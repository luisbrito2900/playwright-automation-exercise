import { Page, Locator, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/screenshotHelper';

export class TopNavigationBar {
  readonly page: Page;
  readonly homeBtn: Locator;
  readonly productsBtn: Locator;
  readonly cartBtn: Locator;
  readonly signupLoginBtn: Locator;
  readonly loggedInAsUserTxt: Locator;
  readonly deleteAccountBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeBtn = page.getByText('Home', { exact: true });
    this.productsBtn = page.locator('a[href="/products"]');
    this.cartBtn = page.locator('a[href="/view_cart"]').first();
    this.signupLoginBtn = page.getByText('Signup / Login');
    this.loggedInAsUserTxt = page.locator('text=/Logged in as .*/');
    this.deleteAccountBtn = page.locator('a[href="/delete_account"]');
  }
  async clickOnHomeBtn() {
    await this.homeBtn.click();
  }
  async clickOnProductsBtn() {
    await this.productsBtn.click();
  }
  async clickOnCartBtn() {
    await this.cartBtn.click();
  }
  async clickOnSignupLoginBtn() {
    await this.signupLoginBtn.click();
  }
  async verifyLoggedInAsUserTxtIsVisible(name: string) {
    await expect(this.loggedInAsUserTxt).toBeVisible();
    await expect(this.loggedInAsUserTxt).toHaveText(`Logged in as ${name}`);
    await takeScreenshot(this.page, '07 - Logged In as User');
  }
  async clickOnDeleteAccountBtn() {
    await this.deleteAccountBtn.click();
  }
}
