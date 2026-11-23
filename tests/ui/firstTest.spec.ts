import { test, expect } from '@playwright/test';

test('Verify Playwright Website', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);
});