let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(1,2 ,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung');
    input.splice(4,1, 'Pria', 'SMA Internasional Metro');
    console.log(input);

    let bulan = input[3].split('/')[1];
    switch(bulan) {
        case '01' : console.log('Januari'); break;
        case '02' : console.log('Februari'); break;
        case '03' : console.log('Maret'); break;
        case '04' : console.log('April'); break;
        case '05' : console.log('Mei'); break;
    }

    let tanggal = input[3].split('/');
    console.log([tanggal[2], tanggal[0], tanggal[1]]);
    console.log(tanggal.join('-'))

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