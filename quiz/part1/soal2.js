//pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input.splice(4, 1, "pria");
    input.push("SMA Internasional Metro")
    console.log(input);

    let tanggal = input[3];
    let berubah = tanggal.split("/");
    let bulan = berubah[1];
    switch (bulan) {
        case "01" : bulan = "Januari"; break;
        case "02" : bulan = "Februari"; break;
        case "03" : bulan = "Maret"; break;
        case "04" : bulan = "April"; break;
        case "05" : bulan = "Mei"; break;
        case "06" : bulan = "Juni"; break;
        case "07" : bulan = "Juli"; break;
        case "08" : bulan = "Agustus"; break;
        case "09" : bulan = "September"; break;
        case "10" : bulan = "Oktober"; break;
        case "11" : bulan = "November"; break;
        case "12" : bulan = "Desember"; break;
    }
    console.log(bulan);

    let hasil = [berubah[2], berubah[0], berubah[1]];
    console.log(hasil);

    let berubah2 = tanggal.split("/").join("-");
    console.log(berubah2);  

    let nama=input[1].slice(0,15);
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

