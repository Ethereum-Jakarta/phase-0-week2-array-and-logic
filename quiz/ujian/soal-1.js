/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!

    let indexX = [];
    let indexO = [];
    let minimumDistance = Infinity;

    for (let a = 0; a < arr.length; a++) {
        if (arr[a] === "x") {
            indexX.push(a);
        } else if (arr[a] === "o") {
            indexO.push(a);
        }
    }

    if (indexX.length === 0 || indexO.length === 0) {
        return 0;
    } else {
        for (let b = 0; b < indexX.length; b++) {
            for (let c = 0; c < indexO.length; c++) {
                let distance = Math.abs(indexX[b] - indexO[c]);
                if (distance < minimumDistance) {
                    minimumDistance = distance;
                }
            }
        }
    }

    return minimumDistance;

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1