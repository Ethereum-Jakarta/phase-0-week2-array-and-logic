/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!
    let xIndex = [];
    let oIndex = [];
    let result = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      if(arr[i] === 'x'){
        xIndex.push(i);
      }
      if(arr[i] === 'o'){
        oIndex.push(i);
      }
    }

    arr.length = 0;

    for (let j = 0; j < oIndex.length; j++){
      for (let k = 0; k < xIndex.length; k++){
        if(oIndex[j] > xIndex[k]){
          arr.push(oIndex[j] - xIndex[k]);
        } else {
          arr.push(xIndex[k] - oIndex[j]);
        }
      }
    }

    result = Math.min(...arr);
    if(result === Infinity){
      return 0;
    }
    return result;
  }
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1