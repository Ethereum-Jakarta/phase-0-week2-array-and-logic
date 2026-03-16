/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2.
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

function targetTerdekat(arr) {
    // you can only write your code here!    
    
    let posisiO = [];
    let posisiX = [];

    // Cari posisi semua 'o' dan 'x'
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            posisiO.push(i);
        } else if (arr[i] === 'x') {
            posisiX.push(i);
        }
    }

    // Jika tidak ada 'x', return 0
    if (posisiX.length === 0) return 0;
    if (posisiO.length === 0) return 0;

    let jarakTerdekat = Infinity;

    // Bandingkan setiap 'o' dengan setiap 'x'
    for (let o of posisiO) {
        for (let x of posisiX) {
            let jarak = Math.abs(x - o);
            if (jarak < jarakTerdekat) {
                jarakTerdekat = jarak;
            }
        }
    }

    return jarakTerdekat;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1