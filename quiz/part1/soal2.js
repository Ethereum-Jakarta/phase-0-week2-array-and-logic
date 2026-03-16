    let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    //output1
    input.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
    console.log(input)

    //output2
    let tanggal = input[3].split('/')
    let bulan = tanggal[1]
    let namaBulan = ''

    switch(bulan){
        case '01': namaBulan = 'Januari'; break;
        case '02': namaBulan = 'Febuari'; break;
        case '03': namaBulan = 'Maret'; break;
        case '04': namaBulan = 'April'; break;
        case '05': namaBulan = 'Mei'; break;
        case '06': namaBulan = 'Juni'; break;
    }

    console.log(namaBulan)

    //output3
    let output3 = tanggal.slice()
    output3.sort((a,b) => Number(b) - Number(a))
    console.log(output3)

    //output4
    console.log(tanggal.join("-"))

    //output5
    console.log(input[1].slice(0,14))

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