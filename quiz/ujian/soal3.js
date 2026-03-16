function groupAnimals(animals) {
    animals.sort();
    let result = [];  

    for (let i = 0; i < animals.length; i++) {
        let firstLetter = animals[i][0];  

        if (result.length === 0 || result[result.length - 1][0][0] !== firstLetter) {
            result.push([animals[i]]);  
        } else {
            result[result.length - 1].push(animals[i]);  
        }
    }
    return result;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['katak', 'buaya', 'gorila', 'kelinci', 'singa']));
console.log(groupAnimals(['jerapah', 'kuda', 'anoa', 'anjing', 'katak']));
