import { test, expect } from '@playwright/test';

test('new user menu shows up', async ({ page }) => {
  await page.goto('http://localhost:5173/', {waitUntil: "commit"});

  // Click the get started link.
  await page.getByRole('button', { name: 'New User' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'New Entry' })).toBeVisible();
});

test('adding a user', async ({ page }) => {
  await page.goto('http://localhost:5173/', {waitUntil: "commit"});
  await page.getByRole('button', { name: 'New User' }).click();
  await page.locator('#firstName').click();
  await page.locator('#firstName').fill('Hello');
  await page.locator('#lastName').click();
  await page.locator('#lastName').fill('World');
  const rows = page.getByRole('listitem');
  const count = await rows.count();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('listitem')).toHaveCount(count +1);
});

test('cancle adding a user', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'New User' }).click();
  await page.locator('#lastName').click();
  await page.locator('#lastName').fill('r');
  await page.locator('#firstName').click();
  await page.locator('#firstName').fill('e');
  await page.getByRole('button', { name: 'Cancel' }).click();
});