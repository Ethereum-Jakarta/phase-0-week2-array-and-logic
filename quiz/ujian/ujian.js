//1.

/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  let posisiO = [];
  let posisiX = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") posisiO.push(i);
    if (arr[i] === "x") posisiX.push(i);
  }

  if (posisiO.length === 0 || posisiX.length === 0) return 0;

  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < posisiX.length; j++) {
      let jarak = Math.abs(posisiO[i] - posisiX[j]);
      if (jarak < min) {
        min = jarak;
      }
    }
  }
  return min;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1

//2.

/*
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
*/
function mengelompokkanAngka(arr) {
  let genap = [];
  let ganjil = [];
  let kelipatan3 = [];

  for (let i = 0; i < arr.length; i++) {
    let angka = arr[i];
    if (angka % 3 === 0) {
      kelipatan3.push(angka);
    } else if (angka % 2 === 0) {
      genap.push(angka);
    } else {
      ganjil.push(angka);
    }
  }
  return [genap, ganjil, kelipatan3];
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

//3.

/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  animals.sort();

  let result = [];
  let group = [];

  group.push(animals[0]);

  for (let i = 1; i < animals.length; i++) {
    let current = animals[i];
    let prev = animals[i - 1];

    if (current[0] === prev[0]) {
      group.push(current);
    } else {
      result.push(group);
      group = [current];
    }
  }
  if (group.length > 0) {
    result.push(group);
  }
  return result;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
