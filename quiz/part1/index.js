/**
 * SOAL 1
 */


let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling(data) {
  for(i = 0; i < data.length; i++) {
    console.log(`Nomor ID: ${data[i][0]}`);
    console.log(`Nama Lengkap ${data[i][1]} `);
    console.log(`TTL: ${data[i][2]} ${data[i][3]}`);
    console.log(`Hobi: ${data[i][4]}`);
    console.log('');
  }
}
dataHandling(input)



/**
 * SOAL 2
 */

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
  input[1]  = 'Roman Alamnsyah Elsharawy';
  input[2] = "Provinsi " + input[2];
  input.splice(4,1, "Pria")
  input.push("SMA Internasional Metro");
  console.log(input)

//format ultah
// mengubah menjadi array ["21", "05", "1989"]
  let tanggal = input[3].split('/');
  let bulan = "";

  switch(tanggal[1]) {
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
      break;
    default:
      bulan = "Bulan tidak ditemukan";
      break;
  };

  console.log(bulan);

  //Mengurutkan tanggal secara descending
  const tanggalDescending = tanggal.slice().sort(function(a,b) {return b-a});
  console.log(tanggalDescending);

  //Mengubahh tanggal "-"
  const tanggalBaru = tanggal.join("-");
  console.log(tanggalBaru);

  //Membatasi nama hingga 15 karakter
  const batasNama = input[1].slice(0, 15);
  console.log(batasNama);

};

dataHandling2(input);