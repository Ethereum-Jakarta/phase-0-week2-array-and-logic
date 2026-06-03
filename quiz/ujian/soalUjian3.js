function groupAnimals(animals) {
    animals.sort();
    let hasil = [ [animals[0]] ];

    for (let i = 1; i < animals.length; i++) {
        if (animals[i][0] === animals[i - 1][0]) {
            hasil[hasil.length - 1].push(animals[i]);
        } else {
            hasil.push([animals[i]]);
        }
    }
    return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]