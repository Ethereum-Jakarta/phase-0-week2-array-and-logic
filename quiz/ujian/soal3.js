/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    let grouppedAnimals = [];
    let usedIndice = [];
    
    for (let i = 0; i < animals.length; i++) {
        if(!usedIndice.includes(i)) {
            usedIndice.push(i);
            let group = [animals[i]];
            let firstLetter = group[0][0];

            for(let i2 = i + 1; i2 < animals.length; i2++){
                if(animals[i2][0] === firstLetter) {
                    group.push(animals[i2]);
                    usedIndice.push(i2);
                }
            }
            
            grouppedAnimals.push(group)
        }
    }
    return grouppedAnimals.sort();
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]