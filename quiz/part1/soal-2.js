// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    input.splice(4, 1, "pria", "SMA Internasional Metro")

    console.log(input)

    let pemecah = input[3].split("/");
    let bulanAngka = pemecah[1]
    let bulan;

    switch(bulanAngka) {
        case "01":
            bulan = "januari"
            break
        case "02":
            bulan = "februari"
            break
        case "03":
            bulan = "maret"
            break
        case "04":
            bulan = "april"
            break
        case "05":
            bulan = "mei"
            break
        case "06":
            bulan = "juni"
            break
        case "07":
            bulan = "juli"
            break
        case "08":
            bulan = "agustus"
            break
        case "09":
            bulan = "september"
            break
        case "10":
            bulan = "oktober"
            break
        case "11":
            bulan = "november"
            break
        case "12":
            bulan = "desember"
            break
    }
    console.log(bulan)

    let tanggal = [pemecah[2], pemecah[0], pemecah[1] ]
    console.log(tanggal)

    console.log(pemecah.join("-"))

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