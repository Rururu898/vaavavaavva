const produkList = document.getElementById("produkList");

/* ambil kategori dari nama file html */
const kategoriHalaman =
window.location.pathname
.split("/")
.pop()
.replace(".html", "")
.toLowerCase();

Papa.parse("produk.csv", {
    download: true,
    header: true,

    complete: function(results){

        const data = results.data;

        const filtered = data.filter(item =>
            item.kategori.toLowerCase() === kategoriHalaman
        );

        filtered.forEach(item => {

            produkList.innerHTML += `
            
            <div class="produk-detail-card">

                <img src="${item.gambar}" alt="${item.nama}">

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

            `;
        });

    }
});