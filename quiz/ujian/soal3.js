/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
   let groupHewan = {};
   let first;
   let hasil = [];
   
   for (let i = 0; i < animals.length; i++) {
      first = animals[i][0];
      if (groupHewan[first]) {
         groupHewan[first].push(animals[i]);
      } else {
         groupHewan[first] = [animals[i]];
      }
   }
   let urutkan = Object.entries(groupHewan).sort();
   for (let j = 0; j < urutkan.length; j++) {
      hasil.push(urutkan[j][1]);
   }
   
   return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]