// Soal 2 
// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
// js
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) 
{
    let newArray = input.slice(0);
    newArray.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    newArray.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(newArray);

    console.log("Mei");

    let newArrayTanggal = input[3].split("/");
    newArrayTanggal.splice(0, 2, newArrayTanggal[1], newArrayTanggal[0]);
    console.log(newArrayTanggal.reverse());

    console.log(input[3].replaceAll('/', '-'));

    console.log(newArray[1].substring(0, 15));

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