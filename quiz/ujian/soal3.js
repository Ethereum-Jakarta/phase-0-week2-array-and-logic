/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort()
    let hewan = []
    for(let i = 0; i < animals.length; i ++){
        let hurufDepan = animals[i][0];
        let henti = false

        for(let j = 0; j < hewan.length; j++){
            if(hewan[j][0][0] === hurufDepan){
                hewan[j].push(animals[i]);
                henti = true;
                break;
            }
        }

        if(!henti){
            hewan.push([animals[i]])
        }
        
    }
    return hewan
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
  
   //soal no 1 dan 3 itu menjadi obstacle tersulit wkwk