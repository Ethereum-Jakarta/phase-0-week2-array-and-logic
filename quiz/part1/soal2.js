// ## Soal 2 
// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
// js
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    // 1. Ubah elemen-elemen tertentu
    input.splice(1, 1, "Roman Alamsyah Elsharawy");
    input.splice(2, 1, "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);

    // 2. Ambil dan cetak nama bulan dari tanggal
    let tanggal = input[3]; // "21/05/1989"
    let tanggalSplit = tanggal.split("/"); // ["21", "05", "1989"]
    let bulan = tanggalSplit[1];

    // Konversi bulan angka ke nama
    const namaBulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    let bulanIndex = parseInt(bulan, 10) - 1;
    console.log(namaBulan[bulanIndex]); // Mei

    // 3. Urutkan tanggalSplit dari besar ke kecil
    let tanggalSorted = [...tanggalSplit].sort((a, b) => b - a);
    console.log(tanggalSorted); // ["1989", "21", "05"]

    // 4. Gabungkan tanggal dengan tanda '-'
    console.log(tanggalSplit.join("-")); // 21-05-1989

    // 5. Potong nama agar hanya 15 karakter
    console.log(input[1].slice(0, 15)); // Roman Alamsyah
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