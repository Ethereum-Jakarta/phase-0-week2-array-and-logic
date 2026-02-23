//soal no 1

function targetTerdekat(arr) {
  let idX = -1;
  let idO = -1;
  let terdekat = Infinity

  for (let i = 0; i < arr.length; i++){
    if (arr[i] == 'o') {
      idO = i
    } else if (arr[i] == 'x') {
      idX = i
    }
    if (idX > -1 && idO > -1) {
      let kalkulasi = Math.abs(idX - idO)
      if (terdekat > kalkulasi) {
        terdekat = kalkulasi
      }
    }
  }
   if (idX == -1 || idO == -1) {
    return 0
   }
  return terdekat
}
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1

//soal no 2

function mengelompokkanAngka(arr) {
  let genap = [];
  let ganjil = [];
  let kelTiga = []


  for (let i = 0; i < arr.length; i++) {
    let angka = arr[i];

    if (angka % 2 === 0) {
      genap.push(angka);
    } else {
      ganjil.push(angka)
    };

    if (angka % 3 === 0) {
      kelTiga.push(angka)
    }
  }
  return [genap, ganjil, kelTiga]
}

console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

//soal no 3
function groupAnimals(animals) {
  animals.sort()

  let group = []

  for (let i = 0; i < animals.length; i++){
    let animal = animals[i]
    let hurufPertama = animal[0]

    if (group.length === 0 || group[group.length-1][0][0] !== hurufPertama) {
      group.push([animal])
    } else {
      group[group.length-1].push(animal)
    }
  }
  return group
  

}
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));


console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
[ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
