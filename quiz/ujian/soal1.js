/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
   let indexO = [];
   let indexX = [];
   let jarakMin = Infinity;
   
   for (let i = 0; i < arr.length; i++) {
      if(arr[i] == 'o') {
         indexO.push(i);
      } else if (arr[i] == 'x') {
         indexX.push(i);
      }
   }
   
   if (indexO.length == 0 || indexX.length == 0) {
      return 0;
   }
   
   for (let i of indexO) {
      for (let j of indexX) {
         let jarak = Math.abs(i - j);
         if (jarak < jarakMin) {
            jarakMin = jarak;
         }
      }
   }
   
   return jarakMin;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1