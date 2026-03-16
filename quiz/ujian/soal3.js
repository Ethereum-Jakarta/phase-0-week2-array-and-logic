function groupAnimals(animals) {
    animals.sort();
    let result = [];
    
    for (let Animal of animals) {
        let y = Animal[0];
        let x = result[result.length - 1];
        
        if (x && x[0][0] === y) {
            x.push(Animal);
        } else {
            result.push([Animal]);
        }
    }
    
    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]