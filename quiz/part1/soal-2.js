// pada soal yg kedua, kalian harus belajar method `split` secara mandiri, pada soal dibawah ini, method ***.split()*** cukup powerfull loh

let input = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling(input) {
  input.splice(1, 1, "Roman Alamsyah Elsharawy");
  input.splice(2, 1, "Provinsi Bandar Lampung");
  input.splice(4, 2, "Pria", "SMA Internasional Metro");
  console.log(input);

  let date = input[3];
  let format = date.split("/");

  let newDate = parseInt(format[1]);
  if (newDate === 5) console.log("Mei");

  let sortedDate = [format[2], format[0], format[1]];
  console.log(sortedDate);

  console.log(format[0] + "-" + format[1] + "-" + format[2]);

  let nama = input[1].substring(0, 15);
  console.log(nama);
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
