import type { Metadata, Viewport } from "next";
import "../globals.css";
import {
  SITE_TITLE_ID,
  SITE_DESCRIPTION_ID,
  SITE_NAME_EN,
  BASE_PATH,
  SITE_ORIGIN,
  alternateLanguages,
  canonicalPath,
} from "@/content/site";

/** 印尼文版（編輯翻譯）根布局與詮釋資料 — 路徑 /id/ */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: SITE_TITLE_ID,
  description: SITE_DESCRIPTION_ID,
  applicationName: SITE_NAME_EN,
  icons: {
    icon: `${BASE_PATH}/favicon.svg`,
  },
  openGraph: {
    title: SITE_TITLE_ID,
    description: SITE_DESCRIPTION_ID,
    type: "website",
    locale: "id",
    siteName: SITE_NAME_EN,
  },
  alternates: {
    canonical: canonicalPath("id"),
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
    <html lang="id" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {/* Accessibility / progressive enhancement marker: enhanced controls appear only with JavaScript */}
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
