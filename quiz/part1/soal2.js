let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling(input) {
  input[1] = "Roman Alamsyah Elsharawy";
  input[2] = "Provinsi Bandar Lampung";
  input.pop();
  input.push("Pria", "SMA Internasional Metro");
  console.log(input);

  let tanggal = input[3];
  let tanggalSplit = tanggal.split("/");
  let tanggalBulan = tanggalSplit[1];
  let bulan = "";
  switch (tanggalBulan) {
    case "01":
      bulan = "Januari";
      break;
    case "02":
      bulan = "Februari";
      break;
    case "03":
      bulan = "Maret";
      break;
    case "04":
      bulan = "April";
      break;
    case "05":
      bulan = "Mei";
      break;
    case "06":
      bulan = "Juni";
      break;
    case "07":
      bulan = "Juli";
      break;
    case "08":
      bulan = "Agustus";
      break;
    case "09":
      bulan = "September";
      break;
    case "10":
      bulan = "Oktober";
      break;
    case "11":
      bulan = "November";
      break;
    case "12":
      bulan = "Desember";
  }
  console.log(bulan);
  tanggalSplit.splice(1, 1);
  tanggalSplit.unshift(tanggalBulan);
  console.log(tanggalSplit.reverse());
  console.log(tanggal.split("/").join("-"));
  console.log(input[1].slice(0, 15));
}

dataHandling(input);
