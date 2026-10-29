import type { BookInfo, SourceRef } from "../types";
import { BOOKS as ZH_BOOKS, SOURCES as ZH_SOURCES } from "../sources.ts";

/**
 * 印尼文版來源資料 — 依繁中版 sources.ts 翻譯說明文字。
 * 為避免無關的書目事實副本：來源碼、書籍、篇章序號、原篇名、手札編號、
 * 書頁／PDF頁與用於章節等「事實欄位」直接沿用繁中版資料（單一來源），
 * 僅翻譯 note（核對說明）等編輯文字，並附原篇名／序號的編輯印尼文譯。
 * 《靈性覺醒》ISBN 差異等版本事實完全保留，不因翻譯而改動。
 */

/** 各來源核對說明（G1 最末欄）之印尼文譯 */
const NOTES_ID: Record<string, string> = {
  S01:
    "Dibaca cermat seluruhnya; semua bagian terverifikasi gambar. Kelahiran-pengasuhan, kepribadian, persepsi, dan keyakinan pada 171–176; definisi gen ilahi pada 174–176. Dimulai di separuh kiri PDF 85, berakhir di separuh kanan 89.",
  S02:
    "Dibaca cermat seluruhnya; semua bagian terverifikasi gambar. Penyaring, pilihan, reaksi positif dan negatif, serta simpulan tentang penyakit dan karma. Dimulai di separuh kiri 89, berakhir di separuh kanan 92.",
  S03:
    "Dibaca cermat seluruhnya; semua bagian terverifikasi gambar. Pencerahan dan kepompong cahaya pada 183, pintu masuk praktik yang setara pada 185, kasih sayang dan pelajaran tiap orang pada 186–187. Halaman 187 juga memuat catatan tentang makanan, yang tidak dipakai sebagai panduan pola makan di situs ini.",
  S04:
    "Dibaca cermat dan terverifikasi gambar. Model penyelarasan kognisi dan reaksi pada 316–318; pernyataan tentang usia pada 318–319; pengingat untuk tidak mengejar kekuatan gaib pada 320.",
  S05:
    "Dibaca cermat seluruhnya; semua bagian terverifikasi gambar. Daftar pada 57; ketiga unsur tidak boleh kurang satu pada 58; membaca pada 58; meditasi duduk pada 58–59; jaminan penulis pada 60.",
  S06:
    "Seri dibaca seluruhnya. Konteks peran hidup dan makna kehidupan; kutipan langsung tetap terbatas pada S05 yang terverifikasi gambar.",
  S07:
    "Dibaca cermat seluruhnya. Judul pada 59, inti tentang motif pada 60–62, contoh ekstrem pada 61 dan 66–67, serta contoh pekerjaan pada 68–69 telah terverifikasi gambar.",
  S08:
    "Dibaca cermat seluruhnya. Inti pada 262–263 / PDF 132 terverifikasi gambar: tidak membahayakan, pekerjaan yang ada sekarang, pelayanan dan kemampuan. “Tidak pensiun” pada 264 dibaca sebagai belajar dan melayani secara berkelanjutan, bukan ditulis ulang sebagai kerja paksa.",
  S09:
    "Dibaca cermat seluruhnya. Tiga tujuan hidup serta pelayanan dan kontribusi; inti pada 102–105 / PDF 52–53 terverifikasi gambar.",
  S10:
    "Dibaca cermat seluruhnya. Judul dan pembedaan antara transaksi, perbuatan baik, dan kebiasaan sehari-hari pada 34–35 / PDF 18 terverifikasi gambar; lanjutannya pada 36 dipakai untuk pemahaman, tidak dikutip panjang.",
  S11:
    "Dibaca cermat seluruhnya; semua bagian terverifikasi gambar. Peran yang sudah ada, keluarga, dan kasih; bukan tiga tindakan latihan S05.",
  S12:
    "Dibaca cermat dan terverifikasi gambar. Mendukung masa depan anak; contoh percakapan di situs ini adalah tulisan baru.",
  S13:
    "Dibaca cermat dan terverifikasi gambar. Pandangan penulis tentang ketulusan, kepedulian, dan ikatan karma keluarga. Judul dibaca sebagaimana tersusun di halamannya; tidak ditambah koma untuk dijadikan “judul asli” yang lain.",
  S14:
    "Dibaca cermat dan terverifikasi gambar. Harapan, tanggung jawab, dan tenggang rasa; ini tidak dipakai untuk menuntut siapa pun tetap berada dalam hubungan yang membahayakan.",
  S15:
    "Dibaca cermat dan terverifikasi gambar. Motif, altruisme, kesungguhan, tanggung jawab, dan berbagai peran sehari-hari.",
  S16:
    "Dibaca cermat seluruhnya. Kisah reaksi pada 238–240 / PDF 120–121 terverifikasi gambar; rasio dan atribusi psikologis tidak diperlakukan sebagai fakta di situs ini, dan pembahasan kekuatan gaib pada bagian akhir tidak dijadikan bab tersendiri.",
  S17:
    "Dibaca cermat seluruhnya; semua bagian terverifikasi gambar. Penyampaian yang wajar dibolehkan pada 497–499; kesabaran dan pemahaman asal-usul perkara pada 502.",
  S18:
    "Dibaca cermat seluruhnya; semua bagian terverifikasi gambar. Kesulitan, pengalaman, dan peta hidup; penjelasan metafisiknya harus tetap disandarkan kepada penulis.",
  S19:
    "Dibaca cermat seluruhnya. Judul pada 117 dan pengakuan derita telah terverifikasi gambar; selebihnya membahas pola pikir lama yang batiniah. Tidak ada teknik napas yang diciptakan dari kiasan di halaman 120.",
  S20:
    "Dibaca cermat dan terverifikasi gambar. Penghimpunan setetes demi setetes, keikutsertaan yang sabar. Koma ditambahkan saat judul disusun mendatar, demi keterbacaan.",
  S21:
    "Dibaca cermat dan terverifikasi gambar. Enam kalimat arah tentang pelayanan, pertolongan, kasih, dan syukur; situs ini hanya menuturkannya kembali, tidak mencetak ulang seluruh tulisannya.",
};

