/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    let indexO = -1; 
    let indexX = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "o") {
            indexO = i;
        } else if (arr[i] === "x") {
            indexX.push(i);
        }
    }

    if (indexO === -1 || indexX.length === 0) {
        return 0;
    }

    let jarakDekat = Infinity;

    for (let j = 0; j < indexX.length; j++) {
        let cariJarak = Math.abs(indexO - indexX[j]);
        if (cariJarak < jarakDekat) {
            jarakDekat = cariJarak;
        }
    }
    return jarakDekat;
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1