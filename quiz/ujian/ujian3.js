/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!

    animals.sort();
    let grup = [];

    for (let hewan of animals) {
        let katapertama = hewan[0];

        if (grup.length === 0 || grup[grup.length - 1][0][0] !== katapertama) {
            grup.push([hewan]);
        } else {
            grup[grup.length - 1].push(hewan);
        }
    }
    return grup;
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]