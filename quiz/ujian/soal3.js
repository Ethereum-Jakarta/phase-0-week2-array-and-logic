// Soal 3

/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let hasilArray = [];
  animals.sort();

  for(let i=0; i<animals.length; i++){
    let animal = animals[i];
    let firstChar = animal[0];

    let found = false;
    for(let j=0; j<hasilArray.length; j++){
      if((hasilArray[j])[0][0] === firstChar){
        hasilArray[j].push(animal);
        found = true;
        break;
      }
    }
     if(!found){
        hasilArray.push([animal]);
    }
  }
  
  return hasilArray;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

// SOAL 3 DONE