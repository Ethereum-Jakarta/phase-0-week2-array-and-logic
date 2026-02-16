/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    let corO = 0;
    let corX = 0;
    let result = [];
    for (i = 0; i <= arr.length -1; i++){
        if (arr[i] === 'o'){
            corO = i;
            if (corX !== 0){
                result.push(corX-corO);
            }
        }
        if (arr[i] === 'x'){
            corX = (i)
            if (corX !== 0){
                result.push(corX-corO);
            }
        }
    }
    let realResult = Math.min(...result);
    if (realResult < 0){
        return realResult * -1;
    } else if(realResult === Infinity) {
        return 0;
    } else if(realResult > 0){
        return realResult;
    }
  }
 
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1 