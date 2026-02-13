function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  let pola = [];
  for (let index = 0; index < arr.length - 1; index++) {
    let pembagian = arr[index + 1] / arr[index];
    if (pembagian !== pola[0]) {
      pola.push(pembagian);
    }
  }
  return pola.length == 1 ? true : false;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
