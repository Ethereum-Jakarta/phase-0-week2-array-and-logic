let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
  // 1. Splice untuk memodifikasi array
  input.splice(1, 1, "Roman Alamsyah Elsharawy");
  input.splice(2, 1, "Provinsi Bandar Lampung");
  input.splice(4, 1, "Pria", "SMA Internasional Metro");

  console.log(input);

  // 2. Menggunakan split untuk mendapatkan bulan
  let tanggalLahir = input[3].split("/");
  let bulan = tanggalLahir[1];

    const bulanMap = {
        "01": "Januari",
        "02": "Februari",
        "03": "Maret",
        "04": "April",
        "05": "Mei",
        "06": "Juni",
        "07": "Juli",
        "08": "Agustus",
        "09": "September",
        "10": "Oktober",
        "11": "November",
        "12": "Desember"
    };
    bulan = bulanMap[bulan] || "Bulan tidak valid";

  console.log(bulan);

  // 3. Urutkan tanggalLahir array secara descending
  tanggalLahir.sort( (a,b) => b-a );
  console.log(tanggalLahir);

  // 4. Join tanggalLahir array dengan format "YYYY-MM-DD"
  console.log(input[3].split("/").join("-"));

  // 5. Potong nama menjadi 15 karakter
  let nama = input[1].substring(0, 15);
  console.log(nama);
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