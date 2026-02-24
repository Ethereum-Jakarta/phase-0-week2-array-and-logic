/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code
    if (arr.includes("x") === false) {
        return 0;
    }
    let charO = [];
    let charX = [];
    let jarak = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "o") {
            charO.push(i);
        }
        if (arr[i] === "x") {
            charX.push(i);
        }
    }
        for (let a = 0; a < charO.length; a++) {
            for (let b = 0; b < charX.length; b++) {
                jarak.push(Math.abs(charO[a] - charX[b]));
            }
        }
    return Math.min(...jarak);
}
// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
//TEST CASES GW SENDIRI
console.log(targetTerdekat(["o", "o", "o", " ", " ", "x", " ", "x"])); // 2
console.log(targetTerdekat(["o", "o", "o", " ", "x", "x", " ", "x"])); // 2