let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling(input) {
  input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  input.splice(4, 1, "Pria", "SMA Internasional Metro");

  console.log(input);

  const dateSplittedDDMMYYYY = input[3].split("/");

  console.log(getMonth(dateSplittedDDMMYYYY[1]));

  // I noticed the format in quiz spec is YYYY DD MM
  console.log([
    dateSplittedDDMMYYYY[2],
    dateSplittedDDMMYYYY[0],
    dateSplittedDDMMYYYY[1],
  ]);

  console.log(dateSplittedDDMMYYYY.join("-"));

  console.log(input[1].slice(0, 15));
}

dataHandling(input);

function getMonth(month) {
  switch (month) {
    case "01":
      return "Januari";
      break;
    case "02":
      return "Febuari";
      break;
    case "03":
      return "Maret";
      break;
    case "04":
      return "April";
      break;
    case "05":
      return "Mei";
      break;
    case "06":
      return "Juni";
      break;
    case "07":
      return "Juli";
      break;
    case "08":
      return "Agustus";
      break;
    case "09":
      return "September";
      break;
    case 10:
      return "Oktober";
      break;
    case 11:
      return "November";
      break;
    case 12:
      return "Desember";
    default:
      break;
  }
}

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
