// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(data) {
    data.splice(1, 1, "Roman Alamsyah Elsharawy");
    data.splice(2, 1, "Privinsi Bandar Lampung");
    data.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(data)

    let tanggal = data[3].split("/");
    let bulan = tanggal[1];
    switch(bulan) {
        case "01": bulan = "Januari"; break;
        case "02": bulan = "Februari"; break;
        case "03": bulan = "Maret"; break;
        case "04": bulan = "April"; break;
        case "05": bulan = "Mei"; break;
        case "06": bulan = "Juni"; break;
        case "07": bulan = "Juli"; break;
        case "08": bulan = "Agustus"; break;
        case "09": bulan = "September"; break;
        case "10": bulan = "Oktober"; break;
        case "11": bulan = "November"; break;
        case "12": bulan = "Desember"; break;
    }
    console.log(bulan);

    let tanggalSort = tanggal.slice();
    console.log([tanggalSort[2], tanggalSort[0], tanggalSort[1]]);

    console.log(tanggal.join("-"));

    let namaTerbatas = data[1].slice(0, 15);
    console.log(namaTerbatas);
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

