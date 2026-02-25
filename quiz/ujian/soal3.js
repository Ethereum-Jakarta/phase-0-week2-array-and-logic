// Soal 3

/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/ 

// ==== ALGORITMA ====
// 1. Gunakan method .sort() untuk menjajarkan seluruh nama hewan sesuai urutan alphabet dari huruh depan setiap nama hewan nya
// 2. Buat variable array bernama result untuk menyimpan hasilnya
// 3. Gunakan for loop untuk memriksa setiap k=nama hewan dalam array
// 4. GUnakan pengkondisian if untuk memriksa jika array result lebih dari 0 dan jika huruf depan elemen dari array animals itu sama dengan huruf depan dari elemen yang ada di dalam array reslut, maka tambahkan elemen baru ke kandang atu array yang ada di result
// 5. Kembalikan hasilnya
function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();

  let result  = [];
  const HURUF_PERTAMA = 0;

  for(let i = 0; i < animals.length; i++) {

    if(result.length > 0 && animals[i][HURUF_PERTAMA] === result[result.length - 1][0][HURUF_PERTAMA]) {
      result[result.length - 1].push(animals[i]);
    } else {
      result.push([animals[i]]);
    }
    
  }
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
