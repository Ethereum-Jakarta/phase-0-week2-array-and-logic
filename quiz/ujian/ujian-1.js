// Soal 1

/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    let positionX = [];
    let positionO = [];
    let shortDist = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            positionX.push(i);
        } else if (arr[i] === 'o') {
            positionO.push(i);
        }
    }

    if (positionX.length === 0 || positionO.length === 0) {
        return 0;
    }

    for (let o of positionO) {
        for (let x of positionX) {
            let distance = Math.abs(o - x);
            if (distance < shortDist) {
                shortDist = distance;
            }
        }
    }

    return shortDist;
}


// TEST CASES
console.log("============================ Jawaban Soal 1 ============================");
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
console.log("========================================================================\n");