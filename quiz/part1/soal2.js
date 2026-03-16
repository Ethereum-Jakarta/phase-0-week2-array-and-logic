let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {

    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.pop();
    input.push("Pria", "SMA Internasional Metro");
    console.log(input);

    let mei = input[5][1] + input[5][7] + input[5][12];
    console.log(mei);

    let baris3 = [];
    baris3.push(input[3].substring(6, 10));
    baris3.push(input[3].substring(0, 2));
    baris3.push(input[3].substring(3, 5));
    console.log(baris3);

    let baris4 = `${baris3[1]}-${baris3[2]}-${baris3[0]}`;
    console.log(baris4);

    let baris5 = input[1].substring(0, 15);
    console.log(baris5);
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