/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!

    // Pengurutan Animals
    // animals.sort()
    for (let i=0; i < animals.length; i++){  
        //console.log(" ");
        for (let j=0; j < animals.length-i-1; j++){
            //console.log("sebelum pindah : "  + animals);
            if (animals[j][0] > animals[j+1]){
                let bantu = animals[j];
                animals[j] = animals[j+1];
                animals[j+1] = bantu;
            }
            //console.log("setelah pindah : " + animals);
        }
    }

    // Pengelompokkan Animals
    let arrayDuaDimensi = [];
    let hurufDepan = "";
    for (let i=0; i < animals.length; i++){
        let cekGroup = false;
        hurufDepan = animals[i][0];

        for (let j=0; j < arrayDuaDimensi.length; j++){
            if (arrayDuaDimensi[j][0][0] === hurufDepan){
                arrayDuaDimensi[j].push(animals[i]);
                cekGroup = true;
            }
        }
        if (cekGroup === false){
            arrayDuaDimensi.push([animals[i]]);
        }   
    }
    return arrayDuaDimensi;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
