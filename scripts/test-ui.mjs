// Interaction + accessibility smoke test.
import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
page.on("pageerror", (e) => errors.push(String(e)));

await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });

const report = {};

// 1. skills accordion
const openPanelText = () =>
  page.locator('.service-panel[data-open="true"] h3').textContent();
report.skillsDefault = await openPanelText();

await page
  .getByRole("button", { name: "Data Analytics & Business Intelligence", exact: true })
  .click();
await page.waitForTimeout(700);
report.skillsAfterClick = await openPanelText();
report.skillsExpanded = await page
  .getByRole("button", { name: "Data Analytics & Business Intelligence", exact: true })
  .getAttribute("aria-expanded");

await page
  .getByRole("button", { name: "Close Data Analytics & Business Intelligence" })
  .click();
await page.waitForTimeout(700);
report.skillsAfterClose = await page
  .locator('.service-panel[data-open="true"]')
  .count();

// 2. work filters
const filterCounts = {};
for (const label of [
  "All",
  "Data & Business Intelligence",
  "Machine Learning & AI",
  "UI/UX & Product Design",
  "Web Development",
  "Information Systems",
]) {
  await page.getByRole("tab", { name: label, exact: true }).click();
  await page.waitForTimeout(350);
  filterCounts[label] = await page.locator(".work-card").count();
}
report.filterCounts = filterCounts;
await page.getByRole("tab", { name: "All", exact: true }).click();
await page.waitForTimeout(350);

// 3. links
report.cardLinks = await page.$$eval(".work-card", (cards) =>
  cards.map((card) => ({
    tag: card.tagName,
    title: card.querySelector(".work-title")?.textContent,
    href: card.getAttribute("href"),
    target: card.getAttribute("target"),
    rel: card.getAttribute("rel"),
  })),
);

report.heroLinks = await page.$$eval(".hero a", (links) =>
  links.map((a) => [a.textContent?.trim().slice(0, 30), a.getAttribute("href")]),
);

report.contactLinks = await page.$$eval("#contact a", (links) =>
  links.map((a) => [a.textContent?.trim().slice(0, 30), a.getAttribute("href")]),
);

report.idleSocials = await page.$$eval(
  ".pill-social--idle",
  (items) => items.map((el) => el.textContent?.trim()),
);

// 4. keyboard focus
await page.keyboard.press("Tab");
report.focused = await page.evaluate(() => {
  const el = document.activeElement;
  return {
    tag: el?.tagName,
    text: el?.textContent?.trim().slice(0, 30),
    outline: getComputedStyle(el).outlineStyle,
  };
});

// 5. footer year
report.year = await page.locator("footer").textContent();

// 6. small-screen overflow
await page.setViewportSize({ width: 320, height: 700 });
await page.waitForTimeout(400);
report.overflow320 = await page.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  clientWidth: document.documentElement.clientWidth,
}));

report.consoleErrors = errors;
console.log(JSON.stringify(report, null, 2));
await browser.close();
