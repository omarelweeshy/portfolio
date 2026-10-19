import { expect, test } from "@playwright/test";
import { profile, projects } from "../src/lib/content";

test.describe("home page", () => {
  test("renders every section without console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => msg.type() === "error" && errors.push(msg.text()));
    page.on("pageerror", (err) => errors.push(err.message));

    const res = await page.goto("/");
    expect(res?.status()).toBe(200);
    await expect(page).toHaveTitle(/Omar Ashraf/);

    for (const id of ["work", "services", "about", "contact"]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
    expect(errors).toEqual([]);
  });

  test("lists every project with a working source link", async ({ page }) => {
    await page.goto("/");
    for (const p of projects) {
      const card = page.locator(`article.project-${p.slug}`);
      await expect(card.getByRole("heading", { name: p.name })).toBeAttached();
      await expect(card.locator(`a[href="${p.repo}"]`).first()).toBeAttached();
      if (p.demo) await expect(card.locator(`a[href="${p.demo}"]`).first()).toBeAttached();
    }
  });

  test("labels generated art as illustration", async ({ page }) => {
    await page.goto("/");
    for (const p of projects.filter((p) => p.visual !== "image")) {
      await expect(page.locator(`article.project-${p.slug} .art-tag`)).toHaveText("Illustration");
    }
  });

  test("exposes contact details", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(`a[href="mailto:${profile.email}"]`).first()).toBeAttached();
  });

  test("has no horizontal page scroll", async ({ page }) => {
    await page.goto("/");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });

  test("skip link moves focus to main content", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  });
});

test("unlisted concept demos are kept out of search", async ({ request }) => {
  // Any path under /demos gets the header, even a missing one, so this does not depend on which demos exist.
  const res = await request.get("/demos/");
  expect(res.headers()["x-robots-tag"]).toBe("noindex, nofollow");
});

test("unknown routes return 404", async ({ request }) => {
  const res = await request.get("/this-page-does-not-exist");
  expect(res.status()).toBe(404);
});
