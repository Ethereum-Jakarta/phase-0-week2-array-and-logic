/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/

function groupAnimals(animals) {
  let kelompok = {};

  for (let i = 0; i < animals.length; i++) {
    let hurufAwal = animals[i][0];

    if (!kelompok[hurufAwal]) {
      kelompok[hurufAwal] = [];
    }

    kelompok[hurufAwal].push(animals[i]);
  }

  let urutanHuruf = Object.keys(kelompok).sort();
  let hasilUrut = {};

  for (let j = 0; j < urutanHuruf.length; j++) {
    hasilUrut[urutanHuruf[j]] = kelompok[urutanHuruf[j]];
  }

  return Object.values(hasilUrut);
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
