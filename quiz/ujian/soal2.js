function mengelompokkanAngka(arr) {
  let hasil = [[], [], []];

  for (let num of arr) {
    if (num % 3 === 0) {
      hasil[2].push(num);
    } else if (num % 2 === 0) {
      hasil[0].push(num);
    } else {
      hasil[1].push(num);
    }
  }

  return hasil;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
