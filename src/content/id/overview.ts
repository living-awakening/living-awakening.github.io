/**
 * 印尼文版總覽與頁末文案 — 編輯翻譯自繁中版 overview.ts
 * （繁中版逐字取自策劃稿 F2 首層總覽與 E7 頁末回顧；印尼文版為忠實轉譯，非原書官方譯文）。
 * 六章摘要改由 id/chapters.ts 共用資料渲染，不另行維護副本。
 */

import type { OverviewData } from "../types";

/** 頁首導讀（F2 開頭；印尼文譯） */
export const INTRO: OverviewData["INTRO"] = {
  heading: "Bawa Pemahaman Spiritual Kembali ke Dalam Kehidupan Sehari-hari",
  paragraphs: [
    "Situs ini menyajikan bacaan terpilih dari dua buku Guru Jiang Qingqi (江慶淇老師) — 《要開悟讀這本書就夠了》 (Jika Ingin Tercerahkan, Buku Ini Sudah Cukup) dan 《靈性覺醒》 (Kebangkitan Spiritual) — dan menyusun ajaran yang paling langsung berkaitan dengan praktik pribadi ke dalam enam bab. Anda tidak perlu membaca kedua buku itu lebih dahulu, tidak pula memiliki pengalaman khusus; Anda dapat mulai dari orang, persoalan, dan pilihan yang ada di depan Anda.",
    "Dalam pandangan spiritual penulis, kehidupan berhubungan dengan “Sumber”, dan pertumbuhan terjadi dalam pikiran, tindakan, dan pergaulan sehari-hari. Situs ini mempertahankan latar itu, sekaligus memilah dengan jelas antara klaim penulis, penjelasan bahasa sederhana, dan tindakan-tindakan kecil yang diusulkan para editor. Memahami satu ajaran tidak berarti wajib menerima setiap penjelasannya.",
    "Bacalah dahulu inti satu kalimat dan tindakan kecil tiap bab, lalu buka contoh, penjelasan kesalahpahaman, dan sumber yang Anda perlukan. Tidak perlu membuka semua bab, tidak pula menyelesaikan seluruh latihan sekaligus. Ini pengantar pembuka; ia tidak dapat menggantikan pembahasan lengkap kedua buku itu.",
  ],
};

/** 頁末回顧（F2「今天先做一件事」＋E7；印尼文譯） */
export const CLOSING: OverviewData["CLOSING"] = {
  heading: "Lakukan Satu Hal Hari Ini",
  paragraphs: [
    "Pilih satu hal kecil yang sedang terjadi; lihatlah bagaimana Anda memahaminya dan mengapa Anda hendak bertindak demikian; lalu tuntaskan satu tindakan yang sanggup Anda pertanggungjawabkan. Yang Anda tinjau adalah pergaulan dan pilihan yang nyata — bukan memberi nilai kerohanian pada diri sendiri.",
    "Untuk melihat bagaimana penulis aslinya mengatakannya, bukalah sumber pada tiap bab. Di situs ini, contoh dan tindakan kecil yang baru ditulis semuanya diberi label “Susunan Editor” (編輯整理); tidak ada pembelian, pendaftaran, atau pembagian pengalaman pribadi yang diminta.",
  ],
  reflectionHeading: "Saat Anda Kembali",
  reflectionParagraphs: [
    "Hari ini Anda tidak perlu melakukannya semua sekaligus. Pilih satu hal kecil yang sedang terjadi; lihatlah bagaimana Anda memahaminya dan mengapa Anda hendak bertindak demikian; lalu tuntaskan satu tindakan yang sanggup Anda pertanggungjawabkan. Saat kembali membaca nanti, barangkali Anda menemukan tempat berikutnya yang layak dilatih.",
    "Keenam bab ini adalah pintu masuk ke kedua buku. Untuk memahami konteks, istilah, dan ketegangan antarbagian dalam karya penulis secara utuh, kembalilah kepada buku aslinya.",
  ],
};

/** 章節小行動的固定引導語（F2；印尼文譯） */
export const TRY_IT_LABEL = "Coba ini";

