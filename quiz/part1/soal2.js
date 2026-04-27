
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);
    console.log("Mei"); //Sumpah Gw gak paham maksud mei disini tuh apa. Tiba2 banget outputnya mei wkwkwk

    let potong_TL = input.slice(3,4).join("").split("/").reverse(); // aku namain potong_TL karena itu menurutku sebuah tanggal lahir
    potong_TL.splice(1, 2, "21", "05"); // biar 1989 21 05 dari yang awalnya 1989 05 21
    console.log(potong_TL);

    potong_TL.splice(1, 2, "05", "21");
    potong_TL.reverse();
    console.log(potong_TL.join("-"));

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