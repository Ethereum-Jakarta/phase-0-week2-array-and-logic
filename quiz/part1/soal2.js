//pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling1(input) {
  input[1] += "Elsharawy";
  input[2] = "Provinsi " + input[2];
  input.splice(4, 1, "Pria", "SMA Internasional Metro");
  return input;
}

function dataHandling2(input) {
  let bulan = Number(input[3].split("/")[1]);

  let namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  bulan = namaBulan[bulan - 1];
  return bulan;
}

function dataHandling3(input) {
  let bulan = input[3].split("/");
  return [bulan[2], bulan[0], bulan[1]];
}

function dataHandling4(input) {
  let bulan = input[3].split("/").join("-");
  return bulan;
}

function dataHandling5(input) {
  let nama = input[1].slice(0, 15);
  return nama;
}
console.log(dataHandling1(input)); //["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
console.log(dataHandling2(input)); //Mei
console.log(dataHandling3(input)); // ["1989", "21", "05"]
console.log(dataHandling4(input)); // 21-05-1989
console.log(dataHandling5(input)); // Roman Alamsyah & batasi hanya 15 karakter saja pada array elemen ke 2

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
