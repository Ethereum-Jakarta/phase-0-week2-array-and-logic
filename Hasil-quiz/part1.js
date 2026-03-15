/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
console.log(`Soal 1`)
let input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        if (j == 0) {
            console.log (`Nomor id : ${input[i][j]}`);
        } else if (j == 1) {
            console.log (`Nama Lengkap: ${input[i][j]}`);
        } else if (j == 2) {
            console.log(`TTL : ${input[i][j]}`);
        } else {
            console.log(`Hobi ; ${input[i][j]}`);
        }
    }
    console.log();
}

//pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
console.log(`\nSoal 2`)
let data = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(data) {
let datalengkap = data.splice(1,Infinity, 
    "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro" )
}
dataHandling(data)
console.log(data)

console.log(`Mei`)
let tanggal = (data[3].split("/"))
tanggal.pop()
tanggal.unshift('1989')
console.log(tanggal)

tanggal.shift()
tanggal.push(`1989`)
tanggaljoin = (tanggal.join("-"))
console.log(tanggaljoin)

let namasplit = data[1].split(" ")
namasplit.pop()
console.log(namasplit.join(" "))
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */