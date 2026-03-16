/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/

function groupAnimals(animals) {
    animals.sort()
    let result = []
    let temp = []
    for(let i = 0; i < animals.length; i++){
        if(temp.length === 0 || temp[0][0] === animals[i][0]){
            temp.push(animals[i])
        } else{
            result.push(temp)
            temp = [animals[i]]
        }
    }

    if(temp.length > 0){
        result.push(temp)
    }

    return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]