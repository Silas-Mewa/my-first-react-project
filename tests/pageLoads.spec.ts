import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/' , {waitUntil: "commit"});

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("First Steps with React");
});

test('no network issues', async ({ page }) => {
  await page.goto('http://localhost:5173/', {waitUntil: "load", timeout: 10_000});
});