// ==========================
// Soal 2
// ==========================

/*
Pada soal yg kedua, kalian harus belajar method splice, slice, join, split, dan lainnya.

Keluaran yang diharapkan (pada console):

["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
Mei
["1989", "21", "05"]
21-05-1989
Roman Alamsyah // batasi hanya 15 karakter saja pada array elemen ke 2
*/

let input2 = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];
let months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
function dataHandling2(input) {
  // isi jawaban kamu di sini
  input[1] += "Elsharawy";
  input[2] = "Provinsi " + input[2];
  input.splice(-1, 1, "Pria", "SMA International Metro");

  console.log(input);

  let tgl = input[3].split("/");
  let bulan = months[tgl[1].slice(-1) - 1];
  console.log(bulan);

  let newTgl = [tgl[tgl.length - 1], tgl[0], tgl[1]];
  console.log(newTgl);

  let formattedTgl = tgl.join("-");
  console.log(formattedTgl);

  const nama = input[1].split("").slice(0, 15).join("");
  console.log(nama);
}

dataHandling2(input2);
