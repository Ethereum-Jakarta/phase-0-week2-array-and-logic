/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    let idxO = [];
    let idxX = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            idxO.push(i);
        } else if (arr[i] === 'x') {
            idxX.push(i);
        }
    }

    if (idxX.length === 0) {
        return 0; 
    }

    let minRanged = Infinity;
    for (let i = 0; i < idxO.length; i++) {
        for (let j = 0; j < idxX.length; j++) {
            let total = Math.abs(idxO[i] - idxX[j]);
            if (minRanged > total) {
                minRanged = total
            }
        }
    }
    return minRanged;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1