/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!

  // jawaban

  // --- kerangka berpikir ---
  // kita cari dan simpen dlu posisi "o" dan posisi "x" dalam bentuk array, 
  // terus kita pilih posisi antara "o" dan "x" yg saling berdekatan.
  // lalu hitung selisihnya.
  let posO = [];
  let posX = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      posO = [i];
      console.log("posisi 'o' ada di " + [i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "x") {
      posX = [i];
      console.log("posisi 'x' ada di " + [i]);
    } 
  }
  // sekarang kita udh dapet posisinya. tantangan selanjutnya, gimana caranya kita pilih posisi "o" dan "x" yg berdekatan?
  // I'M STUCK NOW

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1