// Soal 4
// js
function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  let list_rasio = []
  for (let x = 0; x < arr.length-1; x++){
    let rasio = arr[x] / arr[x+1];
    list_rasio.push(rasio)
  }
  keputusan = list_rasio.every(val => val === list_rasio[0]);
  return keputusan
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false