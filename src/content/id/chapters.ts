import type { Chapter } from "../types";

/**
 * 印尼文版六章內容 — 編輯翻譯自繁中版 chapters.ts（逐字轉錄自策劃稿 E1–E6）。
 * 章名為編輯印尼文譯（titleZh 保留原始中文章名供對等驗證）；章序與識別碼不變。
 * 原書書名《》與原篇名〈〉保留原文，旁附編輯印尼文譯；非官方授權譯名。
 * 每章九欄齊全：章名、核心句、教導說明、與日常生活的關係、生活例子、
 * 一個小行動（摘要＋步驟）、常見誤解、深入原書脈絡、來源與編輯追溯。
 */

export const CHAPTERS: Chapter[] = [
  {
    id: "chapter-1",
    order: 1,
    number: "1",
    shortTitle: "Gen Ilahi",
    title: "Gen Ilahi: Mulai dari Menyadari Reaksi Anda Sendiri",
    titleZh: "神性基因：從看見自己的反應開始",
    core: "Menurut penulis, manusia berhubungan dengan Sumber melalui “gen ilahi”; pemahaman, pikiran, dan tindakan sehari-hari adalah pintu masuk pengamalan dari pandangan spiritual ini.",
    alwaysVisibleNote: {
      label: "Catatan bacaan",
      text: "Dalam buku aslinya, konsep ini mengandung makna spiritual sekaligus biologis; bukan sekadar kiasan tentang kebiasaan. Pernyataan mengenai DNA, penyembuhan, dan perpanjangan usia tidak disajikan di situs ini sebagai fakta ilmiah atau jaminan hasil; latihan seseorang juga tidak dinilai dari penyakit atau keadaan hidupnya.",
      kind: "boundary",
    },
    teaching: {
      kind: "plain",
      paragraphs: [
        {
          text: "Dalam 《要開悟讀這本書就夠了》 (Jika Ingin Tercerahkan, Buku Ini Sudah Cukup), “Sumber” adalah asal penciptaan kehidupan; “gen ilahi”, menurut penulis, adalah mekanisme pendukung pertumbuhan yang diberikan Sumber kepada manusia. Penulis mengaitkannya dengan DNA, ingatan kehidupan lampau, bakat, karma, dan pertumbuhan spiritual. Dalam buku itu, ia memiliki makna spiritual dan biologis yang nyata — bukan sekadar nama lain untuk “kebiasaan baik”.",
        },
        {
          text: "Penjelasan penulis dimulai dari perjalanan tumbuh seseorang: asuhan keluarga, sekolah, keyakinan, pekerjaan, dan pengalaman pergaulan perlahan-lahan membentuk watak serta cara memahami dunia. Ketika suatu hal sampai kepada seseorang, ia menilainya melalui “persepsi dan keyakinan” miliknya sendiri, yang kemudian membentuk pikiran, tutur kata, dan perilaku. Penulis selanjutnya berpendapat bahwa reaksi-reaksi ini mengaktifkan atau mencocokkan gen ilahi, memengaruhi takdir dan perkembangan spiritual.",
        },
        {
          text: "Paruh pertama dapat Anda amati dalam kehidupan sendiri: Apa yang saya dengar? Bagaimana saya menafsirkannya? Apa yang akan saya lakukan? Paruh kedua — hubungan antara gen, karma, dan takdir — tetap merupakan klaim spiritual dan biologis penulis. Situs ini tidak memperlakukannya sebagai mekanisme ilmiah yang telah diverifikasi oleh penelaahan sumber kali ini.",
        },
      ],
    },
    dailyLife: {
      kind: "editorial",
      paragraphs: [
        {
          text: "Sebuah pesan yang tidak dibalas dapat dibaca sebagai “ia menganggap rendah saya”, padahal mungkin sekadar informasi yang belum lengkap. Menyadari tafsir Anda sendiri membuka ruang untuk bertanya, menunggu, atau menyatakan kebutuhan. Pengamatan ini tidak menuntut Anda menerima lebih dulu setiap klaim metafisik, juga tidak berarti Anda dapat mengendalikan orang lain atau segala hasil.",
        },
      ],
    },
    example: {
      kind: "editorial",
      paragraphs: [
        {
          text: "Rekan kerja belum membalas soal dokumen serah terima. Anda marah dan hendak menegurnya di grup. Terlebih dahulu Anda memilah: fakta yang pasti adalah “dokumen belum diterima”; “ia sengaja menghambat saya” adalah tafsir Anda saat ini. Anda dapat menanyakan kemajuan dan kesulitannya dengan jelas, menyebutkan batas waktunya, lalu memutuskan apakah perlu koordinasi. Balasan orang itu mungkin tetap tidak sesuai harapan, tetapi cara Anda menyampaikan dan menangani persoalan sudah berbeda.",
        },
      ],
    },
    action: {
      summary: "Hari ini, tangkap satu reaksi dan tuliskan “apa yang terjadi, tafsir saya, pilihan langkah berikutnya”.",
      steps: "Pilih satu kejadian kecil; pisahkan hal yang dapat dipastikan dari dugaan Anda sendiri; pikirkan respons yang lebih jujur dan kurang menyakiti — lalu benar-benar lakukan. Saat meninjau, catat apa yang Anda katakan dan lakukan; jangan menilai sendiri “seberapa aktif gen ilahi Anda”. Latihan tiga kolom ini adalah alat pengamatan yang diusulkan para editor, bukan latihan gen yang diajarkan buku aslinya.",
      kind: "editorial",
    },
    misunderstandings: {
      kind: "boundary",
      items: [
        {
          question: "Jadi, gen ilahi hanyalah metafora psikologis?",
          answer: "Bukan. Buku aslinya secara eksplisit mengaitkannya dengan Sumber, DNA, kehidupan lampau, dan kenaikan spiritual (ascension). Situs ini mempertahankan konteks itu, dan secara terpisah menawarkan tindakan yang dapat diamati.",
        },
        {
          question: "Cukup berubah pikiran untuk mencegah sakit, menyembuhkan penyakit, atau menjamin panjang umur?",
          answer: "Buku aslinya memuat pernyataan semacam itu, tetapi naskah ini tidak membangun dasar ilmiahnya; situs tidak memberikan jaminan penyembuhan maupun hasil hidup, dan tidak menjadikan latihan ini pengganti perawatan medis.",
        },
        {
          question: "Sakit, mengalami kekerasan, atau hidup tak beruntung menandakan latihan seseorang buruk?",
          answer: "Situs ini tidak membuat penilaian seperti itu. Keadaan hidup seseorang tidak dapat dipakai menyimpulkan moral, batin, atau pencapaian latihannya — apalagi untuk menuntut ia menahan penderitaan.",
        },
        {
          question: "Berpikir positif berarti tidak boleh sedih atau marah?",
          answer: "Mengamati reaksi tidak menyangkal perasaan; Bab 5 dan 6 membahas penyampaian, tanggung jawab, dan batas.",
        },
      ],
    },
    deeper: {
      kind: "plain",
      paragraphs: [
        {
          text: "Bagian Pertama menghubungkan bagian yang disebut penulis sebagai 97,5% yang belum teraktivasi dengan “gen ilahi”; Bagian Kedua menjelaskan bahwa persepsi dan keyakinan bekerja seperti penyaring; Bagian Ketiga menghubungkannya dengan interaksi bersama Sumber, pemulihan keadaan “kepompong cahaya”, dan kenaikan spiritual (ascension). Persentase ini dan pembagian kerja di dalam DNA semuanya harus dilabeli sebagai model penulis, bukan digambar sebagai peta anatomi manusia yang telah dikonfirmasi ilmu pengetahuan.",
        },
        {
          text: "Buku aslinya tidak sekadar mengatakan “berpikirlah positif”: ia menuntut respons hidup yang jujur, bermoral, dan altruistis, dan Bagian Ketiga menegaskan bahwa siapa pun, tanpa memandang kedudukan atau kekayaan, dapat mulai dari cara memperlakukan orang-orang di sekitarnya. Penulis berpendapat bahwa reaksi positif dan negatif menggerakkan pencocokan gen ilahi serta hasil karma yang berbeda-beda; itu adalah klaim sebab-akibat spiritual miliknya, dan tidak dapat dipakai untuk menghakimi keadaan pembaca mana pun. 〈神性基因的匹配〉 (Kecocokan Gen Ilahi) kemudian menghubungkan informasi dari luar, kognisi batin, dan pilihan dengan hubungan pencocokan DNA yang dikemukakan penulis.",
        },
        {
          text: "Batas yang harus dipertahankan: buku aslinya juga memuat simpulan kuat tentang menyembuhkan penyakit, menghindari musibah, dan menilai batin dari sakit. Situs ini boleh menjelaskan dengan jujur bahwa penulis berklaim demikian; ia tidak boleh mengubahnya menjadi janji maupun cercaan terhadap pembaca.",
          kind: "boundary",
        },
      ],
    },
    sourceIds: ["S01", "S02", "S03", "S04"],
    traceability:
      "Sumber utama S01–S03: 《要開悟讀這本書就夠了》, 〈世界七大哉問─神性基因〉 (Tujuh Pertanyaan Besar Dunia — Gen Ilahi) Bagian Pertama sampai Ketiga, buku hlm. 169–187 / PDF 85–94. Pertumbuhan dan keyakinan: buku hlm. 171–177 / PDF 86–89; simpulan tentang kesehatan dan takdir: buku hlm. 178–186 / PDF 90–94; praktik dalam hubungan: buku hlm. 185–187 / PDF 93–94. Tambahan S04: 〈神性基因的匹配〉 (Kecocokan Gen Ilahi), buku hlm. 316–320 / PDF 159–161. Penjelasan ajaran dan konteks mendalam adalah penuturan kembali bahasa sederhana atas klaim buku aslinya; kaitan dengan kehidupan, contoh, dan tindakan kecil adalah penjelasan atau contoh baru dari editor; kesalahpahaman umum memuat batas situs yang dinyatakan secara terbuka.",
  },
  {
    id: "chapter-2",
    order: 2,
    number: "2",
    shortTitle: "Tiga Tindakan Latihan",
    title: "Tiga Tindakan Latihan dalam Kehidupan Sehari-hari",
    titleZh: "日常生活中的三個修行作為",
    core: "Penulis menjadikan pekerjaan dan kehidupan sebagai poros, didampingi membaca-merenung serta meditasi duduk setiap hari, dan menyatakan dengan tegas bahwa ketiga unsur itu tidak boleh kurang satu pun.",
    practices: {
      items: [
        "Menjadikan pekerjaan dan kehidupan sehari-hari sebagai poros.",
        "Membaca buku-buku terkait sebagai pendukung.",
        "Meditasi duduk setiap hari (40 sampai 90 menit).",
      ],
    },
    teaching: {
      kind: "plain",
      paragraphs: [
        {
          text: "Tulisan ini mengisahkan cara pertumbuhan spiritual penulis sendiri. Ia menggambarkan tujuannya sebagai perhubungan tubuh, pikiran, dan jiwa, serta kesadaran menyatu dengan Sang Pencipta; latihan tidak disamakan dengan meninggalkan kehidupan, dan titik beratnya bukan pada kemampuan gaib maupun kegembiraan yang terus-menerus.",
        },
        {
          lead: "Pekerjaan dan kehidupan sebagai poros.",
          text: "Menurut penulis, manusia yang datang ke dunia ini harus sungguh-sungguh mengambil bagian dalam berbagai peran dan pengalaman; sekaligus sebagai pelaku peristiwa, ia belajar memandang dan menimbang perannya sendiri. Pekerjaan, belajar, merawat, dan hidup bersama adalah tempat pilihan diwujudkan; kiasan “penonton” tidak berarti tanggung jawab boleh ditinggalkan.",
        },
        {
          lead: "Membaca buku-buku terkait sebagai pendukung.",
          text: "Naskah aslinya mengharuskan membaca setiap hari atau sesering mungkin, disertai perenungan berulang. Penulis berpendapat bahwa kata, bacaan, dan pengkajian dapat berubah menjadi energi kesadaran; secara praktis, membaca dapat dipakai untuk mencerminkan pemahaman Anda sendiri, lalu dibawa kembali ke dalam kehidupan untuk diperiksa. Bagian yang belum dipahami boleh disimpan dahulu — tidak perlu berpura-pura paham. Situs ini tidak menyusun daftar bacaan wajib baru dari bagian ini.",
        },
        {
          lead: "Meditasi duduk setiap hari.",
          text: "Penulis meminta agar, di sela pekerjaan dan kehidupan, setiap hari disisihkan 40–90 menit untuk masuk ke dalam “kesucian” dan “penghormatan” melalui “keheningan”. Dengan kiasan air keruh yang mengendap, ia menggambarkan pendekatan yang tenang kepada diri sejati, kesadaran hati, dan hubungan dengan Sumber. Hal ini mengandung makna spiritual yang lebih dalam daripada relaksasi biasa maupun tujuan bekerja lebih efisien.",
        },
      ],
    },
    dailyLife: {
      kind: "editorial",
      paragraphs: [
        {
          text: "Kehidupan menyediakan orang dan persoalan yang sungguh harus dihadapi; bacaan memberi bahan untuk memahami kembali; dan meditasi, dalam pandangan penulis, mengendapkan kekacauan serta mendekatkan kepada batin. Ketiganya lalu kembali ke kehidupan dan saling menguatkan. Lingkaran ini adalah penyusunan editor atas tulisan itu; “ketiga unsur itu tidak boleh kurang satu pun” adalah tuntutan yang dinyatakan penulis sendiri, dan tidak boleh diubah menjadi memilih satu saja yang dianggap sama dengan metode lengkapnya.",
        },
      ],
    },
    example: {
      kind: "editorial",
      paragraphs: [
        {
          text: "Seorang pekerja kantoran yang ikut merawat keluarga menyadari bahwa ia selalu tergesa memutuskan demi keluarganya. Ia menjadikan percakapan pembagian tugas hari itu sebagai ladang praktik; saat membaca, ia memilih satu bagian yang menjawab persoalan itu dan mencatat apa yang belum dipahaminya; apabila mengikuti cara penulis, ia kemudian menjadwalkan meditasi duduk 40–90 menit dalam rutinitasnya, lalu kembali ke kehidupan untuk memeriksa caranya bergaul. Ini contoh mengorganisasi ketiganya — bukan prosedur yang menjamin pengalaman batin tertentu.",
        },
      ],
    },
    action: {
      summary: "Untuk hari esok, tetapkan satu tanggung jawab kehidupan yang akan ditunaikan dengan baik, satu bagian bacaan yang ingin dipahami sungguh-sungguh, dan satu slot yang dapat dijadwalkan bagi meditasi duduk 40–90 menit dari buku aslinya.",
      overviewQualifier: "Ini tindakan kecil berupa perencanaan; bukan berarti seluruh amalan penulis telah selesai.",
      steps: "Tuliskan dahulu ketiga hal itu; bila yang ketiga saat ini belum mungkin dijadwalkan, catatlah keterbatasannya secara jujur. Menyelesaikan satu kali perencanaan tidak berarti menyelesaikan seluruh latihan dalam buku aslinya. Situs ini tidak menyediakan meditasi versi pendek maupun teknik pengganti, dan tidak mengesankan bahwa memperpendek waktunya memberikan hasil yang sama.",
      kind: "editorial",
    },
    misunderstandings: {
      kind: "boundary",
      items: [
        {
          question: "Cukup hanya membaca, atau hanya bermeditasi?",
          answer: "Dalam tulisan ini penulis menyatakan dengan tegas bahwa ketiganya diperlukan; di situs ini, membaca dan meditasi tidak dapat menggantikan praktik dalam kehidupan.",
        },
        {
          question: "Jika porosnya pekerjaan, apakah harus terus bekerja lembur?",
          answer: "Yang ditekankan naskah aslinya adalah ikut serta dalam kehidupan; bab pekerjaan dalam 《要開悟讀這本書就夠了》 juga mensyaratkan tidak melanggar hukum dan tidak membahayakan orang lain. Situs ini tidak menjadikan kerja berlebihan atau meninggalkan tanggung jawab merawat sebagai latihan.",
        },
        {
          question: "Bolehkah situs ini mengajarkan teknik napas, postur, dan visualisasi dari buku aslinya?",
          answer: "Bagian yang ditunjuk tidak memuat langkah-langkah lengkapnya, karena itu tidak diciptakan di sini. Naskah asli menyebut beberapa jenis musik pendamping, tetapi itu bukan teknik baru yang ditambahkan situs ini.",
        },
        {
          question: "Apakah mengikuti semua ini pasti tercerahkan?",
          answer: "Jaminan pada akhir buku adalah pernyataan penulis; situs ini tidak mengubahnya menjadi janji layanan. Tidak perlu membeli apa pun, memiliki kualifikasi, atau mengikuti kursus untuk memakai situs ini.",
        },
      ],
    },
    deeper: {
      kind: "plain",
      paragraphs: [
        {
          text: "Seluruh tulisan dimulai pada halaman buku 55 dan berakhir pada halaman 60; bukan hanya daftar pada halaman 57. Seri 〈悟了之後〉 di sekitarnya membahas peran hidup, makna kehidupan, dan perwujudan pribadi penulis. Penulis menggambarkan diri sejati dalam meditasi sebagai kesadaran hati yang berasal dari Sumber dan tidak binasa; situs ini tidak boleh menuliskannya ulang sekadar sebagai latihan konsentrasi.",
        },
        {
          text: "Pada halaman 59 buku aslinya tercantum musik keagamaan, klasik, yoga, suara alam, dan musik spiritual, dengan saran menghindari musik pop; itu pengaturan penulis, bukan verifikasi situs ini atas khasiat musik. Selain itu, 〈生活裡覺醒的第一步／第二步／第三步〉 adalah kelompok tulisan lain dalam 《靈性覺醒》 (Kebangkitan Spiritual) — bukan nama lain bagi tiga tindakan bab ini.",
        },
      ],
      quote: {
        text: "Ketiga unsur ini tidak boleh kurang satu; itulah isi utama latihan saya.",
        attribution: "《靈性覺醒》 (Kebangkitan Spiritual), buku / PDF hlm. 58",
      },
    },
    sourceIds: ["S05", "S06", "S08", "S20"],
    traceability:
      "Sumber utama S05: 《靈性覺醒》, 〈悟了之後（續上篇三）〉 (Setelah Tercerahkan, Lanjutan Bagian Ketiga; Catatan Kebangkitan Qingqi No. 6), buku / PDF hlm. 55–60; daftar pada 57, ketiganya tidak boleh kurang satu serta kehidupan dan bacaan pada 58, meditasi duduk pada 58–59, praktik berkelanjutan dan jaminan penulis pada 60. Konteks S06: seri catatan yang sama No. 4–7, buku / PDF hlm. 47–67. Tambahan S08: 《要開悟讀這本書就夠了》, 〈靈性成長的職業選擇〉 (Pilihan Karier untuk Pertumbuhan Spiritual), buku hlm. 262–264 / PDF 132–133; S20: 《靈性覺醒》, 〈千里之行，始於足下〉 (Perjalanan Seribu Mil Dimulai dari Langkah Kaki), buku / PDF hlm. 228. Kebutuhan, urutan, dan durasi ketiganya adalah klaim buku aslinya; gagasan lingkaran, penjadwalan, dan contoh kehidupan adalah susunan editor.",
  },
  {
    id: "chapter-3",
    order: 3,
    number: "3",
    shortTitle: "Lihat Niat Anda",
    title: "Sebelum Bertindak, Lihatlah Niat Anda Sendiri",
    titleZh: "做事之前，先看自己的動機",
    core: "Penulis berulang kali mengingatkan: hal yang sama, tergantung untuk apa dilakukannya, akan memengaruhi maknanya bagi pertumbuhan spiritual.",
    teaching: {
      kind: "plain",
      paragraphs: [
        {
          text: "《要開悟讀這本書就夠了》 menempatkan “motif dan tujuan” pada kedudukan yang sangat penting. Buku itu memakai pekerjaan sebagai contoh: pekerjaan yang serupa boleh hanya demi upah, boleh juga dibawa dengan kesadaran melayani kepentingan orang lain. Sementara itu, 〈角色〉 dalam 《靈性覺醒》 turut memasukkan motif, altruisme, kesungguhan, dan tanggung jawab ke dalam pemeriksaan peran-peran hidup.",
        },
        {
          text: "Secara sederhana: di samping bertanya “apa yang akan saya lakukan”, tanyakan juga “apa yang ingin saya penuhi, apa yang ingin saya wujudkan”. Namun memeriksa niat baik tidak boleh menjadi alasan pelepas tanggung jawab; bab pekerjaan dalam 《要開悟讀這本書就夠了》 juga secara eksplisit mencantumkan tidak membahayakan orang lain. Latihan di situs ini karenanya memeriksa motif dan dampaknya secara bersamaan.",
        },
      ],
    },
    dailyLife: {
      kind: "editorial",
      paragraphs: [
        {
          text: "Menyampaikan pendapat, menolong, menolak, atau merebut kesempatan bisa bercampur bermacam motif: ingin dipuji, takut kalah, atau sungguh peduli. Mengakui hati yang bercampur lebih menolong perbaikan langkah berikutnya daripada buru-buru mengumumkan diri sepenuhnya tanpa pamrih. Ini pintu praktik yang disusun editor, bukan alat untuk mengukur kemurnian seseorang.",
        },
      ],
    },
    example: {
      kind: "editorial",
      paragraphs: [
        {
          text: "Anda ingin menunjukkan kesalahan rekan kerja dalam rapat. Bila tujuannya sekadar menonjolkan diri, kebutuhan pihak lain dan tim bisa terabaikan. Periksa dahulu datanya, lalu angkat persoalan dengan cara yang dapat memperbaiki keadaan; bila rasa terhina sudah ditimbulkan, akui dampaknya dan perbaiki — jangan menutup pembicaraan dengan “saya ini demi kebaikanmu”.",
        },
      ],
    },
    action: {
      summary: "Sebelum mengambil satu keputusan, tulis satu kalimat — “apa yang saya harapkan dari hal ini” — lalu periksa siapa yang mungkin terdampak.",
      overviewQualifier: "Niat baik tetap bertanggung jawab atas cara dan akibatnya.",
      steps: "Kenali tujuannya; pastikan apakah pihak lain membutuhkan atau menyetujuinya; pilih cara yang akibatnya sanggup Anda tanggung. Setelah itu bertanyalah: “Apakah hasilnya sesuai dengan hal yang semula saya pedulikan? Apa yang perlu diperbaiki?”",
      kind: "editorial",
    },
    misunderstandings: {
      kind: "boundary",
      items: [
        {
          question: "Asal niatnya baik, segala cara boleh?",
          answer: "Situs ini tidak menerima simpulan itu. Contoh-contoh ekstrem pada bab motif buku aslinya memuat risiko salah baca demikian; tidak membahayakan, menghormati pihak lain, dan bertanggung jawab atas hasil adalah batas editor yang dinyatakan situs ini secara terbuka.",
        },
        {
          question: "Menerima gaji atau memenuhi kebutuhan sendiri berarti egois?",
          answer: "Situs ini tidak menilai latihan seseorang dari penghasilan atau kebutuhan dasar. Titik masuk dari bab pekerjaan buku aslinya adalah mulai dari pekerjaan Anda sekarang, memakai kemampuan untuk melayani.",
        },
        {
          question: "Harus tanpa kebutuhan diri sama sekali baru boleh bertindak?",
          answer: "Yang bab ini tawarkan adalah pemeriksaan yang jujur beserta perbaikannya; tidak ada ambang niat sempurna untuk ikut serta.",
        },
      ],
    },
    deeper: {
      kind: "plain",
      paragraphs: [
        {
          text: "Penulis mengaitkan motif dengan Sumber, karma, dan perkembangan spiritual — bukan sekadar keterampilan pergaulan. Kedua buku sama-sama menghargai maksud batin; namun dalam 《要開悟讀這本書就夠了》 ada ketegangan antara rumusan mutlak pada bab motif dan tuntutan “tidak membahayakan” pada bab pekerjaan. Situs ini mempertahankan perbedaan itu, dan tidak mengklaim bahwa penulis telah mengajukan ukuran etis yang bebas kontradiksi.",
        },
      ],
    },
    sourceIds: ["S07", "S08", "S15"],
    traceability:
      "S07: 《要開悟讀這本書就夠了》, 〈「動機和目的」的重要性〉 (Pentingnya “Motif dan Tujuan”), buku hlm. 59–69 / PDF 30–35 — intinya pada 60–62, contoh pekerjaan pada 68–69; risiko editor atas contoh ekstrem pada 61 dan 66–67. S08: 〈靈性成長的職業選擇〉 (Pilihan Karier untuk Pertumbuhan Spiritual), buku hlm. 262–263 / PDF 132. S15: 《靈性覺醒》, 〈角色〉 (Peran; Catatan Kebangkitan Qingqi No. 117), buku / PDF hlm. 256. Pentingnya motif adalah klaim buku aslinya; skenario rapat, pertanyaan pemeriksaan, serta langkah persetujuan dan perbaikan dalam bab ini adalah susunan editor.",
  },
  {
    id: "chapter-4",
    order: 4,
    number: "4",
    shortTitle: "Tindakan Altruistis",
    title: "Jadikan Altruisme sebagai Tindakan yang Terlihat",
    titleZh: "讓利他成為看得見的行動",
    core: "Penulis menempatkan peningkatan moral, kontribusi, dan pelayanan pada inti tujuan hidup, dan menuntut semuanya diamalkan dalam perilaku sehari-hari.",
    teaching: {
      kind: "plain",
      paragraphs: [
        {
          text: "Dalam 《要開悟讀這本書就夠了》, 〈複習「生命最高的目的」〉 (Meninjau Ulang “Tujuan Tertinggi Kehidupan”) menempatkan pelayanan dan kontribusi pada kedudukan yang sangat tinggi: bukan hanya menghimpun pengetahuan atau pengalaman sendiri, tetapi juga mendatangkan manfaat bagi kehidupan lain. 《靈性覺醒》 menerangkan arah hidup melalui pelayanan, pertolongan, dan kasih. Kedua buku menuntut pemahaman diwujudkan dalam perbuatan, bukan berhenti pada semboyan.",
        },
        {
          text: "《要開悟讀這本書就夠了》 juga mengkritik memperlakukan perbuatan baik sebagai transaksi: memberi demi menukar berkat, pahala, atau capaian latihan. Ini bukan berarti semua bantuan yang disengaja tidak dihitung, melainkan peringatan agar tidak menjadikan orang lain sekadar alat memperoleh imbalan. Altruisme dapat dijalankan dalam pekerjaan dan kehidupan sehari-hari, tanpa harus lebih dahulu memiliki kekayaan, gelar, atau lingkup pelayanan yang luas.",
        },
      ],
    },
    dailyLife: {
      kind: "editorial",
      paragraphs: [
        {
          text: "Menyiapkan serah terima yang tertata, menyatakan keterbatasan dengan jujur, menuntaskan bagian tugas yang dijanjikan — hal-hal seperti ini dapat meringankan hidup orang lain. Situs ini menempatkan “bermanfaat” pada kebutuhan nyata pihak lain, dan tidak menjadikan besar-kecilnya sumbangan, tingkat kesibukan, atau banyaknya pujian sebagai ukuran hasil latihan.",
        },
      ],
    },
    example: {
      kind: "editorial",
      paragraphs: [
        {
          text: "Rekan baru berulang kali menanyakan prosedur yang sama, dan semula Anda jengkel. Anda mencermati dahulu di bagian mana ia tersangkut, lalu menyiapkan satu lembar langkah ringkas dan mengajaknya mencoba sekali. Hal ini tidak perlu penghargaan terbuka, dan Anda tidak perlu mengambil alih seluruh pekerjaannya; apakah bantuan itu berguna dapat dilihat dari kemampuannya menyelesaikan sendiri setelahnya.",
        },
      ],
    },
    action: {
      summary: "Tanyakan kepada satu orang di dekat Anda apa yang ia butuhkan, lalu tuntaskan satu bantuan kecil yang sanggup Anda lakukan.",
      overviewQualifier: "Tidak perlu lebih dahulu punya kekayaan, gelar, atau banyak penerima bantuan.",
      steps: "Pastikan kebutuhannya; katakan dengan jelas rentang yang sanggup Anda lakukan; setelah selesai, dengarkan tanggapannya. Bila ia tidak membutuhkan, hargai penolakannya; bila tidak sanggup, jujur mengubah jadwal atau membatalkan janji. Ini cara penjabaran dari para editor.",
      kind: "editorial",
    },
    misunderstandings: {
      kind: "boundary",
      items: [
        {
          question: "Altruisme berarti terus mengorbankan diri?",
          answer: "Situs ini tidak mencantumkan menghabiskan diri, menyembunyikan batas kemampuan, atau melepaskan kebutuhan dasar sebagai syarat.",
        },
        {
          question: "Hanya kerja sukarela, kegiatan keagamaan, atau sumbangan besar yang dihitung?",
          answer: "Buku aslinya berulang kali memasukkan pekerjaan dan hal-hal kecil di sekitar kita ke dalam praktik, tanpa ambang kedudukan.",
        },
        {
          question: "Setelah berbuat baik, orang pasti berterima kasih dan takdir pasti membaik?",
          answer: "Penulis memegang keyakinan tentang timbal balik spiritual; situs ini tidak mencantumkan balasan orang lain maupun hasil di masa depan sebagai jaminan.",
        },
      ],
    },
    deeper: {
      kind: "plain",
      paragraphs: [
        {
          text: "Dalam pandangan penulis, lingkup pelayanan dapat menjangkau berbagai bentuk kehidupan, dan berkaitan dengan Sumber serta kenaikan spiritual (ascension); bukan sekadar membuat diri sendiri merasa enak. Buku aslinya memuat kata-kata keras yang mengkritik kepentingan diri. Pendekatan “sesuai kemampuan, pastikan kebutuhan, hargai penolakan” pada bab ini adalah pengaturan editor yang dirancang bagi pembaca umum; ia tidak menyamar sebagai teori perawatan diri yang telah diuraikan lengkap oleh buku aslinya.",
        },
      ],
    },
    sourceIds: ["S09", "S10", "S08", "S21"],
    traceability:
      "S09: 《要開悟讀這本書就夠了》, 〈複習「生命最高的目的」〉 (Meninjau Ulang “Tujuan Tertinggi Kehidupan”), buku hlm. 100–105 / PDF 51–53, dengan pelayanan dan kontribusi terpusat pada 104–105. S10: 〈所有的靈性成長，沒有一絲一毫能夠用交易行為取得〉 (Tidak Ada Pertumbuhan Spiritual, Sedikit Pun, yang Dapat Diperoleh Melalui Transaksi), buku hlm. 34–38 / PDF 18–20; pembedaan transaksi dan bantuan sehari-hari pada 34–36. S08: 〈靈性成長的職業選擇〉, buku hlm. 263–266 / PDF 132–134. S21: 《靈性覺醒》, 〈開悟者的超級意識和信念〉 (Kesadaran Super dan Keyakinan Orang yang Tercerahkan; Catatan 32), buku / PDF hlm. 154. Contoh sehari-hari dan tindakan kecil tiga langkah adalah susunan editor.",
  },
  {
    id: "chapter-5",
    order: 5,
    number: "5",
    shortTitle: "Kasih dan Hormat",
    title: "Berlatih Kasih Sayang dan Hormat dari Hubungan Terdekat",
    titleZh: "從身邊關係，練習關愛與尊重",
    core: "Penulis memandang keluarga dan peran-peran hidup sebagai ladang penting untuk mengamalkan kasih, dan mengingatkan agar tidak melupakan pergaulan serta tanggung jawab yang ada di depan mata.",
    teaching: {
      kind: "plain",
      paragraphs: [
        {
          text: "Dalam 《靈性覺醒》, 〈生活裡覺醒的第三步〉 mengingatkan pembaca agar tidak hanya mengejar kedudukan atau capaian yang jauh sambil meninggalkan keluarga dan peran-peran di dekatnya. 〈角色〉 menempatkan moral, altruisme, kesungguhan, dan tanggung jawab ke dalam pemeriksaan berbagai peran; 〈讓孩子去實現他的未來〉 mengungkapkan kasih melalui gambaran mendukung anak melangkah ke jalan hidupnya.",
        },
        {
          text: "〈神性基因（下）〉 dalam 《要開悟讀這本書就夠了》 mengatakan bahwa kasih sayang tidak boleh berhenti pada makan bersama atau damai secara lisan; diperlukan ketulusan dari dalam, dan disadari bahwa pihak lain tetap memiliki pelajarannya sendiri. Secara sederhana: yang dapat Anda tanggung adalah bagaimana Anda memperlakukan orang dan apakah janji ditunaikan; Anda tidak dapat memikul seluruh reaksi orang lain ke diri Anda.",
        },
      ],
    },
    dailyLife: {
      kind: "editorial",
      paragraphs: [
        {
          text: "Latihan dalam hubungan biasanya kecil, tetapi terjadi berulang-ulang: apakah Anda mendengarkan sampai selesai, apakah Anda menunaikan bagian tugas yang dijanjikan, apakah Anda menjadikan harapan sendiri sebagai kewajiban pihak lain. Situs ini mempertahankan penekanan buku aslinya pada keluarga, sekaligus membuka contoh bagi sahabat, teman serumah, rekan kerja, dan hubungan perawatan; pernikahan atau bentuk keluarga tertentu tidak dijadikan syarat.",
        },
      ],
    },
    example: {
      kind: "editorial",
      paragraphs: [
        {
          text: "Jurusan yang dipilih anak Anda berbeda dari harapan Anda. Anda mendengarkan dahulu apa yang ingin ia pelajari dan kesulitan apa yang ia siap hadapi, lalu menjelaskan dukungan yang dapat diberikan beserta batasnya yang nyata. Kepedulian tidak perlu ditutup dengan “baru disebut kasih jika sesuai susunan saya”. Contoh ini bergema dengan dukungan buku aslinya terhadap anak yang menempuh jalannya sendiri, tetapi dialognya yang konkret disusun oleh editor.",
        },
      ],
    },
    action: {
      summary: "Cari satu hubungan yang aman dan terbuka untuk berinteraksi; tanyakan satu kebutuhan secara jelas, dan tunaikan satu janji kecil.",
      overviewQualifier: "Kasih sayang tidak menuntut Anda menahan penderitaan, dan tidak dapat menjamin pihak lain menanggapi sesuai harapan Anda.",
      steps: "Dengarkan jawaban orang itu tanpa buru-buru menjawab baginya; katakan hal yang sanggup Anda lakukan; sepakati waktu yang dapat ditunaikan. Bila ia tidak ingin berbicara, hargai itu lebih dahulu; bila suatu hubungan menimbulkan penderitaan, perdamaian atau kontak dengan orang itu bukanlah tugas bab ini.",
      kind: "editorial",
    },
    misunderstandings: {
      kind: "boundary",
      items: [
        {
          question: "Mengasihi keluarga berarti menerima segala perlakuan?",
          answer: "Itu bukan tuntutan praktik situs ini. Kasih sayang tidak berarti menerima kekerasan, menghapus batas, atau menyerah mencari pertolongan.",
        },
        {
          question: "Kalau pihak lain tidak berubah, berarti saya kurang tulus?",
          answer: "Buku aslinya juga membedakan pelajaran diri sendiri dan pihak lain; situs ini tidak menjanjikan pemberian pasti beroleh tanggapan.",
        },
        {
          question: "Tanpa pasangan, anak, atau keluarga dekat, latihan tidak mungkin dilakukan?",
          answer: "Buku aslinya memuat ungkapan yang menekankan keluarga tradisional, tetapi 〈角色〉 juga membicarakan teman sekelas, sahabat, dan rekan kerja. Situs ini tidak mengukur kelayakan berlatih dari status keluarga.",
        },
      ],
    },
    deeper: {
      kind: "plain",
      paragraphs: [
        {
          text: "Penulis memahami hubungan keluarga melalui ikatan karma, susunan hidup, dan perwujudan kasih; itu penjelasan spiritual dari buku aslinya. Pembaca dapat memahami latar itu tanpa harus menjelaskan semua kesulitan hubungan sebagai tanggung jawab dari kehidupan lampau. Keamanan, persetujuan, dan penghormatan atas penolakan adalah batas editor situs ini; tidak diklaim sebagai teori yang telah diuraikan secara sistematis oleh buku aslinya.",
        },
      ],
    },
    sourceIds: ["S11", "S12", "S13", "S14", "S15", "S03"],
    traceability:
      "S11: 《靈性覺醒》, 〈生活裡覺醒的第三步〉 (Langkah Ketiga Kebangkitan dalam Kehidupan Sehari-hari; Catatan 27), buku / PDF hlm. 133–137. S12: 〈讓孩子去實現他的未來〉 (Biarkan Anak Mewujudkan Masa Depannya; Catatan 51), hlm. 179. S13: 〈帶著內在胸懷的愛給家人祝福〉 (Memberkati Keluarga dengan Kasih dari Batin; Catatan 52), hlm. 180. S14: 〈夫妻關係和婚姻〉 (Hubungan Pasangan dan Pernikahan; Catatan 59), hlm. 188. S15: 〈角色〉 (Peran), hlm. 256. S03: 《要開悟讀這本書就夠了》, 〈神性基因（下）〉 (Gen Ilahi, Bagian Ketiga), buku hlm. 186–187 / PDF 94. Peran dan kasih sayang adalah klaim buku aslinya; berbagai latar kehidupan, langkah bertanya, dan batas keamanan adalah susunan editor.",
  },
  {
    id: "chapter-6",
    order: 6,
    number: "6",
    shortTitle: "Sesuaikan Respons Anda",
    title: "Ketika Ada yang Tak Beres, Sesuaikan Respons Anda Sendiri",
    titleZh: "面對不順，調整自己的回應",
    core: "Kedua buku sama-sama memandang kesulitan sebagai ladang belajar, dan menekankan pemeriksaan cara Anda menanggapi orang dan persoalan di depan mata.",
    teaching: {
      kind: "plain",
      paragraphs: [
        {
          text: "Dalam 《靈性覺醒》, 〈眼前所困，即其所解〉 menempatkan kesulitan dalam peta hidup versi penulis: menurut penjelasannya, hal yang saat ini sulit dilalui adalah pelajaran yang telah dipilih sebelum lahir dan yang perlu dialami serta diseimbangkan. Itu penjelasan spiritual penulis. 《要開悟讀這本書就夠了》 memakai kisah satu peristiwa kecil yang memicu rangkaian konflik, mengingatkan pembaca untuk mencermati cara menanganinya; 〈中庸與情緒涵養〉 membahas memahami asal-usul perkara, kesabaran, dan ukuran dalam menyampaikan emosi.",
        },
        {
          text: "Bagian yang dapat dijalankan, oleh situs ini, dirangkum demikian: akui bahwa hal itu telah terjadi, akui pula perasaan Anda sendiri, lalu kenali tindakan yang masih dapat diambil. Ini bukan berarti semua kesulitan adalah buatan sendiri, atau bahwa sikap yang benar pasti menyelesaikannya.",
          kind: "boundary",
        },
      ],
    },
    dailyLife: {
      kind: "editorial",
      paragraphs: [
        {
          text: "Kita belum tentu dapat menentukan aturan orang lain, sumber daya, atau kejadian mendadak, tetapi kita dapat memeriksa kalimat kita yang berikutnya, apakah fakta sudah diperiksa, dan apakah bantuan orang lain diperlukan. Menyesuaikan respons dan menuntut penanganan yang wajar dapat berjalan pada saat yang sama.",
        },
      ],
    },
    example: {
      kind: "editorial",
      paragraphs: [
        {
          text: "Sebuah usulan yang lama Anda siapkan dikembalikan. Anda kecewa dan ingin menyalahkan rekan kerja. Anda lebih dahulu mengakui kekecewaan itu, memastikan alasan pengembaliannya, lalu menyepakati bagian yang dapat diperbaiki. Bila ada tuntutan yang tidak wajar, nyatakan batas Anda dengan jelas dan cari penyelesaian bersama; tidak perlu lebih dahulu meyakinkan diri bahwa “semua ini baik-baik saja”.",
        },
      ],
    },
    action: {
      summary: "Pilih satu hal yang tak beres dan tuliskan: “apa yang terjadi, apa yang saya rasakan, satu langkah yang dapat saya ambil sekarang”.",
      overviewQualifier: "Mengakui derita dan mengambil tindakan dapat berjalan bersamaan; itu tidak berarti semua kesulitan berasal dari diri sendiri.",
      steps: "Pilih satu hal saja, yang sedang di tangan; sebutkan perasaan itu dengan jelas, tanpa menilai tinggi-rendahnya; pilih satu tindakan nyata — bertanya, memperbaiki, menyatakan batas, atau mencari bantuan. Besok, tinjau apakah sudah dilakukan dan apa yang perlu disesuaikan. Ini bukan teknik menulis tetap dari buku aslinya.",
      kind: "editorial",
    },
    misunderstandings: {
      kind: "boundary",
      items: [
        {
          question: "Berpikir positif berarti tidak boleh sedih atau marah?",
          answer: "Bab emosi dalam 《要開悟讀這本書就夠了》 membolehkan penyampaian yang wajar; 《靈性覺醒》 juga menulis bahwa derita boleh diucapkan. Situs ini tidak menuntut pengekangan, apalagi menilai latihan orang dari emosinya.",
        },
        {
          question: "Kalau menerima kejadian, tidak boleh lagi memprotes atau meminta tolong?",
          answer: "Situs ini membedakan mengakui keadaan dari menyetujui penderitaan; Anda boleh melindungi diri, menangani persoalan, dan menuntut perlakuan yang wajar.",
        },
        {
          question: "Sembilan puluh persen kehidupan dikuasai sendiri?",
          answer: "Bab-bab terkait dalam 《要開悟讀這本書就夠了》 memuat pernyataan berbentuk rasio; situs ini tidak menjadikan rasio itu maupun atribusi psikologis terkait sebagai fakta terverifikasi, juga tidak memakainya sebagai rumus untuk menyalahkan orang.",
        },
      ],
    },
    deeper: {
      kind: "plain",
      paragraphs: [
        {
          text: "Yang dibicarakan penulis bukan sekadar teknik menghadapi keadaan, melainkan pengalaman jiwa, penyeimbangan karma, dan pertumbuhan hidup. Pembaca dapat lebih dahulu memahami keyakinan itu, lalu memutuskan sendiri bagaimana menilainya; melakukan satu respons yang bertanggung jawab tidak mengharuskan menerima bahwa “penderitaan diatur sendiri sebelum lahir” sebagai pendiriannya.",
        },
        {
          text: "Buku aslinya menuntut emosi dengan kadar yang berbeda-beda: sebagian bagian menekankan kepositifan penuh, sementara 〈中庸與情緒涵養〉 berpendapat bahwa penyampaian harus wajar. Situs ini mengambil arah editorial “kenali perasaan, periksa perilaku, perbaiki bila perlu”, dan mempertahankan perbedaan antar-sumber secara terbuka.",
        },
      ],
    },
    sourceIds: ["S18", "S19", "S16", "S17"],
    traceability:
      "S18: 《靈性覺醒》, 〈眼前所困，即其所解〉 (Kesulitan di Depanmu adalah Penyelesaiannya; Catatan 31), buku / PDF hlm. 150–153. S19: 〈生活裡覺醒的第二步〉 (Langkah Kedua Kebangkitan dalam Kehidupan Sehari-hari; Catatan 20), hlm. 117–120, dengan pengakuan derita pada 117. S16: 《要開悟讀這本書就夠了》, 〈費斯汀格法則與靈性成長的陷阱〉 (Aturan Festinger dan Jebakan Pertumbuhan Spiritual), buku hlm. 238–244 / PDF 120–123, kisah reaksi terutama pada 238–240. S17: 〈中庸與情緒涵養〉 (Jalan Tengah dan Pembinaan Emosi), buku hlm. 496–502 / PDF 249–252 — penyampaian yang wajar pada 497–499, memahami asal-usul perkara pada 502. Latihan menulis perasaan, pilihan mencari bantuan, dan contoh usulan adalah susunan editor.",
  },
];

export function getChapter(id: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.id === id);
}
