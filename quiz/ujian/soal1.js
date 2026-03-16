/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let charXPosition = null
  let charOPosition = null
  let minValue = 0

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === "x" ) {
      charXPosition = i
    } else if (arr[i] === "o") {
      charOPosition = i
    }
    if(charOPosition !== null && charXPosition !== null) {
      let diff = Math.abs(charXPosition - charOPosition)
      if(minValue === 0 || diff < minValue) {
        minValue = diff
      }
    }
  }
  if(charXPosition === 0) return 0

  // looping for min value
  return minValue
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
