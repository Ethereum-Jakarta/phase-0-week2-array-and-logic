/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  // simpan index dari karakter X dan O dalam variabel baru
  let indexO = [];
  let indexX = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == "o") {
      indexO.push(index);
    } else if (arr[index] == "x") {
      indexX.push(index);
    }
  }

  // jika tidak ada X atau O sama sekali, return 0
  let hasilPerkalian = [];
  if (indexO.length == 0 || indexX.length == 0) {
    return 0;
  }

  // jika ada, kurangi semua nilai dari indexO dan indexX, lalu simpan semua hasilnya di hasilPerkalian
  for (const O of indexO) {
    for (const X of indexX) {
      hasilPerkalian.push(Math.abs(O - X));
    }
  }

  // kembalikan nilai terkecil dari hasilPerkalian
  return Math.min(...hasilPerkalian);
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
