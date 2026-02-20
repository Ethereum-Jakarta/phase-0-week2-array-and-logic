// ## Soal 3
// js
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let sortir = animals.sort();
  let hasil = [];

  for(i = 0; i < animals.length; i++){
    if(hasil.length === 0){
        hasil.push([sortir[i]]);
    } else {
        // mengambil grup terakhir
        let lastGroup = hasil[hasil.length -1];

        // membandingkan
        if(sortir[i][0] === lastGroup[0][0]){
            lastGroup.push(sortir[i]);
        } else {
            hasil.push([sortir[i]]);
        }
    }
  }

  return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]