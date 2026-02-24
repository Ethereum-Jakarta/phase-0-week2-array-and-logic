//  Soal 3
// js
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/

function groupAnimals(animals) {
    // you can only write your code here!
    let kamus_hewan = {}
    for (a of animals){
      if (a[0] in kamus_hewan){
        kamus_hewan[a[0]].push(a)
      }
      else{
        kamus_hewan[a[0]] = [a]
      }
    }
    
    let group_array = []
    for (let key in kamus_hewan){
      group_array.push(kamus_hewan[key])
    }
  
    return group_array.sort()
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
  
  