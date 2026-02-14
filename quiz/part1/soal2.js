// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya

let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling2(input) {
  input.pop();
  input.push("pria");
  input.push("sma internasional metro");
  input[1] = input[1] + "Elsharawy"
  console.log(input);
  let pisah = input[3].split("/");
  let tanggal = [pisah[2], pisah[0], pisah[1]];
  console.log("mei");
  console.log(tanggal);
  tanggal = [pisah[0], pisah[1], pisah[2]];
  console.log(tanggal.join("-"));
  let nama = input[1];
  console.log(nama.slice(0, 15));
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
