let input = [
  "0001",
  "Roman Alamsyah ",
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

  let date = input[3].split("/");
  let tanggal = input[3].slice(3, 5);
  let namaBulan;

  switch (tanggal) {
    case "05":
      namaBulan = "Mei";
      break;
  }
  console.log(namaBulan);

  console.log(date[2], date[0], date[1]);

  let dateJoin = date.join("-");

  console.log(dateJoin);
  console.log(input[1].slice(0, 15));
}

dataHandling(input);
