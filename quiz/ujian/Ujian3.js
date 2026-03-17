/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let soet = animals.sort()
  let oo =[]
  let b= true
    let penampung=[]
  for(var i=0;i<soet.length;i++) {
   if(b) {
    penampung = [soet[i]]
    b = false
  }else if(soet[i-1][0] == soet[i][0]) {
  penampung.push(soet[i])
  
  }else {
    oo.push(penampung)
    penampung =[soet[i]]
  }
}
    oo.push(penampung)
  return oo
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]