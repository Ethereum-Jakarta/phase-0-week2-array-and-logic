/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    let pos_o = -1;
    let pos_x = [];
    let minDistance = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            pos_o = i
        } else if (arr[i] === 'x') {
            pos_x.push(i);
        }
    }
    
        if (pos_x.length === 0) 
            return 0
        
    for (let j = 0; j < pos_x.length; j++) {
        let dis = Math.abs(pos_x[j] - pos_o);
        if (dis < minDistance) {
            minDistance = dis
        }
    } return minDistance ;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1