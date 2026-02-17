/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();
//   console.log(animals)
  let groupedAnimals = []
  let currentAnimals = [];
  let initial;
  for(let i = 0; i < animals.length; i++){
      currentAnimals = [];
      initial = animals[i][0]
      currentAnimals.push(animals[i]);
      for(let j = i + 1; j < animals.length; j++){
          if(initial == animals[j][0]){
            currentAnimals.push(animals[j]);
            i+=1;
        }
    }
    groupedAnimals.push(currentAnimals)
    // console.log(currentAnimals)
}
 return groupedAnimals;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]