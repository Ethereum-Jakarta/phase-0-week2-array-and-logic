// soal-1
console.log("Soal-1");
function targetTerdekat(arr) {
  const posO = arr.indexOf("o");

  if (posO === -1) {
    return 0;
  }

  const posXArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "x") {
      posXArr.push(i);
    }
  }

  if (posXArr.length === 0) {
    return 0;
  }

  let minJarak = Infinity;
  for (let i = 0; i < posXArr.length; i++) {
    const jarak = Math.abs(posO - posXArr[i]);
    if (jarak < minJarak) {
      minJarak = jarak;
    }
  }

  return minJarak;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2

// soal-2
console.log("Soal-2");

function mengelompokkanAngka(arr) {
  let hasil = [[], [], []];
  for (let i = 0; i < arr.length; i++) {
    let angka = arr[i];
    if (angka % 3 === 0) {
      hasil[2].push(angka);
    } else if (angka % 2 === 0) {
      hasil[0].push(angka);
    } else {
      hasil[1].push(angka);
    }
  }
  return hasil;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

// soal-3
console.log("Soal-3");

function groupAnimals(animals) {
  animals.sort();

  let result = [];
  let currentGroup = [animals[0]];

  for (let i = 1; i < animals.length; i++) {
    let currentInitial = animals[i][0];
    let previousInitial = animals[i - 1][0];

    if (currentInitial === previousInitial) {
      currentGroup.push(animals[i]);
    } else {
      result.push(currentGroup);
      currentGroup = [animals[i]];
    }
  }

  result.push(currentGroup);

  return result;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
