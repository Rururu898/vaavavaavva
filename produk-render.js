const produkList = document.getElementById("produkList");
const kategoriAktif = document.body.dataset.kategori;

function tampilkanProduk(){
    if(!produkList || !kategoriAktif) return;

    const hasil = dataProduk.filter(item => item.kategori === kategoriAktif);

    if(hasil.length === 0){
        produkList.innerHTML = `
            <div class="empty-produk">
                <h3>Produk belum tersedia</h3>
                <p>Silakan tambahkan data produk pada file produk-data.js.</p>
            </div>
        `;
        return;
    }

    produkList.innerHTML = hasil.map(item => `
        <div class="produk-detail-card">
            <img src="${item.gambar || 'placeholder-produk.png'}" alt="${item.nama}">

            <div class="produk-detail-content">
                <h3>${item.nama}</h3>
                <p>${item.deskripsi}</p>

                <ul class="produk-info">
                    <li>Warna: ${item.warna}</li>
                    <li>Ukuran: ${item.ukuran}</li>
                    <li>Isi: ${item.isi}</li>
                </ul>
            </div>
        </div>
    `).join("");
}

tampilkanProduk();
