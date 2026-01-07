import { test, expect } from '@playwright/test';

test('Portfolio lädt korrekt', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Laurin Schmidt'); 
});
