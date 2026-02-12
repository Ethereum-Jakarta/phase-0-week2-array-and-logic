/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
//     // you can only write your code here!
  let posisiO = -1;
  let posisiX = -1;
  let jarakTerdekat = Infinity;

  // Cari posisi karakter 'o' dan 'x' dalam array
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'o') {
          posisiO = i;
      }
      if (arr[i] === 'x') {
          posisiX = i;
      }

      // Jika sudah menemukan keduanya, hitung jaraknya
      if (posisiO !== -1 && posisiX !== -1) {
          jarakTerdekat = Math.min(jarakTerdekat, Math.abs(posisiO - posisiX));
      }
  }

  // Jika jarak terdekat masih Infinity, berarti tidak ada 'x'S
  return jarakTerdekat === Infinity ? 0 : jarakTerdekat;
}


  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1