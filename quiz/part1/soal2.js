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
  input.splice(4, 0, "Pria ");
  input.splice(5, 0, "SMA Internasional Metro");
  let tanggal = input[3].split("/");
  let bulan = tanggal[1];
  let namabulan = "";
  if (bulan) {
    namabulan += "mei";
  } else {
    namabulan += null;
  }
  let reverse = `${tanggal[2]}-${tanggal[0]}-${tanggal[1]}`;
  let karakter = input[1].slice(0, 15);
  console.log(input);
  console.log(namabulan);
  console.log(tanggal);
  console.log(reverse);
  console.log(karakter);
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
