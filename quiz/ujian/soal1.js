// ## Soal 1
// ```js
/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], 
maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  let oChar = [];
  let xChar = [];
  let jarakTerdekat = arr.length;

  // mencari huruf o dan x dan jika ada masukkan ke dalam array baru
  for (let i = 0; i < jarakTerdekat; i++) {
    if (arr[i] === "o") {
      oChar.push(i);
    } else if (arr[i] === "x") {
      xChar.push(i);
    }
  }

  // mengecek kasus yang beda dimana apakah ada x / o di dalam array tersebut
  if (oChar.length === 0 || xChar.length === 0) {
    return 0;
  }

  // mencari jarak terdekat antara o dan x
  for (let i = 0; i < oChar.length; i++) {
    for (let j = 0; j < xChar.length; j++) {
      let jarak = Math.abs(oChar[i] - xChar[j]);
      if (jarak < jarakTerdekat) {
        jarakTerdekat = jarak;
      }
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
