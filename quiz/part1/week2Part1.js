// Soal 1
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

function dataHandling(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (j === 0) {
                console.log(`Nomor ID: ${input[i][j]}`);
            } else if (j === 1) {
                console.log(`Nama Lengkap: ${input[i][j]}`);
            } else if (j === 2) {
                console.log(`TTL: ${input[i][j]} ${input[i][j+1]}`);
            } else if (j === 4) {
                console.log(`Hobi : ${input[i][j]}`);
            }
        }
        console.log(' ');
    }
}

dataHandling(input);
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

// Soal 2 belajar splice, slice, join, split, dll
input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");

    let slicedInput = input.slice(3,4)[0];
    let divideInput = slicedInput.split("/");
    console.log(input); // keluaran ke-1

    if (divideInput[1] == '05') {
        console.log("MEI"); //keluaran ke-2
    }
    let popInput = divideInput.pop();
    divideInput.unshift(popInput);
    console.log(divideInput); // keluaran ke-3

    divideInput.shift();
    divideInput.push(popInput);
    console.log(divideInput.join("-")); // keluaran ke-4
    
    let arrayKedua = input[1];
    if (arrayKedua.length > 15) {
        arrayKedua = arrayKedua.substring(0,14);
        console.log(arrayKedua);
    }
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