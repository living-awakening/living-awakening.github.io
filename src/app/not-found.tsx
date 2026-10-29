import Link from "next/link";
import "./globals.css";
import { SITE_NAME, SITE_NAME_EN, SITE_TITLE } from "@/content/site";

/** 404 頁 metadata（靜態匯出為 404.html；title 會注入 Next 自動外殼的 head） */
export const metadata = {
  title: `找不到這一頁／Page not found／Halaman tidak ditemukan — ${SITE_TITLE}`,
};

/** 404 頁（三語導引；GitHub Pages 對未匹配路徑使用）。
 *  頁面層級 lang="zh-Hant" 由 build-static.mjs 後處理注入
 *  （Next 靜態匯出的自動外殼不含 lang）；英／印尼文內容以 span 層級
 *  lang="en"／"id" 標註。 */
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 py-16 text-center">
      <p className="text-sm font-medium tracking-[0.3em] text-teal">
        <span lang="zh-Hant">{SITE_NAME}</span>
        <span lang="en" className="ml-2 text-ink-soft">
          ｜{SITE_NAME_EN}
        </span>
      </p>
      <h1 className="mt-6 text-3xl font-bold text-ink">
        <span lang="zh-Hant">找不到這一頁</span>
        <span lang="en" className="mt-2 block text-xl font-semibold text-ink-soft">
          Page not found
        </span>
        <span lang="id" className="mt-1 block text-xl font-semibold text-ink-soft">
          Halaman tidak ditemukan
        </span>
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-ink-soft" lang="zh-Hant">
        這個地址不存在。請回到首頁，或前往英文版／印尼文版。
      </p>
      <p className="mt-2 max-w-md leading-relaxed text-ink-soft" lang="en">
        This address does not exist. Please return to the homepage, or visit the English or Indonesian version.
      </p>
      <p className="mt-2 max-w-md leading-relaxed text-ink-soft" lang="id">
        Alamat ini tidak ada. Silakan kembali ke halaman utama, atau kunjungi versi bahasa Indonesia.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="flex min-h-11 items-center rounded-lg border border-line bg-surface px-5 py-2.5 font-medium text-ink transition-colors hover:border-teal/50 hover:bg-teal-soft/40"
        >
          <span lang="zh-Hant">回到首頁</span>
          <span lang="en" className="ml-2 text-sm text-ink-soft">
            Home（繁體中文）
          </span>
        </Link>
        <Link
          href="/en/"
          className="flex min-h-11 items-center rounded-lg border border-line bg-surface px-5 py-2.5 font-medium text-ink transition-colors hover:border-teal/50 hover:bg-teal-soft/40"
        >
          <span lang="en">English version</span>
        </Link>
        <Link
          href="/id/"
          className="flex min-h-11 items-center rounded-lg border border-line bg-surface px-5 py-2.5 font-medium text-ink transition-colors hover:border-teal/50 hover:bg-teal-soft/40"
        >
          <span lang="id">Versi bahasa Indonesia</span>
        </Link>
      </div>
    </div>
  );
}
