/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!
    let oIndex = [];
    let xIndex = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "o") {
            oIndex.push(i)
        }
        if (arr[i] === "x") {
            xIndex.push(i)
        }
    }

    if(xIndex.length === 0 || oIndex.length === 0) {
        return 0;
    } 
    
    let jarakTerkecil = arr.length;
    for (let o of oIndex) {
        for (let x of xIndex) {
            let jarak = Math.abs(x - o);
            if (jarak < jarakTerkecil) {
                jarakTerkecil = jarak;
            }
        }
    }
    return jarakTerkecil;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1