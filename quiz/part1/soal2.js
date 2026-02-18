// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
  input.splice(1, 1, input[1] + " Elsharawy");
  input.splice(2, 1, "Provinsi " + input[2]);
  input.splice(4, 1, "Pria");
  input.splice(5, 0, "SMA Internasional Metro");
  console.log(input);

  let bulan = input[3].split("/");
  bulan.splice(1, 0, "Mei");
  console.log(bulan[1]);

  let reverse = input[3].split("/").reverse();
  let temp = reverse[0];
  reverse[1] = reverse[2];
  reverse[2] = temp;
  console.log(reverse);

  console.log(input[3].split("/").join("-"));
  
  console.log(input[1].slice(0, 15));
}

dataHandling(input);

/*
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */