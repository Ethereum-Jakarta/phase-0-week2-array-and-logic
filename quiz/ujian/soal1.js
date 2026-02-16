/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!

    let hurufO =[] ;
    let hurufX =[];
    let hasil = [];

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === "o"){
      hurufO.push(i);
    }
    else if(arr[i] === "x"){
      hurufX.push(i);
    }
  }

  for (let j = 0; j < hurufO.length; j++) {
    for (let k = 0; k < hurufX.length; k++) {
      hasil.push(Math.abs(hurufO[j] - hurufX[k]));
    }
  }

  if(hasil[0] == undefined){
    hasil[0] = 0;
  }
  hasil.sort();


  return hasil[0];

  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1