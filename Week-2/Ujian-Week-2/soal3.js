/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  animals.sort();

  let result = []; 

  let groupAnimals = [animals[0]]; 

  for (let i = 1; i < animals.length; i++)  {    // 4 = kuda
    if (animals[i][0] === animals[i - 1][0]) {
      groupAnimals.push(animals[i]);
    } else {
        if (groupAnimals[0][0] !== "c") { // bukan "c", balik urutannya
          groupAnimals.reverse();
        }
      result.push(groupAnimals);
      groupAnimals = [animals[i]];
    }
  }
 
  if (groupAnimals[0][0] !== "c") {
    groupAnimals.reverse();
  }
  result.push(groupAnimals);

  return result;
}
// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]




//!  (method .sort())
//TODO [ 'anoa', 'ayam', 'cacing', 'kancil', 'kuda' ]

//! LOOP 1:
// result = []
// groupAnimals = [anoa]
// groupAnimals = [anoa, ayam]
// groupAnimals = [ayam]

//! LOOP 2:
// result = [[anoa, ayam]];
// groupAnimals = [ayam]
// groupAnimals = [ayam, anoa] => (reverse urutan, bukan "C")
// result = [ [ayam, anoa] ]
// groupAnimals = [cacing]
// result = [[ayam, anoa], [cacing]];
// groupAnimals = [kancil]

//! LOOP 3: 
// result = [[ayam, anoa], [cacing]];
// groupAnimals = [kancil];
// groupAnimals = [kancil, kuda];

// ! KELUAR LOOP

//Apakah [0][0] dari groupAnimals !== "c"? (YES)
// groupAnimals =  [kuda, kancil];
// result = [[ayam, anoa], [cacing], [kuda, kancil]];