/** 原篇名之編輯印尼文譯（非官方授權譯名） */
const TITLES_ID: Record<string, string> = {
  S01: "Tujuh Pertanyaan Besar Dunia — Gen Ilahi (Bagian 1)",
  S02: "Tujuh Pertanyaan Besar Dunia — Gen Ilahi (Bagian 2)",
  S03: "Tujuh Pertanyaan Besar Dunia — Gen Ilahi (Bagian 3)",
  S04: "Kecocokan Gen Ilahi",
  S05: "Setelah Tercerahkan (Lanjutan Bagian Ketiga)",
  S06: "Setelah Tercerahkan (I), (Lanjutan Bagian Kedua), (Lanjutan Bagian Ketiga), (Penutup)",
  S07: "Pentingnya “Motif dan Tujuan”",
  S08: "Pilihan Karier untuk Pertumbuhan Spiritual",
  S09: "Meninjau Ulang “Tujuan Tertinggi Kehidupan”",
  S10: "Tidak Ada Pertumbuhan Spiritual, Sedikit Pun, yang Dapat Diperoleh Melalui Transaksi",
  S11: "Langkah Ketiga Kebangkitan dalam Kehidupan Sehari-hari",
  S12: "Biarkan Anak Mewujudkan Masa Depannya",
  S13: "Memberkati Keluarga dengan Kasih dari Batin",
  S14: "Hubungan Pasangan dan Pernikahan",
  S15: "Peran",
  S16: "Aturan Festinger dan Jebakan Pertumbuhan Spiritual",
  S17: "Jalan Tengah dan Pembinaan Emosi",
  S18: "Kesulitan di Depanmu adalah Penyelesaiannya",
  S19: "Langkah Kedua Kebangkitan dalam Kehidupan Sehari-hari",
  S20: "Perjalanan Seribu Mil Dimulai dari Langkah Kaki",
  S21: "Kesadaran Super dan Keyakinan Orang yang Tercerahkan",
};

