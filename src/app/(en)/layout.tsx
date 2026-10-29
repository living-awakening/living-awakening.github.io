import type { Metadata, Viewport } from "next";
import "../globals.css";
import {
  SITE_TITLE_EN,
  SITE_DESCRIPTION_EN,
  SITE_NAME_EN,
  BASE_PATH,
  SITE_ORIGIN,
  alternateLanguages,
  canonicalPath,
} from "@/content/site";

/** 英文版（編輯翻譯）根布局與詮釋資料 — 路徑 /en/ */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: SITE_TITLE_EN,
  description: SITE_DESCRIPTION_EN,
  applicationName: SITE_NAME_EN,
  icons: {
    icon: `${BASE_PATH}/favicon.svg`,
  },
  openGraph: {
    title: SITE_TITLE_EN,
    description: SITE_DESCRIPTION_EN,
    type: "website",
    locale: "en",
    siteName: SITE_NAME_EN,
  },
  alternates: {
    canonical: canonicalPath("en"),
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
    <html lang="en" suppressHydrationWarning>
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
