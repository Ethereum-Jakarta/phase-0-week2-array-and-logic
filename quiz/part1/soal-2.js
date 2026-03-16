let input = ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"];

function dataHandling2(input) {
    console.log(input);
    const strDate = input[3].split('/');
    const combineDate = `${strDate[0]}-${strDate[1]}-${strDate[2]}`
    const tgl = `${strDate[2]}-${strDate[1]}-${strDate[0]}`
    const month = new Date(tgl).toLocaleString('default', { month: 'long' });
    console.log(strDate);
    console.log(month);
    console.log(combineDate);
    console.log(input[1].split('', 15).join(''))
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