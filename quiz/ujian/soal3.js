/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let result = [];
  let group = [];

  //looping untuk grouping animals => result
  for (let i = 0; i < animals.length; i++) {
    let hurufPertama = animals[i][0];
    let belumAda = true;

    //looping untuk cek apakah animal ke i sudah di dalam group atau belum
    for (let j = 0; j < result.length; j++) {
      if (hurufPertama === result[j][0][0]) {
        belumAda = false;
        break;
      }
    }

    //jika group animal ke i belum ada, maka akan dibuat group baru yang menampung animal ke i dkk
    if (belumAda) {
      for (let j = i; j < animals.length; j++) {
        if (animals[j][0] === hurufPertama) group.push(animals[j]);

        if (j === animals.length - 1) {
          result.push(group);
          group = [];
        }
      }
    }
  }

  //sorting group
  for (let i = 0; i < result.length - 1; i++) {
    if (result[i][0][0] > result[i + 1][0][0]) {
      [result[i], result[i + 1]] = [result[i + 1], result[i]];
    }
  }

  return result;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
