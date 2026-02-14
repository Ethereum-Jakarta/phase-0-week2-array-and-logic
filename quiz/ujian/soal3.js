// Soal 3

/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/

function groupAnimals(animals) {
  // you can only write your code here!
  
  // Buat nama-nama hewan menjadi sejajar sesuai alpahabet huruh depan
  animals.sort();

  // Buat array kososng untuk menampilkan hasilnya
  let result = [];

  for(let i = 0; i < animals.length; i++) {

  if(result.length === 0) {
    // Jika array reslut masih ksosong
    // Masukan nama hewan ke array  reslut sebagai sub array
    result.push([animals[i]]);
  } else if(animals[i][0] === result[result.length - 1] [0][0]) {
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