// ## Soal 2 
// pada soal yg kedua, kalian harus belajar method `split` secara mandiri, pada soal dibawah ini, method ***.split()*** cukup powerfull loh
// ```js
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling(input) {


/*1*/ let one = input;
one.splice(1,1, "Roman Alamsyah Elsharawy")
one.splice(4,1,"Pria","SMA Internasional Metro");
console.log(one);

/*2*/ let getMonth = input[3].split("/")[1];
let month;
switch (getMonth) {
    case "01": month = "Januari"; break;
    case "02": month = "Februari"; break;
    case "03": month = "Maret"; break;
    case "04": month = "April"; break;
    case "05": month = "Mei"; break;
    case "06": month = "Juni"; break;
    case "07": month = "Juli"; break;
    case "08": month = "Agustus"; break;
    case "09": month = "September"; break;
    case "10": month = "Oktober"; break;
    case "11": month = "November"; break;
    case "12": month = "Desember"; break;
    default: month = "tidak ada nama bulan"; break;
}
console.log(month);

/*3*/   let getData = input.splice(3,1);
        let date = getData[0].split("/").reverse();
        let temp = date[1];
        date[1] = date[2];
        date[2] = temp;
        console.log(date);
        
/*4*/   console.log(getData[0]);

/*5*/ let nama = input[1].slice(0,15)
console.log(nama);
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
