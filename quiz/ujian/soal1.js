/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

function targetTerdekat(arr) {
  let posisiO = [];
  let posisiX = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      posisiO.push(i);
    } else if (arr[i] === "x") {
      posisiX.push(i);
    }
  }

  let jarakDekat = Infinity;

  for (i = 0; i < posisiO.length; i++) {
    for (j = 0; j < posisiX.length; j++) {
      let jarak = Math.abs(posisiX[j] - posisiO[i]);
      jarakDekat = Math.min(jarakDekat, jarak);
    }
  }

  if (jarakDekat === Infinity) {
    return 0;
  } else {
    return jarakDekat;
  }
}
// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
