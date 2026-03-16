/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // sorting animals, atau pake method animals.sort()
    for (i = 0; i <= animals.length; i++){
        for (j = 0; j < (animals.length  - i -1); j++) {
            if ((animals[j])[0] > animals[j+1]) {
                var temp1 = animals[j];
                animals[j] = animals[j + 1];
                animals[j + 1] = temp1
            }
        }
    }

    // variable untuk menampung keseluruhan group animals
    let groups = []

    // variable untuk menampung setiap animal yang inisialnya sama
    // kita inisialisasi nilainya dengan animal[0]
    let temp = [animals[0]]

    // mulai looping dari index pertama, karena animal[0] sudah diinisialisasi sebelumnya
    for (let i = 1; i < animals.length; i++) {
        // jika inisial animals[i] sama dengan inisial animal di array temp
        if (animals[i][0] === temp[0][0]) {
            // push animals[i] ke array temp
            temp.push(animals[i])
        }
        // jika inisialnya berbeda
        else {
            // push isi dari array temp ke array groups
            groups.push(temp)
            // perbarui array temp dengan animals[i] 
            temp = [animals[i]]
        }
    }

    // kembalikan nilai dari variable groups
    groups.push(temp)
    return groups
}

  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
