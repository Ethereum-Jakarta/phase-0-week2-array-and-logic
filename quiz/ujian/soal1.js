/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let oArr = [],
    xArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") oArr.push(i);
    if (arr[i] === "x") xArr.push(i);
  }
  if (oArr.length !== 0 && xArr.length !== 0) {
    let minJarak = arr.length;
    for (let i = 0; i < oArr.length; i++) {
      for (let j = 0; j < xArr.length; j++) {
        jarakOX = Math.abs(oArr[i] - xArr[j]);
        if (minJarak > jarakOX) minJarak = jarakOX;
      }
    }
    return minJarak;
  }
  return 0;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
