/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  let min = Infinity;
  let idx_o = -1;
  let idx_x = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      idx_o = i;

      if (idx_x !== -1) {
        const distance = Math.abs(idx_o - idx_x);
        if (distance < min) min = distance;
      }
    }

    if (arr[i] === "x") {
      idx_x = i;

      if (idx_o !== -1) {
        const distance = Math.abs(idx_x - idx_o);
        if (distance < min) min = distance;
      }
    }
  }

  return min === Infinity ? 0 : min;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
