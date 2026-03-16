// console.log("soal ke-1:");

// function targetTerdekat(arr) {
//     let indexOfO = -1; // mengibaratkan index dari "o" belum ditemukan
//     let indexOfX = -1; // mengibaratkan index dari "x" belum ditemukan

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "o" && i > indexOfO) { // kondisi untuk mencari "o" berada di index ke berapa?
//             indexOfO = i; // setelah dapat di index ke berapa? maka tampung index dari "o" ke variabel indexOfO
//             // console.log("index o:", indexOfO)
//         }

//         if (arr[i] === "x" && i > indexOfX) { // kondisi untuk mancari "x" berada di index ke berapa?
//             indexOfX = i; // setelah dapat di index ke berapa? maka tampung index dari "x" ke variavel indexOfX
//             // console.log("index x:", indexOfX)
//         }

//         if (indexOfO !== -1 && indexOfX !== -1) { // setelah mendapatkan index pertama dari string "o" dan "x" maka di lakukan kondisi lagi, dimana kita bandingkan dengan -1 yang mana diibaratkan -1
//             return Math.abs(indexOfO - indexOfX) // jika kedua index sudah ditemukan, maka akan dilakukan pengurangan dari index "o" dan "x" untuk mengetahui jaraknya. disini menggunakan method math.abs untuk selalu menghasilkan nilai positif
//         }
//     }
//     return 0; // jika index dari salah satu tidak ditemukan, maka akan return 0
// }

// console.log(targetTerdekat(['x', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1

// function mengelompokkanAngka(arr) {
//     let angkaGenap = [];
//     let angkaGanjil = [];
//     let angkaKelipatan3 = [];
//     let result = [angkaGenap, angkaGanjil, angkaKelipatan3]

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 === 0) {
//             angkaKelipatan3.push(arr[i]);
//         } else if (arr[i] % 2 === 0) {
//             angkaGenap.push(arr[i]);
//         } else {
//             angkaGanjil.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
// console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
// console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
// console.log(mengelompokkanAngka([])); // [ [], [], [] ]

function groupAnimals(animals) {
    let sort = animals.sort();
    let hurufAwal = animals[0][0];
    let sementara = [];
    let result = [];
    for (let i = 0; i < animals.length; i++) {
        console.log(`iterasi ke-${i}`)
        if (hurufAwal === animals[i][0]) {
            sementara.push(animals[i])
            console.log("output jika benar:", sementara)
        } else {
            result.push(sementara)
            console.log("jika salah, result:", result)
            sementara = [animals[i]]
            console.log("jika salah, sementara:", sementara)
            hurufAwal = animals[i][0]
            console.log("jika salah, huruf awal:", hurufAwal)
        }
    }
    result.push(sementara)
    return result;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil']]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]