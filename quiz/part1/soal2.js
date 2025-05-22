let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input[1] = "Roman Alamsyah Elsharawy";
    input[2] = "Provinsi Bandar Lampung";
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);

    let date = input[3].split('/');
    let month = date[1];
    let nameMonth = '';

    switch (month) {
        case '05': nameMonth = 'Mei'; break;
        default: console.log('Invalid bulan');
    }
    console.log(nameMonth);

    let sortDate = [date[2], date[0], date[1]];
    console.log(sortDate);

    let addStrip = date.join('-');
    console.log(addStrip);

    let nickName = input[1].slice(0, 15);
    console.log(nickName);
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