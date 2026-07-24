/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();

    let hasil = [];

    for (let i = 0; i < animals.length; i++) {

        if (
            hasil.length === 0 ||
            animals[i][0] !== hasil[hasil.length - 1][0][0]
        ) {
            hasil.push([animals[i]]);
        } else {
            hasil[hasil.length - 1].push(animals[i]);
        }

    }

    return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]