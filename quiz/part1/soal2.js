// pada soal yg kedua, kalian harus belajar method `split` secara mandiri, pada soal dibawah ini, method ***.split()*** cukup powerfull loh

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input.splice(1, 1, "Roman Alamsyah Elsharawy");
    input.splice(2, 1, "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");

    let tanggal = input[3].split("/");
    let bulan = tanggal[1];
    let tahun = tanggal[2];
    let hari = tanggal[0];
    let nama = input[1].slice(0, 15);

    if(bulan == "05") {
        bulan = "Mei";
    }

    //  * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
    console.log(input);

    // Mei
    console.log(bulan);

    // ["1989", "21", "05"]
    bulan = tanggal[1]
    console.log([tahun, hari, bulan]);

    // 21-05-1989
    console.log(hari + "-" + bulan + "-" + tahun);

    // Roman Alamsyah
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
