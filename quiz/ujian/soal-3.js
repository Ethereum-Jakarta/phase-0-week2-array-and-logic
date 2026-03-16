/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    for (let i = 0; i < animals.length-1; i++) {
        for (let l = i + 1; l < animals.length; l++) {
            if(animals[i].at(0) > animals[l].at(0)){
                
                let temp = animals[l]
                animals[l] = animals[i]
                animals[i] = temp
                
            }
            
        }
        
    }

    let hasil = []

    for (let i = 0; i < animals.length; i++) {
        let hurufAwal = animals[i][0];
        let sudahAda = false;
      
        for (let j = 0; j < hasil.length; j++) {
          if (hasil[j][0][0] === hurufAwal) {
            hasil[j].push(animals[i]);
            sudahAda = true;
            break;
          }
        }
      
        if (!sudahAda) {
          hasil.push([animals[i]]);
        }
      }
    

      return hasil
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]