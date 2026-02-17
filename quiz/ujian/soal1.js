/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter 
berupa array yang terdiri dari karakter. Function akan me-return jarak spasi
antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah 
['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let oIndexs = [];
  let xIndexs = [];
  let jarak = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      oIndexs.push(i);
    }

    if (arr[i] === "x") {
      xIndexs.push(i);
    }
  }

  let selisih = [];

  for (let i = 0; i < oIndexs.length; i++) {
    for (let j = 0; j < xIndexs.length; j++) {
      selisih.push(Math.abs(oIndexs[i] - xIndexs[j]));
    }
  }

  jarak = Math.min(...selisih);

  return jarak == Infinity ? 0:jarak;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