/** 篇章序號（開悟之N）之編輯印尼文譯 */
const SEQUENCES_ID: Record<string, string> = {
  "開悟之三": "Pencerahan No. 3",
  "開悟之七": "Pencerahan No. 7",
  "開悟之十二": "Pencerahan No. 12",
  "開悟之二十二": "Pencerahan No. 22",
  "開悟之二十三": "Pencerahan No. 23",
  "開悟之二十四": "Pencerahan No. 24",
  "開悟之三十二": "Pencerahan No. 32",
  "開悟之三十六": "Pencerahan No. 36",
  "開悟之四十六": "Pencerahan No. 46",
  "開悟之七十": "Pencerahan No. 70",
};

/** 手札編號（慶淇悟得手札之N）之編輯印尼文譯 */
const NOTE_LABELS_ID: Record<string, string> = {
  "慶淇悟得手札之四、五、六、七": "Catatan Kebangkitan Qingqi No. 4–7",
  "慶淇悟得手札之四": "Catatan Kebangkitan Qingqi No. 4",
  "慶淇悟得手札之五": "Catatan Kebangkitan Qingqi No. 5",
  "慶淇悟得手札之六": "Catatan Kebangkitan Qingqi No. 6",
  "慶淇悟得手札之七": "Catatan Kebangkitan Qingqi No. 7",
  "慶淇悟得手札之九十二": "Catatan Kebangkitan Qingqi No. 92",
  "慶淇悟得手札之二十": "Catatan Kebangkitan Qingqi No. 20",
  "慶淇悟得手札之三十一": "Catatan Kebangkitan Qingqi No. 31",
  "慶淇悟得手札之三十二": "Catatan Kebangkitan Qingqi No. 32",
  "慶淇悟得手札之二十七": "Catatan Kebangkitan Qingqi No. 27",
  "慶淇悟得手札之五十一": "Catatan Kebangkitan Qingqi No. 51",
  "慶淇悟得手札之五十二": "Catatan Kebangkitan Qingqi No. 52",
  "慶淇悟得手札之五十九": "Catatan Kebangkitan Qingqi No. 59",
  "慶淇悟得手札之一百一十七": "Catatan Kebangkitan Qingqi No. 117",
};

/** 事實欄位中的中文說明值之顯示印尼文譯（S06 pdfPages「同書頁」） */
const FACT_VALUE_OVERRIDES: Record<string, string> = {
  同書頁: "sama dengan hlm. buku",
};

/**
 * 印尼文版來源清單：事實欄位沿用繁中版（確保 S01–S21、頁碼、用於章節一致），
 * 僅替換 note 為印尼文譯並附 titleId／sequenceId／noteLabelId 編輯譯；
 * 「同書頁」等中文說明值以顯示印尼文譯替換（見 verify-content 對等檢查的明示例外）。
 */
export const SOURCES: SourceRef[] = ZH_SOURCES.map((s) => ({
  ...s,
  note: NOTES_ID[s.id] ?? s.note,
  titleId: TITLES_ID[s.id],
  sequenceId: s.sequence ? SEQUENCES_ID[s.sequence] : undefined,
  noteLabelId: s.noteLabel ? NOTE_LABELS_ID[s.noteLabel] : undefined,
  pdfPages: FACT_VALUE_OVERRIDES[s.pdfPages] ?? s.pdfPages,
}));

/** 依來源碼查詢 */
export function getSource(id: string): SourceRef | undefined {
  return SOURCES.find((s) => s.id === id);
}

