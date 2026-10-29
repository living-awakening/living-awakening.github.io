import { CHAPTERS } from "@/content/id/chapters";
import { SOURCES, BOOKS, VERSION_NOTES } from "@/content/id/sources";
import { INTRO, CLOSING, EDITORIAL_INFO, TRY_IT_LABEL } from "@/content/id/overview";
import { getUI, getReadingTime } from "@/content/site";
import { SitePage } from "@/components/site-page";

/** 印尼文版首頁（/id/）— 內容為繁中版的編輯翻譯；事實欄位沿用單一來源 */
export default function Home() {
  return (
    <SitePage
      lang="id"
      ui={getUI("id")}
      chapters={CHAPTERS}
      overview={{ INTRO, CLOSING, TRY_IT_LABEL, EDITORIAL_INFO }}
      sources={SOURCES}
      books={BOOKS}
      versionNotes={VERSION_NOTES}
      readingTime={getReadingTime("id")}
    />
  );
}
