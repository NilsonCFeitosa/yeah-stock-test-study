import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/sign-up');

  
  await expect(page.getByText("SingUp")).toBeVisible;
});
