// 1. Membuat object literal

// const methodMahasiswa = {
//   beratMakanan: function (porsi) {
//     this.energi += porsi;
//     console.log(`energi saya ${this.energi}`);
//   },
//   olahraga: function (jam) {
//     this.energi -= jam * 2;
//     console.log(`energi saya ${this.energi}`);
//   },
// };

// 2. Membuat function Declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let cetakMhs = Mahasiswa("Arya", 10);
// Mahasiswa("Dody", 20);

// Membuat constructor function

// function Mahasiswa(nama, nim, tinggi, kelas) {
//   this.nama = nama;
//   this.nim = nim;
//   this.tinggi = tinggi;
//   this.kelas = kelas;
// }

// let mhsCetak = new Mahasiswa("Arya", 20102273, "190", "8c");
// console.log(mhsCetak);

// Constructor Function

function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

// Membuat method dengan Prototype

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Saya ${this.nama} telah makan`;
};

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam * 2;
  return `Saya ${this.nama} telah makan`;
};

let arya = new Mahasiswa("Widya", 10);

// Versi Class
class Mobil {
  constructor(liter, merek) {
    this.liter = liter;
    this.merek = merek;
  }
  isiBensin = function (bensin) {
    this.liter += bensin;
    return `Saya ${this.merek} telah makan`;
  };

  perjalanan = function (bensin) {
    this.liter -= bensin;
    return `Saya ${this.merek} telah makan`;
  };
}

let mobil = new Mobil(9, "Avanza");
