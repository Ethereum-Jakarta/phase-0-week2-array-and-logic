let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function konversiBulan(bulan) {
    switch (bulan) {
    case `01`: return `Januari`;
    case `02`: return `Februari`;
    case `03`: return `Maret`;
    case `04`: return `April`;
    case `05`: return `Mei`;
    case `06`: return `Juni`;
    case `07`: return `Juli`;
    case `08`: return `Agustus`;
    case `09`: return `September`;
    case `10`: return `Oktober`;
    case `11`: return `November`;
    case `12`: return `Desember`;
    default: console.log(`\nMasukkan "angka" bulan yang valid yaitu "antara 1 - 12"\n`); break;
}
}

function kedepankanArrayTerakir(array) {
    arrayLastData = array[array.length - 1];

    array.pop();
    array.unshift(arrayLastData);
    
    return array;
}

function dataHandling(input) {
  // harus nge-log 4 kali
  console.log([input[0], input[1] + "Elsharawy", "Provinsi " + input[2], input[3], "Pria", "SMA Internasional Metro"]);
  console.log(konversiBulan(input[3].split("/")[1]));
  console.log(kedepankanArrayTerakir(input[3].split("/")));
  console.log(input[3].split("/").join("-"));
  // biar enak dibaca "karakter 1 sampai 15"
  console.log(input[1].slice(-1 + 1, 15));
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
