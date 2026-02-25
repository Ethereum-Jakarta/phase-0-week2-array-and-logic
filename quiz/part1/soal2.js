let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
  input.splice(1, 4, 
    "Roman Alamsyah Elsharawy", 
    "Provinsi Bandar Lampung", 
    "21/05/1989", 
    "Pria", 
    "SMA Internasional Metro"
  );
  console.log(input);

  let tanggal = input[3].split('/');
  let bulan = tanggal[1];
  switch (bulan) {
    case '01': console.log('Januari'); break;
    case '02': console.log('Februari'); break;
    case '03': console.log('Maret'); break;
    case '04': console.log('April'); break;
    case '05': console.log('Mei'); break;
  }

  let tanggalTerbalik = [...tanggal]; 
  tanggalTerbalik = [tanggal[2], tanggal[0], tanggal[1]];
  console.log(tanggalTerbalik);

  console.log(tanggal.join('-'));

  console.log(input[1].slice(0, 15));
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