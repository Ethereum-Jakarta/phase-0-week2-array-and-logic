/*
pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
*/
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {

    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);



    let tanggalLahir = input[3];
    let pecahTanggalLahir = tanggalLahir.split("/");
    let bulan = pecahTanggalLahir[1];
    let namaBulan = "";
    switch(bulan){
        case '01':
            namaBulan = "Januari"; 
            break;
        case '02':
            namaBulan = "Februari"; 
            break;
        case '03':
            namaBulan = "Maret"; 
            break;
        case '04':
            namaBulan = "April"; 
            break;
        case '05':
            namaBulan = "Mei"; 
            break;
        case '06':
            namaBulan = "Juni"; 
            break;
        case '07':
            namaBulan = "Juli"; 
            break;
        case '08':
            namaBulan = "Agustus"; 
            break;
        case '09':
            namaBulan = "September"; 
            break;
        case '10':
            namaBulan = "Oktober"; 
            break;
        case '11':
            namaBulan = "November"; 
            break;
        case '12':
            namaBulan = "Desember"; 
            break;
        default :
            console.log("Bulan Tidak Valid")
        }
    console.log(namaBulan);



    let newArrayTanggal = [];
    newArrayTanggal.push(pecahTanggalLahir[2]);
    newArrayTanggal.push(pecahTanggalLahir[0]);
    newArrayTanggal.push(pecahTanggalLahir[1]);
    console.log(newArrayTanggal);
    


    let newFormatTanggal = pecahTanggalLahir.join("-");
    console.log(newFormatTanggal);



    let nama = input[1];
    let namaDibatasi = nama.slice(0, 15);
    console.log(namaDibatasi);

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

