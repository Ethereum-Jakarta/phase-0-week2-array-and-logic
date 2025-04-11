let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
  input.splice(1, 1, "Roman Alamsyah Elsharawy");
  input.splice(2, 1, "Provinsi Bandar Lampung");
  input.splice(4, 1, "Pria", "SMA Internasional Metro");

  console.log(input);

  let tanggal = input[3];

  let tanggalArray = tanggal.split("/");

  let bulan = parseInt(tanggalArray[1]);

  switch (bulan) {
    case 1:
      console.log("Januari");
      break;
    case 2:
      console.log("Februari");
      break;
    case 3:
      console.log("Maret");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("Mei");
      break;
    case 6:
      console.log("Juni");
      break;
    case 7:
      console.log("Juli");
      break;
    case 8:
      console.log("Agustus");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("Oktober");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("Desember");
      break;
    default:
      console.log("Bulan tidak valid");
  }

  let tanggalSorted = tanggalArray.slice().sort((a, b) => b - a);
  console.log(tanggalSorted);

  console.log(tanggalArray.join("-"));

  let nama = input[1].slice(0, 15);
  console.log(nama);
}

dataHandling2(input);
