/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let hewan = animals.sort((a, b) => a.localeCompare(b));

  return hewan.reduce((frst, scndt) => {
    let grupAkhir = frst[frst.length - 1];

    if (!grupAkhir || grupAkhir[0][0] !== scndt[0]) {
      frst.push([scndt]);
    } else {
      grupAkhir.push(scndt);
    }

    return frst;
  }, []);
}
// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
