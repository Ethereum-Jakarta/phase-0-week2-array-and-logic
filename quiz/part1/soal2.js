let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.pop();
    input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(input);

    let tanggalLahir = input[3].split("/");
    switch (tanggalLahir[1]) {
        case "05":
            console.log("Mei");
            break;
    }

    let arrYearFirst = [tanggalLahir[2], tanggalLahir[0], tanggalLahir[1]];
    console.log(arrYearFirst);

    console.log(tanggalLahir.join("-"));

    let batasNama = input[1].substring(0,15);
    console.log(batasNama);
    
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