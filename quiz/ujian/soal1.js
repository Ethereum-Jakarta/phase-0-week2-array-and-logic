/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!
    let arrO = [];
    let arrX = [];
    let minDistance = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "x"){
            arrX.push(i);
        }

        if (arr[i] === "o"){
            arrO.push(i);
        }
    }
    let distance;
    if(arrO.length !== 0 && arrX.length !== 0){
        minDistance = arr.length;
        for (let idxO of arrO){
            for (let idxX of arrX){
                distance = Math.abs(idxO - idxX);
                if(minDistance > distance){
                    minDistance = distance;
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