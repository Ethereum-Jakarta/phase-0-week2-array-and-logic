
// Soal 2 
// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya

// let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

// function dataHandling(input) {

// }

// dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */

// ==== ALGORITMA ====
// 1. Buat function dataHandling(input) yang menerima sebuah argument array 
// 2. Gunakan method .slice() untuk membuat array baru
// 3. Gunakan method .splice() untuk menghapus dan menambahkan elemen pada array yang sudah di copy
// 4. Buat variable baru bernama tanggal lalu masukan tanggal kedalam varaible ini, lalu gunakan method .split('/')
// 5. Gunakan switce case condition untuk mengubah nomor bulan menjadi nama bulan nya
// 6. Tampilkan format tanggal yang belum di gabungkan ["1989", "21", "05"]
// 7. Gunakan method .join('-') untuk mengabungkan tanggal



function dataHandling(input) {
    let input2 = input.slice();
    input2.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    input2.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input2);

    let tanggal = input2[3].split('/');
    let bulan = tanggal[1];

    switch (bulan) {
        case '01':
            bulan = 'Januari';
            break;
        case '02':
            bulan = 'Febuari';
            break;
        case '03':
            bulan = 'Maret';
            break;
        case '04':
            bulan = 'April';
            break;
        case '05':
            bulan = 'Mei';
            break;
        case '06':
            bulan = 'Juni';
            break;
        case '07':
            bulan = 'Juli';
            break;
        case '08':
            bulan = 'Agustus';
            break;
        case '09':
            bulan = 'September';
            break;
        case 10:
            bulan = 'Oktober';
            break;
        case 11:
            bulan = 'November';
            break;
        case 12:
            bulan = 'Desember';
        default:
            break;
    }

    console.log(bulan);
    console.log(tanggal.reverse());
    console.log(tanggal.reverse().join('-'));
    console.log(input2[1].split('').splice(0,15).join(''));

}

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling(input)

/*
[
  '0001',
  'Roman Alamsyah Elsharawy',
  'Provinsi Bandar Lampung',
  '21/05/1989',
  'Pria',
  'SMA Internasional Metro'
]
Mei
[ '1989', '05', '21' ]
21-05-1989
Roman Alamsyah 
*/