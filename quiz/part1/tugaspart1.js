/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

// Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen.
// Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
// Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:

function dataHandling(n) {
    for(let a = 0; a < input.length; a++) { 
        console.log(`nomor id: ${n[a][0]}`)
        console.log(`nama lengkap: ${n[a][1]}`)
        console.log(`ttl: ${n[a][2]} ${n[a][3]}`)
        console.log(`hobi: ${n[a][4]}`)
    }
} 

console.log(dataHandling(input))

/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    // * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
    input[1] = "Roman Alamsyah Elsharawy"
    input[2] = "Provinsi Bandar Lampung"
    input[4] = "Pria"
    input[5] = "SMA Internasional Metro"
    console.log(input)
    
    // * Mei
    let tgl = input[3].split("/")
    if ( tgl[1] == "05") {
        console.log("Mei")
    } 
    // * ["1989", "21", "05"]
    console.log([tgl[2], tgl[0], tgl[1]])

    // * 21-05-1989
    console.log(`${tgl[0]}-${tgl[1]}-${tgl[2]}`)

    // * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
    console.log(input[1].slice(0,15))


}

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
