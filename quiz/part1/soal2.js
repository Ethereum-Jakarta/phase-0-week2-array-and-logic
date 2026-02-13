//## Soal 2 
//pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
//```js
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    input.splice(1,1, "Roman Alamsyah Elsharawy");
    input.splice(2,1, "Provinsi Bandar Lampung");
    input.splice(4,1, "Pria", "SMA International Metro");
    console.log('[\"' + input.join('", "') + '\"]')

    let tanggal = input[3].split("/");
    let daftarBulan = ["Januari", "Febuari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let bulan = daftarBulan[parseInt(tanggal[1], 10) -1];
    console.log(bulan);

    let tanggalTerbalik = tanggal.slice();
    tanggalTerbalik = [tanggalTerbalik[2], tanggalTerbalik[0], tanggalTerbalik[1]];
    console.log('["' + tanggalTerbalik.join('", "') + '"]');

    console.log(tanggal.join("-"));

    console.log(input[1].slice(0,15));
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