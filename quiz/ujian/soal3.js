function groupAnimals(animals) {
    hewan = []
    groupHewan = []

    for (let i = 0; i < animals.length; i++) {
        if (!groupHewan.includes(i)) {
            groupHewan.push(i);
            group = [animals[i]];
            hurufPertama = group[0][0];

            for (let x = i + 1; x < animals.length; x++) {
                if (animals[x][0] === hurufPertama) {
                    group.push(animals[x]);
                    groupHewan.push(x);
                }
            }
            hewan.push(group);
        }
    }
    return hewan.sort();
}
  
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]