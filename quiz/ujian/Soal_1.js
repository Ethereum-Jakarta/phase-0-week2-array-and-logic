/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  
  let jarak_terkecil = 0;
  let posisi_o = [];
  let posisi_x = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      posisi_o.push(i);
    } else if (arr[i] === "x") {
      posisi_x.push(i);
    }
  }
  
  for (let i = 0; i < posisi_o.length; i++) {
    for (let j = 0; j < posisi_x.length; j++) {
      let selisih = Math.abs(posisi_x[j] - posisi_o[i]);

      if (jarak_terkecil === 0 || jarak_terkecil > selisih) {
        jarak_terkecil = selisih;
      }
    }
  }
  return jarak_terkecil;
}


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
