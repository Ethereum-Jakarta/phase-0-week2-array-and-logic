function tentukanDeretGeometri(arr) {
  //Rumus = a * (r ^ (n - 1))

  let a = arr[0];
  let r = arr[1] / arr[0];
  let rumus = 0;
  let deret = [];

  for (let i = 1; i <= arr.length; i++) {
    rumus = a * (r ** (i - 1));
    
    deret.push(rumus);
  }

  //return deret;

  for (let i = 0; i < arr.length; i++){
    if (deret[i] !== arr[i]) {
      return false;
    }
  }
  
  return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
