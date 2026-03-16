let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling(input) {
  // add gender and education
  input.splice(4, 1, "Pria", "SMA Internasional Metro");

  //manipulation string
  let nameManipulation = input[1].concat("Elsharawy");
  input.splice(1,2, nameManipulation, `Provinsi ${input[2]}`);

  //manipulation month
  let month = Number(input[3].split("/")[1]);

  switch (month) {
    case 1:
      month = "Januari"
      break;
    case 2:
      month = "Februari"
      break;
    case 3:
      month = "Maret"
      break;
    case 4:
      month = "April"
      break;
    case 5:
      month = "Mei"
      break;
    case 6:
      month = "Juni"
      break;
    case 7:
      month = "Juli"
      break;
    case 8:
      month = "Agustus"
      break;
    case 9:
      month = "September"
      break;
    case 10:
      month = "Oktober"
      break;
    case 11:
      month = "November"
      break;
    case 12:
      month = "Desember"
      break
  }
  
  console.log(input);
  console.log(month)
  console.log(input[3].split("/").sort((a,b) => b - a))
  console.log(input[3].split("/").join("-"))
  console.log(input[1].slice(0,14))

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
