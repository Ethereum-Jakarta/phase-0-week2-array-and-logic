function groupAnimals(animals) {
    // you can only write your code here!
    // for (let a = 1; a < animals.length; a++) {
    //     for (let b = 0; b < a; b++) {
    //         if (animals[a] < animals[b]) {
    //             sort = animals[a];
    //             animals[a] = animals[b];
    //             animals[b] = sort;
    //         }
    //     }
    // }
    animals.sort();
    let arrb = [];
    let kelompok = [];
    for (let i = 0; i < animals.length; i++) {
        if (kelompok.length === 0) {
            kelompok.push(animals[i])
        } else {
            if (animals[i][0] === kelompok[0][0]) {
                kelompok.push(animals[i])
            } else {
                arrb.push(kelompok)
                kelompok = [animals[i]];
            }
        }
    }
    if (kelompok.length > 0) {
        arrb.push(kelompok)
    }
    return arrb;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]