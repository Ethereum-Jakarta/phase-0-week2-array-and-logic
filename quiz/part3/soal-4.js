function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  let paten = arr[1] / arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    let bil1 = arr[i];
    let bil2 = arr[i + 1]
    let cekSelisih = (bil1 > bil2) ? (bil1 / bil2) : (bil2 / bil1);

    if (cekSelisih !== paten) {
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