/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  animals.sort();

  let hasil = [];
  let kelompokSaatIni = [animals[0]];
  let hurufAwal = animals[0][0];

  for (let i = 1; i < animals.length; i++) {
    let hurufAwalSaatIni = animals[i][0];

    if (hurufAwalSaatIni === hurufAwal) {
      kelompokSaatIni.push(animals[i]);
    } else {
      hasil.push(kelompokSaatIni);
      kelompokSaatIni = [animals[i]];
      hurufAwal = hurufAwalSaatIni;
    }
  }

  hasil.push(kelompokSaatIni);

  return hasil;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
