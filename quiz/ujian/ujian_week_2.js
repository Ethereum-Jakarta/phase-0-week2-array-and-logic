/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  var indexEks, indexO, hasil = [], idx=0;
  for(var i=0; i < arr.length; i++) {
    if(arr[i] == 'o' || arr[i] =='x') {
       arr[i] == 'x' ? indexEks = i: indexO = i;
       hasil[idx] = isNaN(Math.abs(indexO - indexEks)) ? Infinity:Math.abs(indexO - indexEks);
       idx++;
    }
  }
     return hasil == Infinity ? 0: Math.min(...hasil);
}
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
/*
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
*/
function mengelompokkanAngka(arr) {
  // you can only write your code here!
  var hasil =[[],[],[]],idx=0,idx_genap=0, idx_kel_tiga=0, idx_ganjil=0;
  for(var i=0; i < arr.length; i++) {
   if(arr[i] % 3 === 0) {
    hasil[2][idx_kel_tiga] = arr[i];
    idx_kel_tiga++;
   } else if(arr[i] % 2 === 0) {
    hasil[0][idx_genap] = arr[i];
    idx_genap++;
   } else {
    hasil[1][idx_ganjil] = arr[i];
    idx_ganjil++;
   }
  }
  return JSON.stringify(hasil);
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
 animals.sort((x, y) => x[0].localeCompare(y[0]));
  // declare empty array
 var hasil = [[animals[0]]];
 animals.slice(1).forEach( (e,i) => {
 if(e[0] == animals[i][0]) {
 hasil[hasil.length-1].push(e);
 } else{
 hasil.push([e]);
 }
 });
 
 return JSON.stringify(hasil);
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]