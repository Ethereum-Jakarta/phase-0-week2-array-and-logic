let input = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling(input) {
  input.splice(
    1,
    4,
    "Roman Alamsyah Elsharawy",
    "Provinsi Bandar Lampung",
    "21/05/1989",
    "Pria",
    "SMA Internasional Metro"
  );
  console.log(input);

  let data = input[3].split("/");
  let tanggal = new Date(data[1]);

  console.log(tanggal.toLocaleDateString("id-ID", { month: "long" }));

  let data2 = data.sort((a, b) => b - a);

  console.log(data2);

  let data3 = input[3].split("/");

  console.log(data3.join("-"));

  let data4 = input[1];

  console.log(data4.substr(0, 15));
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
