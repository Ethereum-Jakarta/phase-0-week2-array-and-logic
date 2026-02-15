/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.
 Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.
  Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2.
   Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    let tempatO = -1
    let tempatX = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]=="o") {
            tempatO = i            
        }else if (arr[i]=="x") {
            tempatX.push(i)            
        }
    }
    if (tempatX.length == 0) {
        return 0
    }
    for (let j = 0; j < tempatX.length; j++) {
        const element = tempatX[j];
        
    }
    let jarakTerdekat = 100000000
    for (let i = 0; i < tempatX.length; i++) {
        jarak = Math.abs(tempatX[i] - tempatO)
        if (jarak < jarakTerdekat) {
            jarakTerdekat = jarak
        }        
    }
    return jarakTerdekat
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1