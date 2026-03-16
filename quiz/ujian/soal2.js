function mengelompokkanAngka(arr) {
  let ganjil = [];
  let genap = [];
  let kelipatan3 = [];
  arr.forEach((value) => {
    if (value % 2 == 0) {
      if (value % 3 == 0) {
        kelipatan3.push(value);
      } else {
        genap.push(value);
      }
    } else {
      ganjil.push(value);
    }
  });
  return [genap, ganjil, kelipatan3];
}

console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
