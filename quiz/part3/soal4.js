function tentukanDeretGeometri(arr) {
  let result = [];
  for (let i = arr.length - 1; i > 0; --i) {
    let j = i - 1;
    result.push(arr[i] / arr[j]);
  }
  let ratio = result[0]
  let cek = result.every(num => num / ratio === 1)
  return cek
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false