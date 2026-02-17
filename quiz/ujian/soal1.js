/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

function targetTerdekat(arr) {
  if (!arr.includes('x')) {
    return 0
  }
  let posisiO = 0
  let kanan = 0
  let kiri = 0
  let data = arr
  let result = []
  for (let i = 0; i < arr.length ; ++i) {
    data = arr[i]
    if (data === 'o'){
      posisiO = i
      kanan = Math.abs(arr.indexOf('x',posisiO) - posisiO)
      if (posisiO !== 0) {
        kiri = Math.abs(arr.lastIndexOf('x',posisiO) - posisiO)
        result.push(kiri)
      }
      result.push(kanan)
    }
  }
  return Math.min(...result)
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1