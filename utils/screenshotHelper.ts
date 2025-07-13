import { Page, test } from '@playwright/test';

/**
 * Takes a screenshot and attaches it to the Playwright report.
 * @param page - Playwright's Page object
 * @param name - A descriptive name for the screenshot
 */
export async function takeScreenshot(page: Page, name: string) {
  const screenshot = await page.screenshot();
  await test.info().attach(name, {
    body: screenshot,
    contentType: 'image/png',
  });
}
