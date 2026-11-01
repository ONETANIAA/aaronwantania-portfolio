// Screenshot the running site at three widths.
// Usage: node scripts/shot.mjs [url] [outDir]
import { chromium } from "playwright";
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const url = process.argv[2] ?? "http://localhost:3100/";
const outDir = process.argv[3] ?? path.join(root, ".shots");
await fs.mkdir(outDir, { recursive: true });

const widths = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "phone", width: 390, height: 844 },
];

const browser = await chromium.launch();

for (const vp of widths) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(String(err)));

  await page.goto(url, { waitUntil: "networkidle" });

  await page.evaluate(async () => {
    const step = window.innerHeight * 0.6;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 120)));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  await page.waitForTimeout(700);

  await page.screenshot({
    path: path.join(outDir, `${vp.name}-full.png`),
    fullPage: true,
  });

  const info = await page.evaluate(() => {
    const doc = document.documentElement;
    const sections = [...document.querySelectorAll("section, footer")].map(
      (el) => {
        const r = el.getBoundingClientRect();
        return {
          cls: el.className,
          top: Math.round(r.top + window.scrollY),
          h: Math.round(r.height),
        };
      },
    );
    const hidden = [...document.querySelectorAll(".reveal")].filter(
      (el) => el.dataset.in !== "true",
    ).length;
    return {
      scrollHeight: doc.scrollHeight,
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      hiddenReveals: hidden,
      sections,
    };
  });

  console.log(vp.name, JSON.stringify(info));
  if (errors.length) console.log(vp.name, "console errors:", errors.slice(0, 5));
  await page.close();
}

await browser.close();
