/*
    CARA MENAMBAH BARANG:
    1. Copy salah satu data di bawah.
    2. Ganti kategori, nama, gambar, deskripsi, warna, ukuran, dan isi.
    3. Simpan gambar produk di folder yang sama dengan file HTML.

    kategori yang dipakai contoh: hd, sedotan, gelas, pp
*/

const dataProduk = [
    {
        kategori: "hd",
        nama: "HD Daniel Bening @300 Gram",
        gambar: "daniel_24@300gram.jpeg",
        deskripsi: "Plastik HD bening kualitas kuat dan rapi, cocok untuk kebutuhan toko, packaging, dan usaha sembako.",
        warna: "Bening",
        ukuran: "15 & 24",
        isi: "300 Gram"
    },
    {
        kategori: "hd",
        nama: "HD Tiger Bening @150 Gram",
        gambar: "hd_tiger24@150gram.jpg",
        deskripsi: "Kantong HD bening untuk kebutuhan usaha, packaging makanan, dan toko grosir.",
        warna: "Bening",
        ukuran: "15 & 24",
        isi: "150 Gram"
    },
    {
        kategori: "hd",
        nama: "HD Tiger Bening @3 Ons",
        gambar: "HD TIGER 24 BENING @ 3 ONS.png",
        deskripsi: "Plastik HD warna bening dengan kualitas tebal untuk kebutuhan packaging dan usaha harian.",
        warna: "Bening",
        ukuran: "24",
        isi: "3 Ons"
    },
    {
        kategori: "hd",
        nama: "HD Tiger Merah @3 Ons",
        gambar: "HD TIGER 17 MERAH @ 3 ONS.png",
        deskripsi: "Plastik HD warna merah cocok untuk kebutuhan toko dan packaging usaha.",
        warna: "Merah",
        ukuran: "17 & 24",
        isi: "3 Ons"
    },
    {
        kategori: "hd",
        nama: "HD Tiger Merah @4 Ons",
        gambar: "HD TIGER 28 MERAH @ 4 ONS.png",
        deskripsi: "Plastik HD ukuran besar dengan bahan kuat untuk kebutuhan packaging usaha dan toko.",
        warna: "Merah",
        ukuran: "28",
        isi: "4 Ons"
    },
    {
        kategori: "hd",
        nama: "HD Tiger 35 Putih Susu",
        gambar: "HD TIGER 35 PUTIH SUSU @ 60 PACK.png",
        deskripsi: "Plastik HD putih susu untuk kebutuhan toko, sembako, dan packaging harian.",
        warna: "Putih Susu",
        ukuran: "35",
        isi: "60 Pack"
    },
    {
        kategori: "hd",
        nama: "HD Tiger 40 Putih Susu",
        gambar: "HD TIGER 40 PUTIH SUSU @ 60 PACK.png",
        deskripsi: "Kantong HD ukuran besar dengan kualitas kuat dan cocok untuk usaha grosir.",
        warna: "Putih Susu",
        ukuran: "40",
        isi: "60 Pack"
    },
    {
        kategori: "hd",
        nama: "HD Tiger 50 Putih Susu",
        gambar: "HD TIGER 50 PUTIH SUSU.png",
        deskripsi: "Plastik HD ukuran jumbo untuk kebutuhan packaging dan usaha skala besar.",
        warna: "Putih Susu",
        ukuran: "50",
        isi: "-"
    },
    {
        kategori: "hd",
        nama: "HD Tiger 15 Biru @40 Gram",
        gambar: "HD TIGER 15 BIRU @ 40 gr.png",
        deskripsi: "Plastik HD warna biru dengan ukuran praktis untuk kebutuhan toko dan packaging kecil.",
        warna: "Biru",
        ukuran: "15",
        isi: "40 Gram"
    },
    {
        kategori: "hd",
        nama: "HD Tiger 15 Kuning @40 Gram",
        gambar: "HD TIGER 15 KUNING @ 40 gr.png",
        deskripsi: "Kantong HD warna kuning dengan kualitas ringan dan cocok untuk usaha harian.",
        warna: "Kuning",
        ukuran: "15",
        isi: "40 Gram"
    },
    {
        kategori: "hd",
        nama: "HD Tiger 15 Merah @40 Gram",
        gambar: "HD TIGER 15 MERAH @ 40 gr.png",
        deskripsi: "Plastik HD warna merah untuk kebutuhan packaging toko dan usaha UMKM.",
        warna: "Merah",
        ukuran: "15",
        isi: "40 Gram"
    },
    {
        kategori: "sedotan",
        nama: "Sedotan Hygenis Black 12mm",
        gambar: "hygenis_black_12mm.png",
        deskripsi: "Sedotan plastik ukuran besar untuk minuman boba, milk tea, jus, kopi, dan minuman kekinian.",
        warna: "Hitam",
        ukuran: "12mm",
        isi: "-"
    },
    {
        kategori: "sedotan",
        nama: "Sedotan Bening",
        gambar: "sedotan-bening.jpeg",
        deskripsi: "Sedotan plastik bening untuk minuman dingin seperti es teh, es jeruk, kopi, dan minuman cup.",
        warna: "Bening",
        ukuran: "Standar",
        isi: "-"
    },
    {
        kategori: "sedotan",
        nama: "Sedotan Warna",
        gambar: "sedotan-warna.jpeg",
        deskripsi: "Sedotan warna-warni untuk minuman anak, pesta, event, dan kebutuhan usaha minuman.",
        warna: "Campur",
        ukuran: "Standar",
        isi: "-"
    },
    {
        kategori: "gelas",
        nama: "Gelas Datar Royal 10 Oz",
        gambar: "gelas_royal.png",
        deskripsi: "Gelas plastik datar untuk kebutuhan minuman dingin, usaha jus, kopi, dan minuman cup.",
        warna: "Bening",
        ukuran: "10 Oz",
        isi: "-"
    },
    {
        kategori: "pp",
        nama: "Plastik PP Bening",
        gambar: "",
        deskripsi: "Plastik PP bening untuk kebutuhan kemasan makanan ringan, roti, kue, dan produk usaha.",
        warna: "Bening",
        ukuran: "Beragam",
        isi: "-"
    }
];
