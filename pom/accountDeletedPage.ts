import { Page, Locator } from '@playwright/test';
import { takeScreenshot } from '../utils/screenshotHelper';

export class AccountDeletedPage {
  readonly page: Page;
  readonly accountDeletedTxt: Locator;
  readonly continueBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountDeletedTxt = page.locator('[data-qa=account-deleted]');
    this.continueBtn = page.locator('[data-qa=continue-button]');
  }
  async verifyAccountDeletedTxtIsVisible() {
    await this.accountDeletedTxt.waitFor();
    await this.accountDeletedTxt.isVisible();
    await takeScreenshot(this.page, '08 - Account Deleted');
  }
  async clickOnContinueBtn() {
    await this.continueBtn.click();
  }
}
