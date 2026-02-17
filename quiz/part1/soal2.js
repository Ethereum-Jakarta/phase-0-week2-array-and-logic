// ## Soal 2 
// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {

    // console.log(input);

    let data = input;
    data.splice(1,1,"Roman Alamsyah Elsharawy");
    data.splice(2,1,"Provinsi Bandar Lampung");
    data.splice(4,1,"Pria", "SMA Internasional Metro")
    console.log(data)

    tanggal = data.splice(3,1).join().split("/")
    let bulan = tanggal[1].slice(1)
    
    switch (bulan) {
        case '1': 
            namaBulan = "Januari"; 
            break;
        case '2': 
            namaBulan = "Februari"; 
            break;
        case '3': 
            namaBulan = "Maret"; 
            break;
        case '4': 
            namaBulan = "April"; 
            break;
        case '5': 
            namaBulan = "Mei"; 
            break;
        case '6': 
            namaBulan = "Juni"; 
            break;
        case '7': 
            namaBulan = "Juli"; 
            break;
        case '8': 
            namaBulan = "Agustus"; 
            break;
        case '9': 
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
        default: 
        namaBulan = "Bulan tidak valid";
    }

  console.log(namaBulan)

  console.log([tanggal[2], tanggal[0], tanggal[1]] )
  console.log(tanggal.join("-"))

  let limitName = data[1].slice(0,15)
  console.log(limitName)

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

