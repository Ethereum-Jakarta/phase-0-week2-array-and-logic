/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  let indeksO = -1
  let indeksX = -1
  let jarakTerdekat = arr.length
  let ditemukanX = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      indeksO = i
      if (indeksX !== -1) {
        let jarak = Math.abs(indeksO - indeksX)
        if (jarak < jarakTerdekat) {
          jarakTerdekat = jarak
        }
      }
    } else if (arr[i] === 'x') {
      indeksX = i
      ditemukanX = true
      if (indeksO !== -1) {
        let jarak = Math.abs(indeksX - indeksO)
        if (jarak < jarakTerdekat) {
          jarakTerdekat = jarak
        }
      }
    }
  }
  return ditemukanX ? jarakTerdekat : 0
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1