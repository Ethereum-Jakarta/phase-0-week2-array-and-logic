/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/


function groupAnimals(animals) {
    let allArr = [];
    let found = 0;
    let similarArr = 0;
    for(let i=0;i<animals.length;i++){
        for(let y=0;y<allArr.length;y++){
            if(allArr[y][0][0] === animals[i][0] ){
                found = 1;
                similarArr = y;
                break;
            }
        }
        if(found === 1){
            allArr[similarArr].push(animals[i]);
        }else if(found === 0){
            allArr.push([animals[i]]);
        }
        found = 0;
    }
    allArr.sort((a, b) => a[0][0].localeCompare(b[0][0]));
    return allArr;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]