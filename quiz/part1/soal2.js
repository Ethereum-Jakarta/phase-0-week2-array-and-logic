let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    let var1 = input.splice(1,1,"Roman Alamsyah Elsharawy ");
    var1 = input.splice(2,1,"Provinsi Bandar Lampung ");
    var1 = input.splice(4,1,"Pria ");
    var1 = input.push("SMA Internasional Metro");
    console.log(input);
    console.log("=========================================");
    console.log();
}

function dataHandling3(arr){
    let bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let mei = arr[3].slice(3,5);
    console.log(bulan[mei-1]);
    console.log("=========================================");
    console.log();
}

function dataHandling4(arr){
    let tanggal = arr[3].slice(0,2);
    let bulan = arr[3].slice(3,5);
    let tahun  = arr[3].slice(6,10);
    console.log([tahun, tanggal, bulan]);
    console.log("=========================================");
    console.log();
}

function dataHandling5(arr){
    let tanggal = arr[3].slice(0,2);
    let bulan = arr[3].slice(3,5);
    let tahun  = arr[3].slice(6,10);

    let gabung = [tanggal,bulan, tahun];
    console.log(gabung.join("-"));
    console.log("=========================================");
    console.log();
}

function dataHandling6(arr){
    let nama = arr[1].slice(0,14);
    console.log(nama);
}
// console.log(input);

dataHandling2(input);
dataHandling3(input);
dataHandling4(input);
dataHandling5(input);
dataHandling6(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * 1.   ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * 2.   Mei
 * 3.   ["1989", "21", "05"]
 * 4.   21-05-1989
 * 5.   Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
