let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(data) {
  
data[1] += "Elsharawy"
data.pop()
data.push("Pria")
data.push("SMA Internasional Metro")
console.log(data)
console.log('mei')
let reverse = [];
reverse = data[3].split('/') .reverse()
console.log(reverse)
console.log(data[3].split('/').join('-'))
console.log(data[1].substring(0,14))
}
dataHandling2(input)

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */