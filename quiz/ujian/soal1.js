/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'],
maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    let jarakTerdekat = Infinity;
    let indexX = [];
    let indexO = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "x") indexX.push(i);
        if (arr[i] === "o") indexO.push(i);
    }

    if (indexO.length === 0 || indexX.length === 0) {
        return 0;
    }

    for (let o = 0; o < indexO.length; o++) {
        for (let x = 0; x < indexX.length; x++) {
            let jarakSementara = Math.abs(indexO[o] - indexX[x]);
            jarakTerdekat = Math.min(jarakSementara, jarakTerdekat);
        }
    }

    return jarakTerdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
