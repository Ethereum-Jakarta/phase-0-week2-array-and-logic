let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling2(input) {
  input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  input.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(input);

  let tanggal = input[3].split("/");
  let bulan = tanggal[1];
  let namaBulan = "";
  switch (bulan) {
    case "01":
      namaBulan = "Januari";
      break;
    case "02":
      namaBulan = "Februari";
      break;
    case "03":
      namaBulan = "Maret";
      break;
    case "04":
      namaBulan = "April";
      break;
    case "05":
      namaBulan = "Mei";
      break;
    case "06":
      namaBulan = "Juni";
      break;
    case "07":
      namaBulan = "Juli";
      break;
    case "08":
      namaBulan = "Agustus";
      break;
    case "09":
      namaBulan = "September";
      break;
    case "10":
      namaBulan = "Oktober";
      break;
    case "11":
      namaBulan = "November";
      break;
    case "12":
      namaBulan = "Desember";
      break;
  }
  console.log(namaBulan);

  // buat misahin tanggal
  let tanggalSort = [...tanggal];
  tanggalSort.sort(function (a, b) {
    return Number(b) - Number(a);
  });
  console.log(tanggalSort);

  // format tanggal dengan -
  console.log(tanggal.join("-"));

  // membatasi nama 15 karakter
  console.log(input[1].slice(0, 15));
}

dataHandling2(input);
