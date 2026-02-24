let input = [
    "0001",
    "Roman Alamsyah ",
    "Bandar Lampung",
    "21/05/1989",
    "Membaca"
];

function dataHandling(input) {
    let lengkap = input.toSpliced(
        1,
        Infinity,
        "Roman Alamsyah Elsharawy",
        "Provinsi Bandar Lampung",
        "21/05/1989",
        "Pria",
        "SMA Internasional Metro"
    );
    console.log(lengkap);

    let mei = input.slice(3, 4);
    mei.splice(0, 1, "Mei");
    console.log(mei[0]);

    let ttl = [input[3].slice(6), input[3].slice(0, 2), input[3].slice(3, 5)];
    console.log(ttl);

    let ttl2 = ttl.slice(1).concat(ttl.slice(0, 1)).join("-");
    console.log(ttl2);

    let batas = lengkap[1].slice(0, 15);
    console.log(batas);
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
