
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

//import quiz sebelumnya
function namaBulan(bulan){
    let bulanName;
    switch(bulan){
        case 1:
            bulanName = "Januari";
            break;
        case 2: 
            bulanName = "Februari";
            break;
        case 3:
            bulanName = "Maret";
            break;
        case 4:
            bulanName = "April";
            break;
        case 5:
            bulanName = "Mei";
            break;
        case 6:
            bulanName = "Juni";
            break;
        case 7:
            bulanName = "Juli";
            break;
        case 8:
            bulanName = "Agustus";
            break;
        case 9:
            bulanName = "September";
            break;
        case 10:
            bulanName = "Oktober";
            break;
        case 11:
            bulanName = "November";
            break;
        case 12:
            bulanName = "Desember";
            break;
        default:
            bulanName = "Bulan tidak valid";
    }
    return bulanName;
}
function dataHandling2(input) {

    input[1] += "Elsharawy"
    input[2] = "Provinsi " + input[2]
    input.splice(3,0, "Pria")
    input.splice(5,1, "SMA Internasional Metro")
    console.log(input)

    let tanggalLahir = input[4].split("/")
    let bulan = parseInt(tanggalLahir[1])
    console.log(namaBulan(bulan))

    let tanggalBarat = tanggalLahir.reverse()
    tanggalBarat.splice(1,2,tanggalBarat[2], tanggalBarat[1])
    console.log(tanggalBarat)
    console.log(tanggalLahir[2]+"-"+tanggalLahir[1]+"-"+tanggalLahir[0])

    let nama = input[1]
    console.log(nama.slice(0,14))
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