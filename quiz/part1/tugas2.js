//pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya





let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {

input [1] = "Roman Alamsyah Elsharawy";
input [2] = "Provinsi Bandar Lampung";
input.splice(4, 1, "Pria", "SMA Internasional Metro");

console.log(JSON.stringify(input));

let tl = input[3].split("/");
let bulan = tl[1];


switch (bulan) {
    case "01":
        console.log("januari");
        break;
    case "02":
        console.log("februari");
        break;
    case "03":
        console.log("maret");
        break;
    case "04":
        console.log("april");
        break;
    case "05":
        console.log("mei");
        break;
    case "06":
        console.log("juli");
        break;
    case "07":
        console.log("juni");
        break;
    case "08":
        console.log("agustus");
        break;
    case "09":
        console.log("september");
        break;
    case "010":
        console.log("oktober");
        break;
    case "11":
        console.log("november");
        break;
    case "12":
        console.log("desember");
        break;
}
 
console.log(tl[2] + tl[1] + tl[0]);

console.log(tl[0] + "-" + tl[1] + "-" + tl[2]);

console.log(input[1].slice(0, 15));

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