let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
input.splice(1,4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");

let tanggal = input[3].split('/');
let bulan = tanggal[1];
switch (bulan) {
    case '05':
      bulan = 'Mei';
      break;

    default:
        bulan= 'bukan bulan mei';
        break;
}


let splitTanggal = input[3].split('/');
let tanggalTerbalik = [splitTanggal[2], splitTanggal[0], splitTanggal[1]];

let tanggalFormat = input[3].split('/').join("-");

// let nama15Karakter = input.slice(1,2).map(input => input.substring(0,15));
let nama15Karakter = input[1].substring(0, 15);

console.log(input);
console.log(bulan);
console.log(tanggalTerbalik);
console.log(tanggalFormat);
console.log(nama15Karakter);

}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */