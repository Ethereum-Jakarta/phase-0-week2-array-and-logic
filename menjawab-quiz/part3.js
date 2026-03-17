// function cariMean(arr) {
//     let cariMeanSementara = 0;
//     let hasilMean = 0;

//     for (let i = 0; i < arr.length; i++) {
//         cariMeanSementara += arr[i];
//     }
//     hasilMean = cariMeanSementara / (arr.length);
//     hasilMean = Math.round(hasilMean);
//     return hasilMean;
// }
  
// // TEST CASES
// console.log(cariMean([1, 2, 3, 4, 5])); // 3
// console.log(cariMean([3, 5, 7, 5, 3])); // 5
// console.log(cariMean([6, 5, 4, 7, 3])); // 5
// console.log(cariMean([1, 3, 3])); // 2
// console.log(cariMean([7, 7, 7, 7, 7])); // 7



// //SOAL KE-2

// /*
// Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka. Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri. Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24], karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.
// */

// function perkalianUnik(arr) {
//     let result;     // ini variabel penampung sementara
//     let resultAkhir = [];
//     for (let i = 0; i < arr.length; i++) {  //ini lopping 
//         result = 1;

//         for (let j = 0; j < arr.length; j++) {
//             if (j === i) continue;              //KUNCINYA DI SINI TERNYATAAA AKKKKKKKKKKKASHDFJSDH
//             result = result * arr[j];
//         }
//         console.log(result)
//         resultAkhir[i] = result;
//     }  
//     return resultAkhir; 
// }
  
// // TEST CASES
// console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
// // console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
// // console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
// // console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
// // console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]




//SOAL KE-3

function tentukanDeretAritmatika(arr) {
    let selisih = arr[1] - arr[0];
    // console.log(selisih);
    let hasilSementara = [];
    let hasilAkhir;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + selisih === arr[i + 1]) {
            hasilSementara[i] = true;
        } else {
            hasilSementara[i] = false;
        }
    }
    console.log(hasilSementara);

    if (hasilSementara.every(value => value === true)) {
        return true;
    } else {
        return false;
    }
}
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false




//SOAL KE-4

function tentukanDeretGeometri(arr) {
    let rasio = arr[1] / arr[0];
    let hasilSementara = [];

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] * rasio === arr[i + 1]) {
            hasilSementara[i] = true;
        } else {
            hasilSementara[i] = false;
        }
    }
    console.log(hasilSementara);

    if (hasilSementara.every(value => value === true)) {
        return true;
    } else {
        return false;
    }
}
  
// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false