/** 兩書書目（印尼文版）：ISBN、出版者、版次日期等事實沿用繁中版；說明文字為印尼文譯 */
export const BOOKS: Record<"jia" | "yi", BookInfo> = {
  jia: {
    ...ZH_BOOKS.jia,
    titleId: "Jika Ingin Tercerahkan, Buku Ini Sudah Cukup",
    place: "Kota New Taipei, menurut data katalog-dalam-penerbitan pada teks.",
    edition: "April 2022, edisi pertama, cetakan pertama.",
    isbnCoverNote: "Sama dengan ISBN pada teks.",
    basis: "PDF teks Buku A hlm. 325 dan PDF sampul Buku A hlm. 1.",
    copyrightNote:
      "PDF teks Buku A hlm. 325 (tanpa nomor halaman) memuat pemberitahuan 「版權所有．翻印必究」 (hak cipta dilindungi; mencetak ulang dilarang); situs ini tidak menyediakan isi buku, sampul, atau berkas lengkapnya untuk diunduh.",
  },
  yi: {
    ...ZH_BOOKS.yi,
    titleId: "Kebangkitan Spiritual",
    authorNote: "Data penerbitan pada teks ditandatangani 「江慶淇老師」 (Guru Jiang Qingqi).",
    place: "Kota New Taipei, menurut data katalog-dalam-penerbitan pada teks.",
    edition: "Maret 2022, edisi pertama, cetakan pertama.",
    isbnCoverNote:
      "Berbeda dengan ISBN pada teks. Sebelum padanan edisinya terkonfirmasi, sampul itu tidak disajikan sebagai sampul pendamping yang pasti dari teks ini, dan tidak dikemukakan dugaan tentang cetak ulang, revisi, atau salah cetak. Tanggal pembuatan PDF tidak menggantikan tanggal terbit.",
    basis:
      "PDF teks Buku B hlm. 478 dan PDF sampul Buku B hlm. 1; kedua ISBN dipertahankan sebagaimana perbedaannya, tidak digabungkan.",
    copyrightNote:
      "Halaman pertama lampiran gambar Buku B (PDF 458, tanpa nomor halaman) memuat pernyataan tentang penggunaan dan penyebaran; lihat “Catatan tentang Edisi dan Lingkup Penggunaan” di bawah.",
  },
};

/** 版本與使用範圍說明（G2／H4 公開面向；印尼文譯，事實保留） */
export const VERSION_NOTES: { title: string; body: string[] }[] = [
  {
    title: "《靈性覺醒》 Pernyataan tentang Penggunaan dan Penyebaran (bukti sumber)",
    body: [
      "Halaman pertama lampiran gambar Buku B (PDF 458, tanpa nomor halaman) menyatakan: 「本書內容屬於全體生命／以增進生命福祉之目的／任何形式之利用與散布／無須另行通知即可實行」 (“Isi buku ini milik seluruh kehidupan / dengan tujuan meningkatkan kesejahteraan hidup / penggunaan dan penyebaran dalam bentuk apa pun / dapat dilaksanakan tanpa pemberitahuan lebih lanjut”), dan ditandatangani 江慶淇 serta 江嘉祁. Tanda miring menandai pergantian baris pada gambar aslinya.",
      "Situs ini mempertahankan pernyataan itu sebagai bukti sumber atas lingkup penggunaannya; tidak mengubah namanya menjadi lisensi terbuka tertentu, domain publik, atau dukungan penulis, dan tidak memperluasnya secara otomatis kepada 《要開悟讀這本書就夠了》, edisi sampul, maupun materi pihak ketiga.",
    ],
  },
  {
    title: "Lingkup Penggunaan Isi Situs Ini",
    body: [
      "Situs ini terdiri atas penuturan kembali dengan bahasa sederhana yang orisinal, contoh yang baru ditulis, dan sejumlah kecil kutipan pendek yang diperlukan, dengan sumber yang ditandai lengkap; tidak menyertakan PDF buku, sampul, potret penulis, gambar lampiran, atau unduhan buku utuh.",
      "Halaman hak cipta 《要開悟讀這本書就夠了》 memuat 「版權所有．翻印必究」 (hak cipta dilindungi; mencetak ulang dilarang); memegang salinan berkas tidak sama dengan memperoleh izin menyebarkannya secara umum.",
      "PDF 《靈性覺醒》 hlm. 474 (tanpa nomor halaman) memuat bagan perkembangan gen ilahi (〈神性基因演化示意圖〉); hanya dipakai untuk pemahaman para editor atas model penulis, dan tidak diperbanyak di situs ini.",
    ],
  },
];
