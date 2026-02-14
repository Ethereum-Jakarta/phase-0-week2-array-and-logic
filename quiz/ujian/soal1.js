/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  let indexx = [];
  let indexo = [];
  let jarakpendek = 999;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "x") {
      indexx.push(i);
    } else if (arr[i] == "o") {
      indexo.push(i);
    }
  }
  if (indexx.length === 0) {
    return 0;
  }
  for (let j = 0; j < indexo.length; j++) {
    for (let k = 0; k < indexx.length; k++) {
      let selisih = Math.abs(indexo[j] - indexx[k]);
      if (selisih < jarakpendek) {
      jarakpendek = selisih;
    }
    }
    
  }
  return jarakpendek;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
