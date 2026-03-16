/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2.
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  let adaX = false;
  let ditemukan = false;
  let posisiO = [];
  let jarak = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "x") {
      adaX = true;
    } else if (arr[i] == "o") {
      posisiO.push(i);
    }
  }

  if (!adaX) {
    return 0;
  }

  while (!ditemukan && jarak < arr.length) {
    jarak++;
    for (let j = 0; j < posisiO.length; j++) {
      let kiri = posisiO[j] - jarak;
      let kanan = posisiO[j] + jarak;

      if (
        (arr[kiri] === "x" && kiri >= 0) ||
        (arr[kanan] === "x" && kanan < arr.length)
      ) {
        ditemukan = true;
        break;
      }
    }
  }

  return jarak;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
