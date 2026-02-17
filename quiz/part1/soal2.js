let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
  input[1] = "Roman Alamsyah Elsharawy";
  input[2] = "Provinsi Bandar Lampung";
  input.splice(4, 0, "Pria");
  input.splice(5, 1, "SMA Internasional Metro");

  console.log(input);
  // let tanggal = input[3].split('/')
  let hariBulanTahun = input[3].toString();
  let bulan = Math.abs(hariBulanTahun.slice(3, 5)); //
  let namaBulan = "";
  switch (bulan) {
    case 1:
      namaBulan = "Januari";
      break;
    case 2:
      namaBulan = "Februari";
      break;
    case 3:
      namaBulan = "Maret";
      break;
    case 4:
      namaBulan = "April";
      break;
    case 5:
      namaBulan = "Mei";
      break;
    case 6:
      namaBulan = "Juni";
      break;
    case 7:
      namaBulan = "Juli";
      break;
    case 8:
      namaBulan = "Agustus";
      break;
    case 9:
      namaBulan = "September";
      break;
    case 10:
      namaBulan = "Oktober";
      break;
    case 11:
      namaBulan = "November";
      break;
    case 12:
      namaBulan = "Desember";
      break;
  }
  console.log(namaBulan);

  let tahun = hariBulanTahun.slice(6, 10);
  let month = hariBulanTahun.slice(3,5)
  let hari = hariBulanTahun.slice(0,2)
  let tahunHariBulan = tahun.concat(" ", hari," ", month)
  console.log(tahunHariBulan.split(" "))
  let tanggalLahir = input[3]
  console.log(tanggalLahir.replaceAll("/","-"))
  let name = input[1]
  console.log(name.substr(0,15))
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
