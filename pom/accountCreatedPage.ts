import { Page, Locator } from '@playwright/test';
import { takeScreenshot } from '../utils/screenshotHelper';

export class AccountCreatedPage {
  readonly page: Page;
  readonly accountCreatedTxt: Locator;
  readonly continueBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountCreatedTxt = page.locator('[data-qa=account-created]');
    this.continueBtn = page.locator('[data-qa=continue-button]');
  }

  async verifyAccountCreatedTxtIsVisible() {
    await this.accountCreatedTxt.waitFor();
    await this.accountCreatedTxt.isVisible();
    await takeScreenshot(this.page, '06 - Account Created');
  }
  async clickOnContinueBtn() {
    await this.continueBtn.click();
  }
}
