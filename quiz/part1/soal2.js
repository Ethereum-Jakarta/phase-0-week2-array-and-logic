//Soal 2 
//pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input[1] = "Roman Alamsyah Elsharawy";
    input[2] = "Provinsi Bandar Lampung";
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);

    let tglLahir = input[3].split("/");
    switch (tglLahir[1]) {
        case "01": console.log("Januari"); break;
        case "02": console.log("Februari"); break;
        case "03": console.log("Maret"); break;
        case "04": console.log("April"); break;
        case "05": console.log("Mei"); break;
        case "06": console.log("Juni"); break;
        case "07": console.log("Juli"); break;
        case "08": console.log("Agustus"); break;
        case "09": console.log("September"); break;
        case "10": console.log("Oktober"); break;
        case "11": console.log("November"); break;
        case "12": console.log("Desember"); break;
    }

    console.log([tglLahir[2], tglLahir[0], tglLahir[1]]);
    console.log(tglLahir.join("-"));
    console.log(input[1].substring(0, 15));
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