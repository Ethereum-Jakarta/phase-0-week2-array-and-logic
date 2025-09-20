// kelompok pertama (baris pertama) merupakan angka-angka genap
// kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
// kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
// Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
// */
function mengelompokkanAngka(arr) {
  let res = [];
  let kel1=[]
  let kel2=[]
  let kel3=[]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%3===0) {kel3.push(arr[i])}
    if (arr[i]%2===1&&!kel3.includes(arr[i])) {kel2.push(arr[i])}
    if (arr[i]%2===0 &&!kel3.includes(arr[i])) {kel1.push(arr[i])}
  }
  res.push(kel1)
  res.push(kel2)
  res.push(kel3)
  return res
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]