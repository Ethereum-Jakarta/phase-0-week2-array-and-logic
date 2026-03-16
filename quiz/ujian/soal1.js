/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    let arrX = [];
    let arrO = [];

    for(let i = 0; i<arr.length; i++){
        if(arr[i] == 'x'){
            arrX.push(i);
        }
        
        else if(arr[i] == 'o'){
            arrO.push(i);
        }
    }

    if (arrX.length == 0 || arrO.length == 0){
        return 0;
    }

    let jarak = Infinity;
    

    for (let indexX of arrX){
        for (let indexO of arrO){
            let container = Math.abs(indexX - indexO);
            if (container<jarak){
                jarak = container
            }
        }
    }
    return jarak;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1