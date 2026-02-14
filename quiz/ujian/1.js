/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let jarakTerdekT = Infinity;
  let jarakx = -1;
  let jarako = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'o') {
      jarako = i;
    } else if (arr[i] == 'x') {
      jarakx = i;
    }
    if (jarako != -1 && jarakx != -1) {
      let jarak = Math.abs(jarako - jarakx)
      
      if(jarak < jarakTerdekT){
        jarakTerdekT = jarak
      }
    }
  }
  if(jarako == -1 || jarakx == -1){
    return 0
  }
  return jarakTerdekT
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1