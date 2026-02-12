/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    let posisi1 = arr.indexOf('o'); // indexOf untuk mencari suatu index pada array
    let posisi2 = [];

    for (let i = 0; i < arr.length; i++) { // mencari semua index 'x'
        if (arr[i]  === 'x') {
            posisi2.push(i);
        }
    }

    if (posisi2.length === 0) {
        return 0;
    }

    let terdekat = Infinity; // nilai awal sangat besar
    for (let i=0; i < posisi2.length; i++) {
        let jarak = Math.abs (posisi2[i] - posisi1); // menghitung selisih posisi
        if (jarak < terdekat) {
            terdekat = jarak;
        }
    }
    return terdekat;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1