# Akhirnya Logic dengan Array | Ujian

## Soal 1
```js
/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    let indexO = 0, indexX = 0, foundO = 0, foundX = 0, distance = 10000;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 'o'){
            indexO = i;
            foundO = 1;
        }else if(arr[i] === 'x'){
            indexX = i;
            foundX = 1;
        }

        if(foundO === 1 && foundX === 1){
            let tempDistance = Math.abs(indexO-indexX);
            if(tempDistance < distance){
                distance = tempDistance;
            }
        }
    }
    if(foundO === 0 || foundX === 0){
        return 0;
    }

    return distance;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
```
## Soal 2
```js
/*
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
*/
function mengelompokkanAngka(arr) {
    let arr1 = [], arr2 = [], arr3 = [], arrCombined = [];
    for(let i=0; i< arr.length;i++){
        if(arr[i] % 3 === 0){
            arr3.push(arr[i]);
        }else if(arr[i]%2 === 1){
            arr2.push(arr[i]);
        }else if(arr[i] % 2 === 0){
            arr1.push(arr[i]);
        }
    }
    return [arr1, arr2, arr3]
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]
```

## Soal 3
```js
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    let allArr = [];
    let found = 0;
    let similarArr = 0;
    for(let i=0;i<animals.length;i++){
        for(let y=0;y<allArr.length;y++){
            if(allArr[y][0][0] === animals[i][0] ){
                found = 1;
                similarArr = y;
                break;
            }
        }
        if(found === 1){
            allArr[similarArr].push(animals[i]);
        }else if(found === 0){
            allArr.push([animals[i]]);
        }
        found = 0;
    }
    allArr.sort((a, b) => a[0][0].localeCompare(b[0][0]));
    return allArr;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
```
 soal no 1 dan 3 itu menjadi obstacle tersulit wkwk