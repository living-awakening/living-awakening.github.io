import { CHAPTERS } from "@/content/chapters";
import { SOURCES, BOOKS, VERSION_NOTES } from "@/content/sources";
import { INTRO, CLOSING, EDITORIAL_INFO, TRY_IT_LABEL } from "@/content/overview";
import { getUI, getReadingTime } from "@/content/site";
import { SitePage } from "@/components/site-page";

/** 繁體中文版首頁（根路徑 /）— 內容為已核可基準，未隨本地化改動 */
export default function Home() {
  return (
    <SitePage
      lang="zh"
      ui={getUI("zh")}
      chapters={CHAPTERS}
      overview={{ INTRO, CLOSING, TRY_IT_LABEL, EDITORIAL_INFO }}
      sources={SOURCES}
      books={BOOKS}
      versionNotes={VERSION_NOTES}
      readingTime={getReadingTime("zh")}
    />
  );
}
