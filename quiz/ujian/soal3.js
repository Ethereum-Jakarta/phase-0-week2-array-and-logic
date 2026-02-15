
function groupAnimals(animals) {
    for (let i = 0; i < animals.length - 1; i++) {
        for (let j = 0; j < animals.length - 1 - i; j++) {
            if (animals[j] > animals[j + 1]) {
                let temp = animals[j];
                animals[j] = animals[j + 1];
                animals[j + 1] = temp;
            }
        }
    }

    let result = [];
    let temp = [animals[0]];

    for (let i = 1; i < animals.length; i++) {
        if (animals[i][0] === temp[0][0]) {
            temp.push(animals[i]);
        } else {
            result.push(temp);
            temp = [animals[i]];
        }
    }

    result.push(temp); 

    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

