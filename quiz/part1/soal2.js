let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {

  input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
  console.log(input);

  let arrayDate = input[3].split("/");
  if (arrayDate[1] === '05') {
    console.log("Mei");
  }

  console.log(`["${arrayDate[2]}", "${arrayDate[0]}", "${arrayDate[1]}"]`);

  let stringDate = arrayDate.join("-");
  console.log(stringDate);

  let name = input[1].slice(0, 15);
  console.log(name);

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