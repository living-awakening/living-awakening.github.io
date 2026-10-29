#!/usr/bin/env node
/**
 * 靜態匯出建置（npm 相容，不依賴 Bun；Windows／POSIX 皆可）。
 *
 * 用法：
 *   npm run build:static                                     → 域名根目錄託管
 *   NEXT_PUBLIC_BASE_PATH=/repo-name npm run build:static    → 專案子路徑託管
 *
 * 以 BUILD_MODE=export 執行 next build；Next 16 會把匯出結果寫入
 * distDir（.next-export），本腳本再將可部署站台複製到 out/
 * （排除 __next.*.txt 建置除錯檔）。
 */
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { cpSync, existsSync, rmSync, readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const require = createRequire(import.meta.url);

let nextCli;
try {
  nextCli = require.resolve("next/dist/bin/next");
} catch {
  console.error("找不到 next，請先執行 npm install。");
  process.exit(1);
}

if (!existsSync("package.json")) {
  console.error("請在專案根目錄執行本腳本。");
  process.exit(1);
}

const env = { ...process.env, BUILD_MODE: "export" };
const result = spawnSync(process.execPath, [nextCli, "build"], {
  stdio: "inherit",
  env,
});
if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

const distDir = ".next-export";
if (!existsSync(join(distDir, "index.html"))) {
  console.error(`匯出失敗：${distDir}/index.html 不存在。`);
  process.exit(1);
}

// 複製可部署站台至 out/（排除 __next.*.txt 除錯檔）
const outDir = "out";
rmSync(outDir, { recursive: true, force: true });
cpSync(distDir, outDir, {
  recursive: true,
  filter: (src) => {
    const name = src.split(/[\\/]/).pop() ?? "";
    return !name.startsWith("__next.");
  },
});

const fileCount = countFiles(outDir);

// 404.html 後處理：注入頁面層級 lang（雙語 404 內容以 span 層級標註，
// 頁面層級採站點預設語言 zh-Hant）。Next 靜態匯出的自動外殼不含 lang。
const notFoundFile = join(outDir, "404.html");
if (existsSync(notFoundFile)) {
  const before = readFileSync(notFoundFile, "utf8");
  const patched = before.replace(/<html(?![^>]*\blang=)[^>]*>/, '<html lang="zh-Hant">');
  if (patched !== before) {
    writeFileSync(notFoundFile, patched);
    console.log("404.html：已注入 <html lang=\"zh-Hant\">。");
  }
}

console.log("");
console.log(`靜態站台已輸出至 ${outDir}/（${fileCount} 個檔案）。`);
console.log("本地預覽：npm run serve:static");
console.log("部署：將 out/ 內容上傳至靜態託管（GitHub Pages 等）。");

function countFiles(dir) {
  let n = 0;
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) n += countFiles(p);
    else n++;
  }
  return n;
}
