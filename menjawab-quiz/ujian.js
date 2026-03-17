// //SOAL KE-1

// function targetTerdekat(arr) {
//     let indexO = [];
//     let indexX = [];
//     let distance = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "o"){
//             indexO.push(i);
//         } else if ( arr[i] === "x") {
//             indexX.push(i);
//         }
//     }

//     if (indexX.length === 0) {
//         return 0;
//     }

//     // console.log(indexO);
//     // console.log(indexX);
    
//     for (let i = 0; i < indexO.length; i++) {
//         for(let j = 0; j < indexX.length; j++) {
//             distance.push(Math.abs(indexO[i] - indexX[j]));
//         }
//     }

//     distance = Math.min(...distance);
//     return distance;
// }
  
// // TEST CASES
// console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1




// //SOAL KE-2

// /*
// Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. Function akan me-return array multidimensi di mana array tersebut berisikan 3 kategori/kelompok:

// kelompok pertama (baris pertama) merupakan angka-angka genap
// kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
// kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
// Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
// */

// function mengelompokkanAngka(arr) {
//     let kelompokAngka = [
//         [],
//         [],
//         []
//     ]

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 3 === 0 ) {
//             kelompokAngka[2].push(arr[i]);
//         } else if (arr[i] % 2 === 1) {
//             kelompokAngka[1].push(arr[i]);
//         } else if (arr[i] % 2 === 0) {
//             kelompokAngka[0].push(arr[i]);
//         }

//     }
//     return kelompokAngka;
// }
  
// // TEST CASES
// console.log(mengelompokkanAngka([3, 6, 9])); // [ [2, 4], [], [6] ]
// console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
// console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
// console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
// console.log(mengelompokkanAngka([])); // [ [], [], [] ]




//SOAL KE-3

/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    animals.sort();
    let kelompokHewan = [];
    let kelompokHuruf = [];

    for (let i = 0; i < animals.length; i++) {
        if (!kelompokHuruf.includes(animals[i][0])) {
            kelompokHuruf.push(animals[i][0]);
        }
    }

    for (let i = 0; i < kelompokHuruf.length; i++) {
        kelompokHewan.push([]);
    }

    // console.log(kelompokHewan);
    // console.log(kelompokHuruf);

    for (let i = 0; i < animals.length; i++) {
        // console.log(animals[i]);
        for (let j = 0; j < kelompokHuruf.length; j++ ) {
            if (animals[i][0] === kelompokHuruf[j]) {
                // console.log(animals[i]);
                kelompokHewan[j].push(animals[i]);  
            }
        }
    }

    return kelompokHewan;
}
  
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


//PUAAAAAAS BGTTT!! GOKIL!! TERIMA KASIH RPN!  btw ternyata sepusing itu ngerjainnya...