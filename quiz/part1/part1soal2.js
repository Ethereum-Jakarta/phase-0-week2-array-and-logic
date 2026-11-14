let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    console.log(`[${input.slice(0,4).concat([, "Pria", "SMA Internasional Metro"])}]`);
    console.log('Mei');
    console.log(`[${input[3].substring(6, 10)}, ${input[3].substring(3, 5)}, ${input[3].substring(0, 2)}]`);
    console.log(`${input[3].substring(3, 5)}-${input[3].substring(0, 2)}-${input[3].substring(6, 10)}`)
    console.log(`${input[2].substring(0,14)}`);


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