// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling2(input) {
  input[1] += "Elsharawy";
  input[2] = "Provinsi " + input[2];
  input.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(input);

  let tanggalLahir = input[3].split("/");
  let namaBulan = tanggalLahir[1] == "05" ? "Mei" : "Bukan Mei";
  console.log(namaBulan);

  let tanggalKebalik = [tanggalLahir[2], tanggalLahir[0], tanggalLahir[1]]
  console.log(tanggalKebalik)

  let gabungkanTanggal = tanggalLahir.join("-")
  console.log(gabungkanTanggal)

  console.log(input[1].slice(0, 15))
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
