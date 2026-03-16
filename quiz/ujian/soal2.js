function mengelompokkanAngka(arr) {
    // you can only write your code here!
    // kelompok pertama (baris pertama) merupakan angka-angka genap
    // kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
    // kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3

    let Genap = [];
    let Ganjil = [];
    let Kelipatan3 = [];
    
    for (let i=0; i < arr.length; i++) {
      // mencari lipat3 
      if (arr[i] % 3 === 0) {
        Kelipatan3.push(arr[i]);
      } else if (arr[i] % 2 === 0) {
        Genap.push(arr[i]);
      } else {
        Ganjil.push(arr[i]);
      }
    }
  // susun 
  return [Genap, Ganjil, Kelipatan3];
  }

  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]