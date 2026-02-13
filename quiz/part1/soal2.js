// ## Soal 2 
// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
// ```js
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {

// method splice 
input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
console.log(input);

// method split
let bulan = input[3].split('/');
if (bulan[1] === '05') {
    console.log("Mei");
}

console.log(`["${bulan[2]}", "${bulan[0]}", "${bulan[1]}"]`);

// method join
let tanggal = bulan.join("-");
console.log(tanggal);

// method slice
let nama = input[1].slice(0, 15);
console.log(nama);

}

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */