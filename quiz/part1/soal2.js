let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    // 1
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);

    // 2
    let tanggal = input[3].split("/");
    let bulan = "";
    switch(tanggal[1]){
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

    // 3
    let format_tanggal_kebalik = [];
    for(let i = tanggal.length - 1;i >=0 ;i--){
        format_tanggal_kebalik.push(tanggal[i]);
    }
    format_tanggal_kebalik.splice(1, 2, "21", "05");
    console.log(format_tanggal_kebalik);

    // 4
    let format_tanggal = tanggal.join("-");
    console.log(format_tanggal);

    // 5
    console.log(input[1].slice(0, 15))
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