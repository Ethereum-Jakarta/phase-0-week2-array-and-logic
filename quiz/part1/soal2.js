let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

console.log("")
function dataHandling(input) {

    input[1] = "Roman Alamsyah Elsharawy";
    input[2] = "Provinsi Bandar Lampung";
    input.splice(4, 1, "Pria", "SMA Internasional Metro");

    console.log(`["${input.join('", "')}"]`);


    let tanggal = input[3].split('/');
    let bulan = tanggal[1];
    let tanggal1 = input[3] = "05/21/1989".split('/');


    let bulanTeks;
    switch (bulan) {
        case "01": bulanTeks = "Januari"; break;
        case "02": bulanTeks = "Februari"; break;
        case "03": bulanTeks = "Maret"; break;
        case "04": bulanTeks = "April"; break;
        case "05": bulanTeks = "Mei"; break;
        case "06": bulanTeks = "Juni"; break;
        case "07": bulanTeks = "Juli"; break;
        case "08": bulanTeks = "Agustus"; break;
        case "09": bulanTeks = "September"; break;
        case "10": bulanTeks = "Oktober"; break;
        case "11": bulanTeks = "November"; break;
        case "12": bulanTeks = "Desember"; break;
    }
    console.log(bulanTeks);


    let tanggalTerbalik = [...tanggal1].reverse();
    console.log(`["${tanggalTerbalik.join(`", "`)}"]`)


    let tanggalStrip = tanggal.join("-");
    console.log(tanggalStrip);


    let namaTerbatas = input[1].slice(0, 15);
    console.log(namaTerbatas);
}


dataHandling(input);
console.log("")

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */