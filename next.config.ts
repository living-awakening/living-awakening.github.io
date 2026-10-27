import type { NextConfig } from "next";

/**
 * 雙執行模式設定（部署設定集中管理）：
 *
 * 1. 開發模式（Z.ai 預覽）：`next dev -p 3000`，輸出 standalone（環境預設）。
 * 2. 靜態匯出（GitHub Pages 等靜態託管）：`npm run build:static`
 *    （scripts/build-static.mjs 以 BUILD_MODE=export 執行 next build），
 *    產物輸出至 out/；建置中繼檔使用 .next-export，不干擾開發模式的 .next。
 *
 * 子路徑託管：以環境變數 NEXT_PUBLIC_BASE_PATH 指定（如 /repo-name/），
 * 域名根目錄託管時不需設定。資產與內部連結皆隨 basePath 調整。
 */

const isExport = process.env.BUILD_MODE === "export";
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/+$/, "");

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: { unoptimized: true },
  ...(isExport
    ? {
        output: "export" as const,
        trailingSlash: true,
        distDir: ".next-export",
        ...(basePath ? { basePath } : {}),
      }
    : { output: "standalone" as const }),
};

export default nextConfig;
