let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input.splice(1,2, "Roman Alamsyah Elsharawy", "Provinsi " + input[2]);
    input.splice(4,2, "Pria", "SMA International Metro");
    console.log(input);

    let dateArr = input[3].split("/");
    console.log(ekstractMonth(Number(dateArr[1])));
    dateArr.unshift(dateArr.pop());
    console.log(dateArr);

    console.log(input[3].split("/").join("-"));
    console.log(input[1].slice(0,15));
}

function ekstractMonth(bulan){
    switch(bulan){
        case 1: return "January";
        case 2: return "February";
        case 3: return "Maret";
        case 4: return "April";
        case 5: return "Mei";
        case 6: return "Juni";
        case 7: return "Juli";
        case 8: return "Agustus";
        case 9: return "September";
        case 10: return "Oktober";
        case 11: return "November";
        case 12: return "Desember";
    }
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