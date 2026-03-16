// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
// js
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
  input.splice(1, 1, "Roman Alamsyah Elsharawy");
  input.splice(2, 1, "Provinsi Bandar Lampung");
  input.splice(4, 1, "Pria", "SMA Internasional Metro");

  console.log(input);

  let date = input[3].split("/");
  let month;

  switch (date[1]) {
    case "01":
      month = "Januari";
      break;

    case "02":
      month = "Februari";
      break;
    case "03":
      month = "Maret";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "Mei";
      break;
    case "06":
      month = "Juni";
      break;
    case "07":
      month = "Juli";
      break;
    case "08":
      month = "Agustus";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "Oktober";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
    default:
      "Unknown";
  }
  console.log(month);

  console.log([date[2], date[0], date[1]]);

  console.log(date.join("-"));
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
