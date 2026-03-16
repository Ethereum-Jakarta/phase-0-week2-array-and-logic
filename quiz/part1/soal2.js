let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input[1] = "Roman Alamsyah Elsharawy";
    input[2] = "Provinsi Bandar Lampung";
    input.splice(4,5,"Pria","SMA Internasional Metro");
    console.log(input);

    let [tanggal, bulan, tahun] = input[3].split("/");
    let formatDMY = [tanggal, bulan, tahun];
    let namaBulan = "";
    switch(bulan) {
        case "01": namaBulan = "Januari"; break;
        case "02": namaBulan = "Februari"; break;
        case "03": namaBulan = "Maret"; break;
        case "04": namaBulan = "April"; break;
        case "05": namaBulan = "Mei"; break;
        case "06": namaBulan = "Juni"; break;
        case "07": namaBulan = "Juli"; break;
        case "08": namaBulan = "Agustus"; break;
        case "09": namaBulan = "September"; break;
        case "10": namaBulan = "Oktober"; break;
        case "11": namaBulan = "November"; break;
        case "12": namaBulan = "Desember"; break;
        default: namaBulan = "Nomor bulan tidak valid!";
    }
    console.log(namaBulan);

    let formatYDM = [tahun, tanggal, bulan];
    console.log(formatYDM);
    console.log(formatDMY.join("-"));
    console.log(input[1].slice(0,15));
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