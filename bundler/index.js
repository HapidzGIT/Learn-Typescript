"use strict";
function create(Car) {
    console.log(`
    ------
    Terimakasih Pengunjung Telah Membeli 1 unit Mobil Hyundai Dengan spesifikasi Berikut : 
    ------
    nama mobil : ${Car.name}
    model : ${Car.model}
    tahun : ${Car.year}
    warna : ${Car.color}
    Harga Mobil : ${Car.price}
    Dengan Stok Apakah masih ada ? : ${Car.Stock}
    `);
}
const Hyundai = {
    name: 'Hyundai',
    model: 124121,
    year: 2020,
    color: 'White',
    price: 1000000,
    Stock: true,
};
create(Hyundai);
//# sourceMappingURL=index.js.map