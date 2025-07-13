import { Page, Locator, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/screenshotHelper';

export class LoginPage {
  readonly page: Page;
  readonly newUserSignupHeading: Locator;
  readonly nameField: Locator;
  readonly signUpEmailField: Locator;
  readonly signUpButton: Locator;
  readonly loginBtn: Locator;
  readonly passwordField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newUserSignupHeading = page.getByText('New User Signup!');
    this.nameField = page.locator('[data-qa="signup-name"]');
    this.signUpEmailField = page.locator('[data-qa="signup-email"]');
    this.signUpButton = page.locator('[data-qa="signup-button"]');
  }
  async verifySignUpHeaderIsVisible() {
    await expect(this.newUserSignupHeading).toBeVisible();
    await takeScreenshot(this.page, '02 - Signup/Login Page');
  }
  async enterName(name: string) {
    await this.nameField.fill(name);
  }
  async enterSignUpEmail(email: string) {
    await this.signUpEmailField.fill(email);
    await takeScreenshot(this.page, '03 - Signup Form Filled');
  }
  async clickOnSignUpBtn() {
    await this.signUpButton.click();
  }
}
