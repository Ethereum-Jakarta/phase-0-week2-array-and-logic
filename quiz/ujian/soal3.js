/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    let sortedGroups = []
    //sort
    let sortedAnimals = animals.sort()

    //

    //looping pengelompokan
    for (let i = 97; i < 123; i++) {
        let abjadAwal = String.fromCharCode(i);

        let tempGroup = []
        for (let j = 0; j < sortedAnimals.length; j++) {
            if (sortedAnimals[j].startsWith(abjadAwal)){
                tempGroup.push(sortedAnimals[j])
            };
        }
        if (tempGroup.length != 0) {
            sortedGroups.push(tempGroup)            
        }
    }
    return sortedGroups
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]