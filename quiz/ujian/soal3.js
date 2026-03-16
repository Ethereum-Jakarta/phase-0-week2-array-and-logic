function groupAnimals(animals) {
    animals.sort()

    var groupOfAnimals = []
    var tempGroup = [animals[0]]

    for (var i = 1, n = animals.length; i < n; i++) {
        if (tempGroup[0][0] === animals[i][0]) {
            tempGroup.push(animals[i])
        } else {
            groupOfAnimals.push(tempGroup)
            tempGroup = [animals[i]]
        }
    }

    groupOfAnimals.push(tempGroup)

    return groupOfAnimals
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