/** 來源與編輯說明區（頁末共用資料：F3／B4／E0／G2 之公開面向；印尼文譯） */
export const EDITORIAL_INFO: OverviewData["EDITORIAL_INFO"] = {
  sourcesHeading: "Sumber dan Catatan Editor",
  sourceIndexHeading: "Indeks Sumber (S01–S21)",
  sourceIndexIntro:
    "Bagian-bagian dari kedua buku yang dikutip di situs ini tercantum di bawah. Kode sumber seperti S01 adalah nomor penelusuran yang diberikan situs ini. “Hlm. buku” berarti nomor halaman yang tercetak pada edisi kertas; “hlm. PDF” dihitung dari lembar pertama berkas PDF teks yang dipakai proyek ini. Keduanya dicantumkan dalam kolom terpisah, sehingga pembaca yang memegang bukunya, atau berkas edisi yang sama, dapat memeriksa rujukan halamannya. Judul-judul bahasa Indonesia adalah terjemahan editorial; judul bahasa Tionghoa aslinya yang berlaku.",
  booksHeading: "Bibliografi Kedua Buku",
  versionHeading: "Catatan tentang Edisi dan Lingkup Penggunaan",
  conventionsHeading: "Ketentuan Halaman dan Judul",
  conventions: [
    "“Hlm. buku” berarti nomor halaman yang tercetak pada kertas; “hlm. PDF” dihitung dari lembar pertama berkas sebagai 1. Tabel sumber mencantumkannya dalam kolom terpisah; tidak ada rumus untuk saling mengubah.",
    "Pada bagian isi bernomor 《要開悟讀這本書就夠了》, lembar PDF ke-n umumnya memuat halaman buku 2n−2 pada separuh kanan dan 2n−1 pada separuh kiri; pola ini tidak berlaku bagi halaman hak cipta dan lampiran gambar tanpa nomor halaman.",
    "Pada bagian utama 《靈性覺醒》 yang dikutip di sini, halaman buku dan halaman PDF sama; lampiran tanpa nomor dan halaman data penerbitan ditandai “tanpa nomor halaman” (未編頁).",
    "Judul asli bagian dipertahankan sesuai kata bukunya; judul bab situs ini dirancang para editor dan tidak menyamar sebagai judul bab buku. Bila percakapan dalam kedua buku mengutip nomor halaman dari edisi lain, situs ini menempatkannya menurut halaman berkas yang benar-benar dipakai.",
  ],
  principlesHeading: "Asas Editor",
  principles: [
    "Ini adalah panduan pengantar yang selektif; ia tidak mewakili seluruh isi buku aslinya, dan bukan merupakan dukungan dari penulis.",
    "Isi digolongkan menjadi “klaim buku asli”, “penjelasan bahasa sederhana”, “saran praktik (susunan editor)”, dan “batas editor”. Contoh, latihan, dan tindakan kecil yang baru ditulis diberi label “Susunan Editor” (編輯整理) dan tidak meminjam suara penulis. Contoh baru yang tidak pernah dikatakan penulis tidak pernah ditaruh dalam tanda petik.",
    "Urutan bab adalah urutan navigasi, bukan enam tingkatan latihan; tidak perlu “lulus” bab terdahulu sebelum membaca bab berikutnya.",
    "“Terverifikasi gambar” (已核圖) berarti halaman-halaman kunci dari sebuah judul, klaim penting, atau kutipan telah diperiksa terhadap gambar halaman aslinya; itu bukan penelaahan kata demi kata atas seluruh buku.",
    "Situs ini tidak menyediakan akun, pembayaran, langganan, pelacakan analitik, atau bentuk nilai kerohanian apa pun; tidak mengumpulkan catatan kesehatan maupun catatan latihan.",
    "Terjemahan bahasa Indonesia atas judul kedua buku dan nama penulis adalah terjemahan editorial demi keterbacaan; tidak ada edisi bahasa Indonesia resmi dari kedua buku ini.",
  ],
  readingTimeHeading: "Perkiraan Waktu Baca",
  readingTimeNote:
    "Teks ikhtisar bawaan pada halaman bahasa Indonesia (termasuk tinjauan penutup) berjumlah sekitar 770 kata. Dengan kecepatan baca orang dewasa umum sekitar 200–260 kata per menit, teksnya saja memerlukan sekitar 3,0–3,8 menit; dengan waktu menggulir dan jeda singkat, label berbunyi “Ikhtisar: sekitar 3–5 menit”. Ini perkiraan editorial, bukan pengukuran nyata, dan tidak mewakili waktu yang diperlukan untuk membaca seluruh isi yang dibuka.",
};
