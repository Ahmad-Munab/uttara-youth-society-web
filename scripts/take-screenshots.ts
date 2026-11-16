import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

interface ViewportConfig {
  name: string;
  width: number;
  height: number;
}

const viewports: ViewportConfig[] = [
  { name: "mobile_390", width: 390, height: 844 },
  { name: "tablet_768", width: 768, height: 1024 },
  { name: "desktop_1440", width: 1440, height: 900 },
];

const pagesToCapture = [
  { path: "/", label: "home" },
  { path: "/events/debate-2026", label: "debate" },
  { path: "/activities", label: "activities" },
];

async function capture(prefix: "before" | "after") {
  const outDir = path.join(process.cwd(), "screenshots", prefix);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const pageItem of pagesToCapture) {
    for (const vp of viewports) {
      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
      try {
        await page.goto(`http://localhost:3000${pageItem.path}`, {
          waitUntil: "networkidle0",
          timeout: 15000,
        });
        const filename = `${pageItem.label}_${vp.name}.png`;
        const filepath = path.join(outDir, filename);
        await page.screenshot({ path: filepath, fullPage: false });
        console.log(`Captured: ${prefix}/${filename}`);
      } catch (err) {
        console.error(`Error capturing ${pageItem.label} at ${vp.name}:`, err);
      } finally {
        await page.close();
      }
    }
  }

  await browser.close();
}

const prefix = (process.argv[2] as "before" | "after") || "before";
capture(prefix);
