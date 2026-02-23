//soal no 1

function dataHandling(input) {
  let output = ""
  for (let i = 0; i < input.length; i++){
    output = output + "Nomor ID: " + input[i][0] + "\n";
    output = output + "Nama Lengkap: " + input[i][1] + "\n";
    output = output + "TTL: " + input[i][2] + " " + input[i][3] + "\n";
    
    output = output + "Hobi: " + input[i][4] + "\n \n";
  }
  return console.log(output)
}
let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
dataHandling(input)


//soal no 2



  let input2 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];


function dataHandling2(input) {
  input.splice(1, 1, input[1].trim() + (" Elsharawy"))
  input.splice(2, 1, "Provinsi " + input[2])
  input.splice(4, 1, "Pria", "SMA Internasional Metro")
  console.log(input)

  let tanggalLahir = input[3].split('/')

  let namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  console.log(namaBulan[4])
  
  console.log(tanggalLahir)

  let tanggalBaru = tanggalLahir[1] + "-" + tanggalLahir[0] + "-" + tanggalLahir[2]
  console.log(tanggalBaru)

  let siRoman = input[1].split(" ")[0] + " "+ input[1].split(" ")[1]
  
  console.log(siRoman.slice(0,15))
}


dataHandling2(input2)