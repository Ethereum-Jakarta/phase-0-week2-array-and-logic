//  Soal 1

/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let oIndex = [];
  let xIndex = [];

  for(let i=0; i<arr.length; i++){
    if(arr[i]==='o'){
        oIndex.push(i);
    }
    else if(arr[i]==='x'){
        xIndex.push(i);
    }
  }

  if(xIndex.length === 0){
        return 0;
  }

  let jarakNow=100;
  let jarakPrev;
  for(let o=0; o<oIndex.length; o++){
    for(let x=0; x<xIndex.length; x++){
        jarakPrev=Math.abs(xIndex[x]-oIndex[o])
        if(jarakPrev < jarakNow){
        jarakNow=jarakPrev;
      }
    }
  }

return jarakNow;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1

// SOAL 1 DONE