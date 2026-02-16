let input2 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
  input[1] += " Elsharawy"
  input[2] = "Provinsi " + input[2]
  input.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(input);
  let tanggal = input[3].split("/");
  if (tanggal[1] == "05") {
    console.log("Mei")
  }
  [tanggal[0], tanggal[2]] = [tanggal[2], tanggal[0]];
  [tanggal[1], tanggal[2]] = [tanggal[2], tanggal[1]];
  console.log(tanggal)
  tanggal = input[3].split("/").join("-")
  console.log(tanggal)
  console.log(String.prototype.padStart(15, input2[1]))
}

dataHandling2(input2);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */