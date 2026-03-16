function dataHandling2(input) {

    input.splice(1, 1, "Roman Alamsyah Elsharawy");
    input.splice(2, 1, "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");

    console.log(input);


    let tanggal = input[3].split("/");
    let Bulan;
    switch (tanggal[1]) {
        case "01":
            Bulan = "Januari";
            break;
        case "02":
            Bulan = "Februari";
            break;
        case "03":
            Bulan = "Maret";
            break;
        case "04":
            Bulan = "April";
            break;
        case "05":
            Bulan = "Mei";
            break;
        case "06":
            Bulan = "Juni";
            break;
        case "07":
            Bulan = "Juli";
            break;
        case "08":
            Bulan = "Agustus";
            break;
        case "09":
            Bulan = "September";
            break;
        case "10":
            Bulan = "Oktober";
            break;
        case "11":
            Bulan = "November";
            break;
        case "12":
            Bulan = "Desember";
            break;
    }
    console.log(Bulan);

    console.log([tanggal[2], tanggal[0], tanggal[1]]);

    console.log(`${tanggal[0]}-${tanggal[1]}-${tanggal[2]}`);

    console.log (input[1].slice(0,15));
}


let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

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