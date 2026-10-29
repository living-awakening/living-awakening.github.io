import type { Metadata, Viewport } from "next";
import "../globals.css";
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_NAME,
  BASE_PATH,
  SITE_ORIGIN,
  alternateLanguages,
  canonicalPath,
} from "@/content/site";

/** 繁體中文版（預設，根路徑 /）根布局與詮釋資料 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  icons: {
    icon: `${BASE_PATH}/favicon.svg`,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "zh_TW",
    siteName: SITE_NAME,
  },
  alternates: {
    canonical: canonicalPath("zh"),
    languages: alternateLanguages(),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {/* 無障礙／漸進增強標記：有 JavaScript 時才顯示增強控制 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js');`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
