/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri 
dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  let shortestPath = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      for (let left = i - 1; left >= 0; left--) {
        if (arr[left] === 'x') {
          shortestPath = Math.min(shortestPath, i - left);
          break;
        }
      }

      for (let right = i + 1; right < arr.length; right++) {
        if (arr[right] === 'x') {
          shortestPath = Math.min(shortestPath, right - i);
          break;
        }
      }
    }
  }

  return shortestPath === Infinity ? 0 : shortestPath;
}



// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1