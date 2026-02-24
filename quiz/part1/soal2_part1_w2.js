//  Soal 2 
// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
// js
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input.splice(1,2,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung")
    input.splice(4,2, "Pria", "SMA Internasional Metro")
    console.log(input)
    let tanggal = String(input[3]).split('/')
    let bulan = Number(tanggal[1])
    switch(bulan){
        case (1):console.log('Januari'); break;
        case (2):console.log('Februari'); break;     
        case (3):console.log('Maret'); break;
        case (4):console.log('April'); break;
        case (5):console.log('Mei'); break;
        case (6):console.log('Juni'); break;
        case (7):console.log('Juli');  break;
        case (8):console.log('Agustus'); break;
        case (9):console.log('Spetember'); break;
        case (10):console.log('Oktober'); break;
        case (11):console.log('November'); break;
        case (12):console.log('Desember'); break;
    }
    let tahun = tanggal.pop()
    tanggal.unshift(tahun)
    let format_tanggal_baru = String(input[3]).split('/').join('-')
    let nama_pendek = String(input[1]).substring(0,15)
    console.log(tanggal,'\n', format_tanggal_baru,'\n', nama_pendek);
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