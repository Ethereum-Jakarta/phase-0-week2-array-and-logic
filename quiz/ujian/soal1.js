/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let x = arr
    .map((value, index) => (value === "x" ? index : -1))
    .filter((index) => index !== -1);
  let o = arr
    .map((value, index) => (value === "o" ? index : -1))
    .filter((index) => index !== -1);

  if (x.length === 0) return 0;

  let result = Infinity;

  for(let i = 0; i < o.length; i++) {
    for(let j = 0; j < x.length; j++) {
        let distance = Math.abs(o[i] - x[j]);

        if(distance < result) {
            result = distance;
        }
    }
  }
  
  return result;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
