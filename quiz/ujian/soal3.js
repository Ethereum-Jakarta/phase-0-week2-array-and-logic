/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    let grupA = [];
    let grupC = [];
    let grupK = [];
    let grupU = [];
    
    for (let i = 0; i < animals.length; i++){
      if (animals[i].substring(0, 1) === "a"){
        grupA.push(animals[i]); 
      } else if (animals[i].substring(0, 1) === "c"){
        grupC.push(animals[i]);
      } else if (animals[i].substring(0, 1) === "k") {
        grupK.push(animals[i]);
      } else {
        grupU.push(animals[i]);
      }
    }

   animals.length = 0;
   if(grupU.length === 0){
    animals.push(grupA, grupC, grupK);
   } else {
    animals.push(grupA, grupC, grupK, grupU);
   }
   
   return animals;
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]