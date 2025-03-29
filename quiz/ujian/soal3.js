function groupAnimals(animals) {
    return animals.sort().reduce((acc, animal) => {
        let group = acc.find(g => g[0][0] === animal[0]);
        group ? group.push(animal) : acc.push([animal]);
        return acc;
    }, []);
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]