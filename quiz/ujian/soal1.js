/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!

    let posisiO;
    let posisiX;
    let jarakTerdekatSementara;
    let jarakTerdekat = Infinity;

    for(let i=0; i <= arr.length-1; i++){

        if(arr[i] === ' '){
            continue;
        } else if(arr[i] === 'o'){
            posisiO = i;
        } else if(arr[i] === 'x'){
            posisiX = i;
        } 
            
        if(posisiO !== undefined && posisiX !== undefined){
            if(posisiX > posisiO) {
                jarakTerdekatSementara = posisiX - posisiO;
            } else if(posisiO > posisiX){
                jarakTerdekatSementara = posisiO - posisiX;
            }
        }

        if(jarakTerdekatSementara < jarakTerdekat){
            jarakTerdekat = jarakTerdekatSementara;
        }
    }

    if(jarakTerdekat === Infinity){
        return 0;
    }
        
    return jarakTerdekat;
}


  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1

