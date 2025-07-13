import { Page, expect } from '@playwright/test';
import { takeScreenshot } from './screenshotHelper';

export async function goToUrl(page: Page) {
  await page.goto('/');
  const items = page.locator('.product-image-wrapper');
  await expect(items.first()).toBeVisible();
  await takeScreenshot(page, '01 - Home Page Loaded');
}
