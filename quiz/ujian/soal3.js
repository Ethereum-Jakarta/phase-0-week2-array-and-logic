/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!

    let hasil=[];
    let kategori = [...animals];
    kategori.sort()

    //Membuat array kategori berdasarkan awal huruf tiap element array
    for (let i = 0; i < kategori.length-1; i++) {
        if(kategori[i][0] == kategori[i+1][0] ){
            kategori.splice([i+1],1);
        }
    }

    //Membuat array hasil
    for (let i = 0; i < kategori.length; i++) {
        hasil.push([]);
        for (let j = 0; j < animals.length; j++) {
            if (kategori[i][0] == animals[j][0]) {
                hasil[i].push(animals[j]);
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