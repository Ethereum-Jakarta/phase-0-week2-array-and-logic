function mengelompokkanAngka(arr) {
    let ganjil = []
    let genap = []
    let kelipatantiga = []

    for (i of arr) {
        if (i % 3 === 0) {
            kelipatantiga.push(i);
        } else if (i % 2 === 0 ) {
            genap.push(i);
        } else {
            ganjil.push(i);
        }
    }
    return arr = [genap, ganjil, kelipatantiga]
}
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]