let input = ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"];

function dataHandling2(input) {
    console.log(input);
    
    let bulan = input[3].substring(3,5);
    if (bulan === "05") {
        console.log("Mei");
    }
    
    let tahun = input[3].substring(6,10);
    let tanggal = input[3].substring(0,2);
    let ketiga =[];
    ketiga.splice(3, 0, `${tahun}`, `${tanggal}`, `${bulan}`);
    console.log(ketiga);

    console.log(`${ketiga[0]}-${ketiga[1]}-${ketiga[2]}`)

    console.log(input[1].substring(0,15));
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
