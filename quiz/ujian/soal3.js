function groupAnimals(animals) {
    // Sort animals alphabetically
    animals.sort();
    
    let result = [];
    let currentGroup = [];
    let currentLetter = '';
    
    for (let i = 0; i < animals.length; i++) {
        let firstLetter = animals[i][0];
        
        if (currentLetter === '') {
            currentLetter = firstLetter;
            currentGroup.push(animals[i]);
        } else if (firstLetter === currentLetter) {
            currentGroup.push(animals[i]);
        } else {
            result.push(currentGroup);
            currentGroup = [animals[i]];
            currentLetter = firstLetter;
        }
    }
    
    // Push the last group
    if (currentGroup.length > 0) {
        result.push(currentGroup);
    }
    
    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
