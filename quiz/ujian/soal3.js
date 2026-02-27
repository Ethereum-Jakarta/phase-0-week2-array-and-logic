/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  let grupHewan = [];
  for (let i = 0; i < animals.length; i++) {
    let hewanSekarang = animals[i];
    let hurufAwal = hewanSekarang[0];
    let grup = false;

    for (let j = 0; j < grupHewan.length; j++) {
      if (grupHewan[j][0][0] === hurufAwal) {
        grupHewan[j].push(hewanSekarang);
        grup = true;
        break;
      }
    }

    if (grup === false) {
      grupHewan.push([hewanSekarang]);
    }
  }
  return grupHewan.sort();
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
