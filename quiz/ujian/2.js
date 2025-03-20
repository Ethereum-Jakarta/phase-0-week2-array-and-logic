function mengelompokkanAngka(arr) {
  // you can only write your code here!
  const res = [], ganjil = [], genap = [], tiga = [];

  for (const num of arr) {
    if (num % 3 === 0) {
      tiga.push(num)
    } else if (num % 2 === 0) {
      genap.push(num)
    } else {
      ganjil.push(num)
    }
  }

  res.push(genap, ganjil, tiga)
  return res;
  
}


// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]