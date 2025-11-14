// Soal 2 
// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
//            [0]         [1]                [2]               [3]         [4]


function dataHandling2(input) {
// 1
input.splice(1, 1, 'Roman Alamsyah Elsharawy');
input.splice(2, 1, 'Provinsi Bandar Lampung');
input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
console.log(input);

// 2
let tanggal2 = input[3].split('/');
if(tanggal2[1] === '05'){
    tanggal2[1]="Mei";
}
console.log(tanggal2[1]);

// 3
let tanggal3 = input[3].split('/');
for(let i=0; i<tanggal3.length; i++){
    for(let j=0; j<tanggal3.length-1; j++){
        if(Number(tanggal3[j])<Number(tanggal3[j+1])){
            [tanggal3[j], tanggal3[j+1]] = [tanggal3[j+1], tanggal3[j]];
        }
    }
}
console.log(tanggal3);

// 4
let tanggal4 = input[3].split('/').join('-');
console.log(tanggal4);

// 5
let nama = input[1].slice(0, 15);
console.log(nama);
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

// SOAL 2 DONE