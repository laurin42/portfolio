import { test, expect } from "@playwright/test";

test.describe("Portfolio E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Header loads after AnimationDone", async ({
    page,
  }) => {
    await expect(page.locator("h1")).toBeVisible();
    const header = page.locator("header");
    await expect(header).toBeVisible({ timeout: 15000 });
    await expect(page.locator("#smooth-wrapper")).toBeVisible();
  });

  test("Navigation: scrolls to sections are correctly interpreted", async ({
    page,
  }) => {
    const homeLabel = page.locator("span", { hasText: "Home" });
    
    await expect(homeLabel).toBeVisible({ timeout: 15000 });

    await page.locator("#home").scrollIntoViewIfNeeded();
    await page.locator("#stack").scrollIntoViewIfNeeded();
    await page.locator("#projects").scrollIntoViewIfNeeded();
    await page.locator("#experience").scrollIntoViewIfNeeded();
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.locator("#faq").scrollIntoViewIfNeeded();

    await expect(page.locator("#home")).toBeVisible({ timeout: 10000 });
    await expect(page.locator("#stack")).toBeVisible({ timeout: 10000 });
    await expect(page.locator("#projects")).toBeVisible({ timeout: 10000 });
    await expect(page.locator("#experience")).toBeVisible({ timeout: 10000 });
    await expect(page.locator("#contact")).toBeVisible({ timeout: 10000 });
    await expect(page.locator("#faq")).toBeVisible({ timeout: 10000 });


  });

  test("Responsiveness", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    await expect(page.locator("header")).toBeVisible({ timeout: 15000 });

    const experience = page.locator("#experience");
    await expect(experience).toBeAttached({ timeout: 15000 });
  });

test("Impressum", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  const impressumLink = page.locator("footer").getByRole("link", { name: /Impressum/i });
  await expect(impressumLink).toBeVisible();

  await impressumLink.click();
  
  await expect(page.locator("h1")).toBeVisible();
});

  test("Integrity: Section ID's", async ({ page }) => {
    const ids = ["home", "stack", "projects", "experience", "contact", "faq"];
    for (const id of ids) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });
});
