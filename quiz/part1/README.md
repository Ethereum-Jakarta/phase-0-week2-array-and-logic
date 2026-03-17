# Handling Data Array agar menghasilkan output yg baik | Part 1

## Soal 1
```js
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

for(let i = 0; i < input.length; i++) {
    for(let j = 0; j <= input.length; j++) {
        if(j === 0) {
            console.log(`Nomor ID:  ${input[i][j]}`);
        } else if(j === 1) {
            console.log(`Nama Lengkap:  ${input[i][j]}`);
        } else if(j === 2) {
            console.log(`TTL:  ${input[i][j]} ${input[i][j + 1]}`);
        } else if(j === 4) {
            console.log(`Hobi:  ${input[i][j]}`);
            console.log("");
        }
    }
}

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
```

## Soal 2 
pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
```js
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input.splice(1, 1, "Roman Alamsyah Elsharawy");
    input.splice(2, 1, "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");

    let tanggal = input[3].split("/");
    let bulan = tanggal[1];
    let tahun = tanggal[2];
    let hari = tanggal[0];
    let nama = input[1].slice(0, 15);

    if(bulan == "05") {
        bulan = "Mei";
    }

    //  * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
    console.log(input);

    // Mei
    console.log(bulan);

    // ["1989", "21", "05"]
    bulan = tanggal[1]
    console.log([tahun, hari, bulan]);

    // 21-05-1989
    console.log(hari + "-" + bulan + "-" + tahun);

    // Roman Alamsyah
    console.log(nama);

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
```
