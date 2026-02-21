function groupAnimals(animals) {
    let kel = [];
    for(i = 0; i < 26; i++){
        let temp = [];
        for(j = 0; j < animals.length; j++){
            if(animals[j][0] === String.fromCharCode(i+97)){
                temp.push(animals[j]);
            }
        }
        if(temp.length > 0)
            kel.push(temp);
    }

    return kel;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]