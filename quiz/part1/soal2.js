let data = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input){
    input.splice(1, 4, 'roman alamsyah aja', 'provinsi bandar lampung', '21/05/1989', 'pria', 'sma internasional metro')
    console.log(input);

    let pecah = input[3].split('/')

    let bulan = pecah[1]
    if (bulan === '05'){
        console.log('mei')
    }

    let balik = pecah.slice().reverse()
    console.log(balik)

    console.log(pecah.join('-'))
    
    let nama = input[1].slice(0, 15)
    console.log(nama)
}
dataHandling(data)