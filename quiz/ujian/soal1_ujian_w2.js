//  Soal 1
// js
/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let list_indeks_o = []
  let list_indeks_x = []
  let list_jarak = []

  for (let x = 0; x < arr.length; x++){
    if (arr[x] === 'o'){
      // console.log(`${arr[x]} : ${x}`)
      list_indeks_o.push(x)
    }
    else if (arr[x] === 'x'){
      // console.log(`${arr[x]} : ${x}`)
      list_indeks_x.push(x)
    }
  }

  if (list_indeks_o.length > 0 && list_indeks_x.length > 0){
    for (let a = 0; a < list_indeks_o.length; a++){
      for (let b = 0; b < list_indeks_x.length;b++){
        selisih = Math.abs(list_indeks_o[a] - list_indeks_x[b])
        list_jarak.push(selisih)
      }
    }
    return Math.min(...list_jarak)
  }
  else{
    return 0
  }

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
