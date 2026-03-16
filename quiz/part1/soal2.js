// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input.splice(1, 1, "Roman Alamsyah Elsharawy");
    input.splice(2, 1, "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");

    console.log(input);

    let tanggal = input[3].split('/');
    let bulan = tanggal[1];
    let namabulan = "";

    switch (bulan) {
        case "01":
            namabulan = "Januari"
        break;
        case "02":
            namabulan = "Februari"
        break;
        case "03":
            namabulan = "Maret"
        break;
        case "04":
            namabulan = "April"
        break;
        case "05":
            namabulan = "Mei"
        break;
        case "06":
            namabulan = "Juni"
        break;
        case "07":
            namabulan = "Juli"
        break;
        case "08":
            namabulan = "Agustus"
        break;
        case "09":
            namabulan = "Seprember"
        break;
        case "10":
            namabulan = "Oktober"
        break;
        case "11":
            namabulan = "November"
        break;
        case "12":
            namabulan = "Desember"
        break;
    }
    console.log(namabulan);

    let tanggalreverse = [tanggal[2], tanggal[0], tanggal[1]];
    console.log(tanggalreverse);

    let tanggalStrip = tanggal.join('-');
    console.log(tanggalStrip);

    let namaPendek = input[1].slice(0, 15);
    console.log(namaPendek);
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