function groupAnimals(hewan) {
  hewan.sort();

  let hasil = [];
  let kelompok = [hewan[0]];

  for (let i = 1; i < hewan.length; i++) {
    if (hewan[i][0] === kelompok[0][0]) {
      kelompok.push(hewan[i]);
    } else {
      hasil.push(kelompok);
      kelompok = [hewan[i]];
    }
  }

  hasil.push(kelompok);
  return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

