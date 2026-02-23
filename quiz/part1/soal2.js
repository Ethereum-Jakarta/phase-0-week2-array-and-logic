let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    // OUTPUT 1
    console.log(input);
    // OUTPUT 2
    let pickMonth = input[3].substring(3, 5);
    console.log(monthConverter(parseInt(pickMonth)));
    // OUTPUT 3
    let year = input[3].substring(6, 10)
    let date = input[3].substring(0, 2)
    let month = input[3].substring(3, 5)
    console.log([year, date, month])
    // OUTPUT 4
    console.log(input[3].replace(/\//g, "-"))
    // OUTPUT 5
    console.log(input[1].substring(0, 15))

}

function monthConverter(number) {
    const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    if (1 >= number <= 12){
        const idx = number - 1 ;
        return months[idx];
    } else{
        return "Invalid Number of Months"
    }
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