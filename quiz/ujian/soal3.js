function groupAnimals(animals) {
    animals.sort()
    let urut = [];

    animals.forEach(element => {
        if (!urut[element[0]]) {
            urut[element[0]] = []
        }
        urut[element[0]].push(element)
    });
    return Object.values(urut)
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]