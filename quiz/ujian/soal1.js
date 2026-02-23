/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let jarak = 0;
  let index_o_ditemukan = [];
  let x_ditemukan = false;
  let jarak_terdekat_ditemukan = false;

  // cek dulu apakah ada X di array
  for (let g = 0; g < arr.length; g++) {
    if (arr[g] === "x") {
        x_ditemukan = true; 
        break;
    } 
  }
  // kalau lolos berarti ada X, looping nggk mungkin unlimited
  if (!x_ditemukan) return 0;
  
  // cari kordinat atau index dari o yang ada dalam array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") index_o_ditemukan.push(i);
  }

  // cari x disekitar setiap o yang ditemukan dengan radius j (depan belakang)
  for (let j = 1; !jarak_terdekat_ditemukan; j++) {
    jarak++;
    for (let f = 0; f < index_o_ditemukan.length; f++) {
        // cari dari o ke depan dan ke belakang
        if ((arr[index_o_ditemukan[f] + j] === "x") || (arr[index_o_ditemukan[f] - j] === "x")) {
            // kalau ketemu maka stop pencarian radius j
            jarak_terdekat_ditemukan = true;
            break;
        } 
    }
  }

  return jarak;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1