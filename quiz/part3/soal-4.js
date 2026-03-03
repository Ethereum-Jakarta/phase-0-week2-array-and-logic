function tentukanDeretGeometri(arr) {
  // last el = a1 * r^n-1
  const n = arr.length;
  const diff = arr[1] / arr[0];
  const last = arr[0] * Math.pow(diff, n - 1);

  return arr[n - 1] == last;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
