//## Soal 2 
//pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
//```js
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input.splice(1, 1, "Roman Alamsyah Elsharawy");
    input.splice(2, 1, "Provinsi Bandar Lampung");
    input.pop();
    input.push("Pria", "SMA Internasional Metro");
    console.log(input);

    const bulanIndex = parseInt(input[3].slice(3, 5), 10) - 1;
    const bulanArray = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    console.log(bulanArray[bulanIndex]);

    const sortedDate = input[3].split("/").sort((a, b) => b - a);
    console.log(sortedDate);

    console.log(input[3].split("/").join("-"));

    console.log(input[1].slice(0, 15));
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