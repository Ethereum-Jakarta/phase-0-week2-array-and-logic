/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let arrBaru = []
  for(let i = 97; i <= 128; i++){
    let letter = String.fromCharCode(i);
    let arrSementara = [];
    for(let j = 0; j < animals.length; j++){
      if(animals[j][0] === letter){
        arrSementara.push(animals[j]);
      }
    }
    if(arrSementara.length > 0){
      arrBaru.push(arrSementara);
    }
  }
  return arrBaru;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]