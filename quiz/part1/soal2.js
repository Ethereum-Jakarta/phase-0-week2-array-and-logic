let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(1,4,
        "Roman Alamsyah Elsharawy",
        "Provinsi Bandar Lampung",
        "21/05/1989",
        "Pria",
        "SMA Internasional Metro")
    input[3].split("/");
}

let tanggal = ["21", "05", "1989"];

console.log(tanggal.sort());

console.log(input);


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */