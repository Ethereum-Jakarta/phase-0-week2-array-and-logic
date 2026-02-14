
//Soal 2 
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

function dataHandling(input) {
    // Mengubah input
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");

    console.log(input);

    // Mengubah bulan menjadi nam bulan 
    let tanggalAsli = input[3].split("/");
    let nomorBulan = tanggalAsli[1];
    let namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    let bulan = namaBulan[parseInt(nomorBulan) - 1];

    console.log(bulan);

    let decendingTanggal = [...tanggalAsli].sort(function(a,b) {
        return b-a;
    });

    console.log(decendingTanggal);

    let gabungkanTanggal = tanggalAsli.join("-");

    console.log(gabungkanTanggal);

    // Batasi karakter nama
    console.log(input[1].slice(0,15));
}

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling(input);

