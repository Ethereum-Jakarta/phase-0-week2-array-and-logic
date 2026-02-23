/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2.
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
    let oIndexes = [];
    let xIndexes = [];
    let minDistance = arr.length;

    // indeks dari char o dan x ditambahkan ke array (jika ada)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            oIndexes.push(i);
        } else if (arr[i] === 'x') {
            xIndexes.push(i);
        }
    }

    // jika tidak ada char o maupun x
    if (oIndexes.length ===0 || xIndexes.length ===0) {
        return 0;
    }

    // cari minimum distance antara 'o' and any 'x'
    for (let i = 0; i < oIndexes.length; i++) {
        for (let j = 0; j < xIndexes.length; j++) {
            let distance = Math.abs(oIndexes[i] - xIndexes[j]);
            if (distance < minDistance) {
                minDistance = distance;
            }
        }
    }
    return minDistance;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1