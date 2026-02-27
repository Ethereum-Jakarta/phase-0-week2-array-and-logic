/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  let posisiO = [];
  let posisiX = [];
  let jarakTerdekat = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "x") {
      posisiX.push(i);
    } else if (arr[i] === "o") {
      posisiO.push(i);
    }
  }
  if (posisiX.length === 0 || posisiO.length === 0) return 0;

  for (let j = 0; j < posisiO.length; j++) {
    for (let k = 0; k < posisiX.length; k++) {
      let jarak = Math.abs(posisiO[j] - posisiX[k]);
      jarakTerdekat = Math.min(jarakTerdekat, jarak);
    }
  }
  return jarakTerdekat;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
