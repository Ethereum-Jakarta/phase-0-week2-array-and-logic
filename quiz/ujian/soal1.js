// ==========================
// Soal 1
// ==========================
/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let closest = Infinity;
  let idX = -1;
  let idO = -1;

  if (!arr.includes("x") || !arr.includes("o")) return 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "x") {
      idX = i;
    } else if (arr[i] === "o") {
      idO = i;
    }
    if (idX !== -1 && idO !== -1) {
      closest = Math.min(closest, Math.abs(idX - idO));
    }
  }
  return closest;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1

// ------------------------------------
console.log("");
// ------------------------------------
