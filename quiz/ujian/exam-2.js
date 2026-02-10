

function mengelompokkanAngka(arr) {
    // you can only write your code here!
    let genap = [];
    let ganjil = [];
    let kelipatan3 = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (arr[i] % 3 === 0) {
                kelipatan3.push(arr[i]);
            } else {
                genap.push(arr[i]);
            }
        } else if (arr[i] % 2 !== 0 ) {
            if (arr[i] % 3 === 0) {
                kelipatan3.push(arr[i]);
            } else {
                ganjil.push(arr[i])
            }
        } else if (arr[i] % 3 === 0) {
            kelipatan3.push(arr[i]);
        }
    }
    return [genap, ganjil, kelipatan3];
}
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]