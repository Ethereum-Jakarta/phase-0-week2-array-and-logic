let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

let namaBulan = (bulan) => {
    switch (bulan) {
    case '01':
        return 'Januari';
    case '05':
        return 'Mei';
    }
}

function dataHandling2(input) {
    input[1]+='Elsharawy'
    input[2] = 'Provinsi ' + input[2]
    input.splice(4,1, 'Pria', 'SMA Internasional METRO')

    let kelahiran = input[3].split('/').join('-')

    let month = input[3].split('/')
    month.splice(0,0, month.pop())

    let bulan = namaBulan(month[2])

    let nama = input[1].slice(0,15)


    console.log(input)
    console.log(bulan)
    console.log(month)
    console.log(kelahiran)
    console.log(nama)
}

dataHandling2(input);
