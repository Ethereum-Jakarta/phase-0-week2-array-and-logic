/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!
    var oIndex = arr.indexOf('o');
    var xIndex = arr.indexOf('x');
    var minDistance = arr.length; // Initialize to maximum possible distance

    if (oIndex === -1 || xIndex === -1) {
        return 0;
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] === 'x') {
                    var distance = Math.abs(i - j);
                    if (distance < minDistance) {
                        minDistance = distance;
                    }
                }
            }
        }
    }
    return minDistance;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1