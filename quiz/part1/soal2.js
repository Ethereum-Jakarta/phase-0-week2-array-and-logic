//pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling(input) {
  input.splice(1, 1, "Roman Alamsyah Elsharawy");
  input.splice(2, 1, "Provinsi Bandar Lampung");
  input.pop();
  input.push("Pria");
  input.push("SMA Internasional Metro");
  console.log(input);

  let bulan = [
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

  let date = input[3].split("/");

  console.log(bulan[parseInt(date[1] - 1)]);
  console.log([date[2], date[0], date[1]]);

  console.log(date.join("-"));
  console.log(input[1].slice(0, 15));
}

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
