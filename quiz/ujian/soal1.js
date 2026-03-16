/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  let lowestDistance = 99999;
  let currentDistance = 0;
  let o = -1;
  let x = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      o = i;
    }

    if (arr[i] === "x") {
      x = i;
    }

    if (x > -1 && o > -1) {
      currentDistance = Math.abs(o - x);
    }

    if (currentDistance !== 0 && currentDistance < lowestDistance) {
      lowestDistance = currentDistance;
    }
  }

  if (x < 0 || o < 0) {
    return 0;
  } else {
    return lowestDistance;
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1