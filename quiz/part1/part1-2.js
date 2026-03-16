// Soal 2 
// pada soal yg kedua, kalian harus belajar method `split` secara mandiri, pada soal dibawah ini, method ***.split()*** cukup powerfull loh

let input2 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input2) {
    input2[1] = "Roman Alamsyah Elsharawy";
    input2[2] = "Provinsi " + input2[2];
    input2.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input2);

    let m = input2[3].split('/');
    console.log(m);
    if (m[1] === "05") {
        console.log("Mei");
    }

    [m[0], m[2]] = [m[2], m[0]];
    console.log(m);

    console.log(`${input2[3].split('/', 3).join("-")}`);

    console.log(`${String.prototype.padStart(15, input2[1])}`);
}
console.log("============================ Jawaban Soal 2 ============================");
dataHandling2(input2);
console.log("========================================================================\n");

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */