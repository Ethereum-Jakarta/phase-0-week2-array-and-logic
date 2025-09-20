function groupAnimals(animals) {
    let objani = {}
    let res = []
    for (let i = 0; i < animals.length; i++) {
        let initial = animals.sort()[i][0]
        for (let j = 0; j < animals.length; j++) {
            if (!objani[initial]) {
                objani[initial]=[]
            }
        };
        objani[initial].push(animals[i])
    };
    for (const key in objani) {
        res.push(objani[key])
    }
    return res
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]  

