let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    //output["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
    input.splice(4,1,"Pria","SMA Internasional Metro");
    input.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    console.log(input);

    //buat array baru untuk tanggal lahir
    let TL = input[3].split('/');

    //output mei
    let bulan;
    switch (TL[1]) {
        case '01': bulan = "Januari"; break;
        case '02': bulan = "Februari"; break;
        case '03': bulan = "Maret"; break;
        case '04': bulan = "April"; break;
        case '05': bulan = "Mei"; break;
        case '06': bulan = "Juni"; break;
        case '07': bulan = "Juli"; break;
        case '08': bulan = "Agustus"; break;
        case '09': bulan = "September"; break;
        case '10': bulan = "Oktober"; break;
        case '11': bulan = "November"; break;
        case '12': bulan = "Desember"; break;
    }
    console.log(bulan);
    
    //output ["1989", "21", "05"]
    let container = TL[2];
    let sliceTL = TL.slice(0,2);
    sliceTL.unshift(container);
    console.log(sliceTL);

    //output 21-05-1989
    console.log(TL.join('-'));

    //output nama 15 karakter
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