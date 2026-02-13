// # Akhirnya Logic dengan Array | Ujian

// ## Soal 1
// ```js
// /*
// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri 
// dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
// Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
// Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
// */
function targetTerdekat(arr) {
     // Versi Panjang
//   // you can only write your code here!
//     let o = arr.indexOf('o');
//     let x = arr.indexOf('x');
//     let jarak = Math.abs(o - x);
//     if (arr.indexOf('x') === -1) {
//         return 0
//     }
//     let temp = arr.length;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'o') {
//             for (let j = 0; j < arr.length; j++) {
//                 if (arr[j] === 'x') {
//                     if (temp > Math.abs(i - j)) {
//                         temp = Math.abs(i - j);
//                     }
//                 }
//             }
//         }
//     }
//     return temp;

    // Versi Lebih Clean
    let o = arr.indexOf('o');
    if (o === -1 || arr.indexOf('x') === -1) return 0;

    let jarak = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            jarak = Math.min(jarak, Math.abs(i - o));
        }
    }
    return jarak;
}



// // TEST CASES
console.log("Soal 1")
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
// ```
// ## Soal 2
// ```js
// /*
// Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi 
// angka-angka. Function akan me-return array multidimensi dimana array tersebut berisikan 
// 3 kategori/kelompok:

// kelompok pertama (baris pertama) merupakan angka-angka genap
// kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
// kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
// Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
// */
function mengelompokkanAngka(arr) {
  // you can only write your code here!
    let genap = [];
    let ganjil = [];
    let kelipatan3 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] % 3 !== 0) {
            genap.push(arr[i]);
        } else if (arr[i] % 2 !== 0 && arr[i] % 3 !== 0) {
            ganjil.push(arr[i]);
        } else if (arr[i] % 3 === 0) {
            kelipatan3.push(arr[i]);
        }
    }
    return [genap, ganjil, kelipatan3];
}

// // TEST CASES
console.log("\nSoal 2")
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
// ```

// ## Soal 3
// ```js
// /*
// diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
// fungsi ini akan me-return array 2 dimensi
// */
function groupAnimals(animals) {
    // Versi Panjang
//     let hasil = [];
//     let temp = [];
//     for (let i = 0; i < animals.length; i++) {
//         if (temp.indexOf(animals[i][0]) === -1) {
//             temp.push(animals[i][0]);
//             hasil.push([animals[i]]);
//         } else {
//             for (let j = 0; j < hasil.length; j++) {
//                 if (hasil[j][0][0] === animals[i][0]) {
//                     hasil[j].push(animals[i]);
//                 }
//             }
//         }
//     }
//     return hasil;

    // Versi Singkat dan Lebih Clean
    let kelompok = {};
    animals.forEach(animal => {
        let hurufPertama = animal[0];
        if (!kelompok[hurufPertama]) {
            kelompok[hurufPertama] = [];
        }
        kelompok[hurufPertama].push(animal);
    });

    return Object.keys(kelompok).map(key => kelompok[key]);
}

// // TEST CASES
console.log("\nSoal 3")
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
// ```
//  soal no 1 dan 3 itu menjadi obstacle tersulit wkwk