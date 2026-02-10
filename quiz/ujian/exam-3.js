

function groupAnimals(animals) {
    animals.sort()
    let group = [];
    for (let i = 0; i < animals.length; i++) {
        if (group.length === 0) {
            group.push([animals[i]]);
        } else {
            let lastGroup = group[group.length - 1];
            if (lastGroup[0][0] === animals[i][0]) {
                lastGroup.push(animals[i]);
            } else {
                group.push([animals[i]]);
            }
        }
    }
    return group
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]