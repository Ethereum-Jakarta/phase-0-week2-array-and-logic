// ## Soal 2 
// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input[1] = "Roman Alamsyah Elsharawy"
    input[2] = "Provinsi Bandar Lampung" 
    input.splice(4,1,"Pria","SMA Internasional Metro")

    let data = input.toString();
    var month = input.at(3);
    var name = input.at(1);
    name = name.toString();
    let nama = ''
    for(let i = 0;i<15;i++){
        nama += name[i];
    }

    month = month.toString();
    month = month.split("/");
    // month = month.reverse();

    let ttl = month.reverse();
    ttl = ttl.reverse();
    ttl = ttl.join('-')

    function handleData(month){
    switch (month[1]) {
        case "01":
            return("Januari")
        case '02':
            return("Februari")
        case '03':
            return("Maret")
        case "04":
            return("April")
        case "05":
            return("Mei")
        case '06':
            return("Juni")
        case '07':
            return("Juli")
        case '08':
            return("Agustus")
        case '09':
            return("September")
        case '10':
            return("Oktober")
        case '11':
            return("November")
        case '12':
            return("Desember")
        default:
            break;
    }
}

console.log(input)
console.log(handleData(month))
console.log(month)
console.log(ttl)
console.log(nama)
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
