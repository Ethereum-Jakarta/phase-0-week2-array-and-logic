//pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
//```js
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    //splice
    input.splice (1,1, input[1] + "ELsharawy");
    input.splice (2,1,"Provinsi "+ input[2]);
    input.splice (4,1, "Pria")
    input.splice (5,0, "SMA Internasional Metro");
    //============================================
   
    //slice
    let slicedinput = input.slice(2); 
    console.log(slicedinput);
    //===============================

    //join
    let join = input.join();
    console.log(join);
    //======================

    //mengambil bulan dari data array ke 3
    let tanggal = input[3].split("/");
    let bulan = ["januari","februari","Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let bulanIndex = parseInt (tanggal[1]) -1;
    console.log(bulan[bulanIndex]);
    //====================================================================================================================================

    //mengambil data tanggal dari array ke 3
    let formattedDate = `${tanggal[2]}-${tanggal[1]}-${tanggal[0]}`;
    console.log(formattedDate);
    //==============================================================

    //array tanggal
    console.log(tanggal.reverse());
    //=============================

    //batasi hanya 15 karakter saja pada array elemen ke 2
    console.log(input[1].substring(0,15));

    




    return input;
}
    
    let result = dataHandling(input);
    console.log(result);
    /**
     * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */