console.log("=============Soal 2================");
function perkalianUnik(arr) {
  let result = [];
  // buat perulangan sebanyak panjang arr
  // buat variabel total = 1 untuk menampung hasil perkalian
  for (let i = 0; i < arr.length; i++) {
    let total = 1;
    // buat perulangan sebanyak panjang arr untuk mengalikan semua elemen arr
    // jika i tidak sama dengan j maka total di kali dengan arr[j] dan hasilnya di tampung di variabel total
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        total *= arr[j];
      }
    }
    // push total ke dalam array result
    result.push(total);
  }
  return result;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
