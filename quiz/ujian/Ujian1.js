/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
      let ooo=0;
  for (var i=0; i<arr.length;i++) {
    if(arr[i] == 'o') {
      ooo = i
    }
  }
  let jarak=[]
  let depan=0;
  for(var up=ooo; up<arr.length;up++) {
    if(arr[up] == 'x') {
      jarak.push(depan)
      break;
    }
      depan +=1
    }
    let belak=0;
    for(var down=ooo; down>=0;down--) {
      if(arr[down] == 'x') {
      jarak.push(belak)
      break;
      }
        belak +=1
    }
    if(!arr.includes('x')) {
      return 0
    }
    return Math.min(...jarak)
    }
  

  


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1