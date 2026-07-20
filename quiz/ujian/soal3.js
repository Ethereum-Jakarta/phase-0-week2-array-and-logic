/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  let kamushewan = {}
  for (let i = 0; i < animals.length; i++) {
    let hewan = animals[i]
    let hurufPertama = hewan[0]
    if (kamushewan[hurufPertama] === undefined) {
      kamushewan[hurufPertama] = []
    }
    kamushewan[hurufPertama].push(hewan)
  }
  let urutanHuruf = Object.keys(kamushewan).sort()
  let hasilAkhir = []
  for (let i = 0; i < urutanHuruf.length; i++) {
    let huruf = urutanHuruf[i]
    hasilAkhir.push(kamushewan[huruf])
  }
  return hasilAkhir
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]