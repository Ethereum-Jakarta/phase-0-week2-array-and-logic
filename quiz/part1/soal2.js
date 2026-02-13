let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
   input.splice(1, 1, input[1] + "Elsharawy");
   input.splice(2, 1, 'Provinsi ' + input[2])
   input.splice(4, 0, 'Pria')
   input.splice(5,1, 'SMA Internasional Metro')
   console.log(input)

   input.splice(3, 0, "Mei");
   console.log(input[3]);

   let tanggal = input[4].split('/');
      console.log(`["${tanggal[2]}", "${tanggal[0]}", "${tanggal[1]}"]`)

   let strTanggal = tanggal.join('-')
   console.log(strTanggal);

   console.log(input[1].slice(0, 15))
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