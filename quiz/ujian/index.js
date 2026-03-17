function targetTerdekat(arr) {
    let posO = arr.indexOf('o');
    if (posO === -1) return 0; 
    let minjarak = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'x') {
        let jarak = Math.abs(i - posO);
        minjarak = Math.min(minjarak, jarak);
      }
    }
  
    return minjarak === Infinity ? 0 : minjarak;
  }

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1

function mengelompokkanAngka(arr) {
    let genap = [];
    let ganjil = [];
    let kelipatanTiga = [];
  
    for (let num of arr) {
      if (num % 3 === 0) {
        kelipatanTiga.push(num);
      } else if (num % 2 === 0) {
        genap.push(num);
      } else {
        ganjil.push(num);
      }
    }
  
    return [genap, ganjil, kelipatanTiga];
  }
  // TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
function groupAnimals(animals) {
    animals.sort(); // Urutkan secara alfabetis
  
    let result = [];
    let group = [animals[0]]; // Inisialisasi grup pertama
  
    for (let i = 1; i < animals.length; i++) {
      if (animals[i][0] === animals[i - 1][0]) {
        group.push(animals[i]); // Tambahkan ke grup yang sama jika huruf awalnya sama
      } else {
        result.push(group);
        group = [animals[i]]; // Buat grup baru
      }
    }
  
    result.push(group); // Masukkan grup terakhir ke hasil
  
    return result;
  }
  // TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]