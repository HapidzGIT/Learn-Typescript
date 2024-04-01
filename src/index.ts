// let nama : string = 'Hafidz';
// let umur : number = 17;
// let isDrink : boolean = false;
// let time : Date = new Date();

// let temanKita : object = {
//     name : 'Teman',
//     kelas : 11,
//     jurusan : 'Teknik Informatika'
// }

// let Variant : any[];
// let Makanan : number | string | boolean;

// Variant = ["Manis", "Gurih", 10];
// Makanan = true

// let Rasa : [number, string, boolean]
// Rasa = [10, "Manis, Gurih", true]

// console.log({Makanan})
// console.log({time})
// console.log({nama});
// console.log({umur});
// console.log({isDrink});
// console.log({Variant})
// console.log({Rasa})
// console.log({temanKita})

//object

// type PriceMobil = {
//     name: string
//     released : number;
//     isBuy : boolean;
//     price : number;
// }

// let Mobil : PriceMobil;

// Mobil = {
//     name : 'Hyundai',
//     released : 2020,
//     isBuy : true,
//     price : 10_00000
// }

// console.log({Mobil})

// Function
// function create() : void {
//     let a = 1
//     let b = 2
//     let z = a + b
//     console.log('AHAHAHAH' + z);
// }

// create()

// function add(a: number, b: number, c: number, d: number) : string {
//     return `${a} ditambah ${b} dan juga ${c} dan ${d} hasilnya adalah : ${a + b + c + d}`;
// }

// const result =  add(30, 40, 50, 60);

// console.log(result)

// function decrease (a: number, b : number, c:number) : string {
//     return `${a} dikurangi ${b} dan juga ${c} hasilnya adalah : ${a - b - c}`
// }

// const result2 = decrease(30, 40, 10);

// console.log(result2)

//UNIION
// type Akhwat = string;
// type Akhwat2 = boolean;

// type AkhwatType = Akhwat | Akhwat2;

// let Akhwat: AkhwatType;

// Akhwat = true
// console.log(Akhwat)

interface Car {
  name: string;
  model: number;
  year: number;
  color: string;
  price: number;
  Stock: boolean;
}
function create(Car: Car): void {
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


