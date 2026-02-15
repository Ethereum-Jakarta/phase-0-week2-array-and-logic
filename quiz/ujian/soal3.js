/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    animals.sort();
    let finalArr = [];
    let containerArr = [];

    for (let i = 0; i<animals.length;i++ ){
        if (containerArr.length == 0 || containerArr[0][0] == animals[i][0]){
            containerArr.push(animals[i]);
        }

        else if(containerArr[0][0] != animals[i][0]){
            finalArr.push(containerArr);
            containerArr = [animals[i]];
        }
    }

    if (containerArr.length>0){
        finalArr.push(containerArr);
    }
    return finalArr;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]