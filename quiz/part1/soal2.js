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
  input.splice(4, 1, "Pria", "SMA Internasional Metro");

  let tanggal = input[3].split("/");
  let bulan = tanggal[1];
  let hari = tanggal[0];
  let tahun = tanggal[2];
  let arr = [tahun, hari, bulan];
  let newTanggal = tanggal.join("-");
  if (bulan === "05") {
    bulan = "Mei";
  }

  let roman = input[1].slice(0, 15);

  console.log(input);
  console.log(bulan);
  console.log(arr);
  console.log(newTanggal);
  console.log(roman);
}

dataHandling(input);
