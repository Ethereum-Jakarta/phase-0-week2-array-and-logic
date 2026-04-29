
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();
  newArr = [];
  for(let i = 0; i < animals.length; i++) {
    arrTemp = [];
    if( i == 0) {
        arrTemp.push(animals[i]);
        newArr.push(arrTemp);
    } else if (animals[i][0] !== newArr[newArr.length - 1][0][0]) {
        arrTemp.push(animals[i]);
        newArr.push(arrTemp);
    } else {
        newArr[newArr.length - 1].push(animals[i])
    }
  }
  let hasil = newArr.map(function main(i) {
    return i.reverse();
  });
  return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]