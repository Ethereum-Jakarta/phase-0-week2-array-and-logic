/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let abjad = ''
  let animal = ''
  let HPAnimal =''
  let result = []
  let finalResult = []
  for (let i = 0; i < alphabet.length; ++i) {
    abjad= alphabet[i]
    for (let j = 0; j < animals.length; ++j) {
      animal = animals[j]
      HPAnimal = animal[0]
      if (abjad === HPAnimal) {
        result.push(animal)
      }
    }
    if (result.length > 0) {
      finalResult.push(result)
    } else if (result.length === 0) {
      continue
    }
    result = []
  }
  return finalResult
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]