/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    let posisiO = arr.indexOf('o'); // Cari posisi 'o'
    if (posisiO === -1) return 0; // Jika tidak ada 'o', return 0
  
    let jarakTerdekat = Infinity; // Inisialisasi dengan nilai sangat besar
    for (let i = 0; i < arr.length; i++) { // Loop melalui array untuk menemukan semua posisi 'x'.
      if (arr[i] === 'x') { // Jika menemukan 'x'
        let jarak = Math.abs(i - posisiO); // Hitung jarak absolut antara 'x' dan 'o'
        jarakTerdekat = Math.min(jarakTerdekat, jarak); // Simpan jarak terkecil
      }
    }
  
    return jarakTerdekat === Infinity ? 0 : jarakTerdekat; // Jika tidak ada 'x', return 0
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
