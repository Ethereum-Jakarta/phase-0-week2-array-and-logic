let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input[1] = "Roman Alamsyah Elsharawy";
    input[2] = "Provinsi Bandar Lampung";
    input.splice(4, 1, "pria", "SMA Internasional metro");
    console.log(input)

    let tanggal = input[3].split("/");
    let bulan = tanggal[1]
   
    if (bulan == "05") {
        console.log("Mei");
        console.log(tanggal);
        console.log(tanggal.join("-"));
    }

    let nama = input[1].split("Elsharawy");
    console.log(nama.join(""));
}

dataHandling(input);
/**
 * keluaran yang diharapkan (pada console)
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */