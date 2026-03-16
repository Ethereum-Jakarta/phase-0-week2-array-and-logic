let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

// method splice
function dataHandling2(input) {
  let data1 = input.splice(1, 1, "Roman Alamsyah Elsharawy");
  let data2 = input.splice(2, 1, "Provinsi Bandar Lampung");
  let data3 = input.splice(4, 1, "Pria");
  let data4 = input.splice(5, 0, "SMA Internasional Metro");

  console.log(input)

  // method split
  let tanggal = input[3].split('/');

  let hari = tanggal[0];
  let bulan = tanggal[1];
  let tahun = tanggal[2];

  function namaBulan(bulan) {
    if (bulan === "05") return "Mei";
  }

  console.log(namaBulan(bulan));

  let tanggalSort = [tahun, hari, bulan]
  console.log(tanggalSort)

  // method join
  let tanggalJoin = tanggal.join('-');
  console.log(tanggalJoin);

  // method slice
  console.log(input[1].slice(0, 14))

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