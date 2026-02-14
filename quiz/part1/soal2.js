let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    // 1. Gunakan splice() untuk memodifikasi array sesuai kebutuhan
    input.splice(1, 1, "Roman Alamsyah Elsharawy"); // Mengubah nama lengkap
    input.splice(2, 1, "Provinsi Bandar Lampung"); // Menambahkan 'Provinsi' pada alamat
    input.splice(4, 0, "Pria", "SMA Internasional Metro"); // Menambahkan jenis kelamin dan sekolah

    console.log(input);

    // 2. Ambil bulan lahir dari data tanggal menggunakan split() dan switch-case
    let tanggal = input[3].split("/"); // ["21", "05", "1989"]
    let bulan;
    switch (tanggal[1]) {
        case '01': bulan = "Januari"; break;
        case '02': bulan = "Februari"; break;
        case '03': bulan = "Maret"; break;
        case '04': bulan = "April"; break;
        case '05': bulan = "Mei"; break;
        case '06': bulan = "Juni"; break;
        case '07': bulan = "Juli"; break;
        case '08': bulan = "Agustus"; break;
        case '09': bulan = "September"; break;
        case '10': bulan = "Oktober"; break;
        case '11': bulan = "November"; break;
        case '12': bulan = "Desember"; break;
    }
    console.log(bulan);

    // 3. Tampilkan array dengan format [tahun, tanggal, bulan]
    let tanggalFormatted = [tanggal[2], tanggal[0], tanggal[1]];
    console.log(tanggalFormatted);

    // 4. Format tanggal dengan tanda '-' menggunakan join()
    console.log(tanggal.join('-'));

    // 5. Batasi nama hanya 15 karakter menggunakan slice()
    console.log(input[1].slice(0, 15));
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