/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    animals.sort(); // Urutkan array secara alfabetis
    let result = []; // Array untuk menyimpan hasil kelompok

    for (let animal of animals) {
        let hurufAwal = animal[0];
        let groupFound = false;

        for (let group of result) {
            if (group[0][0] === hurufAwal) {
                group.push(animal);
                groupFound = true;
                break;
            }
        }

        if (!groupFound) {
            result.push([animal]);
        }
    }

    return result;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]