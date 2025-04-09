/* Soal 2
pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya*/

let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

input.splice(1, 1, "Roman Alamsyah Elsharawy");
input.splice(2, 1, "Provinsi Bandar Lampung");
input.splice(4, 1, "Pria", "SMA Internasional Metro");
console.log(input);

const hari = input[3].split("/");
const bulan = hari[1];
let namaBulan;
switch (bulan) {
  case "01":
    namaBulan = "Januari";
    break;
  case "02":
    namaBulan = "Februari";
    break;
  case "03":
    namaBulan = "Maret";
    break;
  case "04":
    namaBulan = "April";
    break;
  case "05":
    namaBulan = "Mei";
    break;
  case "06":
    namaBulan = "Juni";
    break;
  case "07":
    namaBulan = "Juli";
    break;
  case "08":
    namaBulan = "Agustus";
    break;
  case "09":
    namaBulan = "September";
    break;
  case "10":
    namaBulan = "Oktober";
    break;
  case "11":
    namaBulan = "November";
    break;
  case "12":
    namaBulan = "Desember";
    break;
}
console.log(namaBulan);

const ttl = [hari[2], hari[0], hari[1]];
console.log(ttl);
console.log(hari.join("-"));

const nama = input[1].slice(0,15)

console.log(nama)

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
