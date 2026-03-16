// function cariMean(arr) {
//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         result += arr[i];
//     }

//     let mean = Math.round(result / arr.length);
//     return mean;
// }

// // TEST CASES
// console.log(cariMean([1, 2, 3, 4, 5])); // 3
// console.log(cariMean([3, 5, 7, 5, 3])); // 5
// console.log(cariMean([6, 5, 4, 7, 3])); // 5
// console.log(cariMean([1, 3, 3])); // 2
// console.log(cariMean([7, 7, 7, 7, 7])); // 7

// array merupakan copy by reference, jika sudah diperbarui maka data awal juga diperbarui
// function perkalianUnik(arr) {
//     let result = [];
//     let newArr = arr;
//     let shiftArr;
//     // you can only write your code here!
//     for (let i = 0; i < newArr.length; i++) {
//         // console.log("array:", arr);
//         // console.log("iterasi ke:", i)
//         shiftArr = arr.splice(i, 1); // menghapus array pertama sampai seterusnya agar dia tidak terkalikan
//         // console.log("shift arr:", shiftArr);
//         result.push(arr.reduce((x, y) => x * y)); // mengalikan array x dan y
//         // console.log("menambahkan result:", result);
//         newArr.unshift(shiftArr);
//         // console.log("mengembalikan array:", newArr);
//     }
//     return result;
// }

// TEST CASES
// console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
// console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
// console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
// console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
// console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

//tentukan apakah ini deret aritmatika atau bukan
// function tentukanDeretAritmatika(arr) {
//     let result;
//     let beda = arr[1] - arr[0];
//     for (let i = 1; i < arr.length - 1; i++) {
//         // console.log("ouput:", arr[i] - arr[i - 1])
//         if (arr[i] - arr[i - 1] === beda) {
//             result = true;
//         } else {
//             result = false;
//         }
//     };

//     return result
// };

// // TEST CASES
// console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
// console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
// console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
// console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
// console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    let beda = arr[1] / arr[0];

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] / arr[i] !== beda) {
            return false;
        }
    }

    return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
