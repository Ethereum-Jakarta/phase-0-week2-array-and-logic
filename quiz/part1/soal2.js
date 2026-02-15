let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input){
    input[1] += "Elsharawy"
    input.push("Pria")
    input.push("SMA Internasional Metro")
    input[2] += "Provinsi"
    let tanggal = input[3].split('/')
    let bulan = tanggal[1]

    let bulanNama = {
        "01" : "Januari", "02" : "Februari","03" : "Maret", "04":"April", "05":"Mei",
        "06":"Juni", "07":"Juli","08":"Agustus","09":"September","10":"Oktober", "11":"November","12":"Desember"
    }

    let tanggalTerbalik = [tanggal[2], tanggal[0], tanggal[1]]

    nama = input[1].substring(0,15)
    
    console.log(input)
    console.log(bulanNama[bulan])
    console.log(tanggalTerbalik)
    console.log(tanggal.join('-'))
    console.log(nama)


}

dataHandling(input)
