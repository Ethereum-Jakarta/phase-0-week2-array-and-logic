//soal no 1

function cariMean(arr) {
  
  let jumlah = 0

  for (let i = 0; i < arr.length; i++){
    jumlah += arr[i]
  }
  let hasilMean = Math.round(jumlah / arr.length)
  return hasilMean
}
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7


//no soal 2

function perkalianUnik(arr) {
  let hasil = []

  for (let i = 0; i < arr.length; i++){
    let angka = 1

    for (let x = 0; x < arr.length; x++){
      if (i !== x) {
        angka *= arr[x]
      }
    }
    hasil.push(angka)

  }

  return hasil
}

console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]


//soal no 3

function tentukanDeretAritmatika(arr) {

  let selisih = arr[1] - arr[0]
  
  for (let i = 0; i < arr.length - 1; i++){
    if (arr[i + 1] - arr[i] !== selisih) {
      return false
    } 
  }
  return true
  
}
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

//soal no 4

function tentukanDeretGeometri(arr) {
  let rasio = arr[1] / arr[0]
  
  for (let i = 0; i < arr.length - 1; i++){
    if (arr[i + 1] / arr[i] !== rasio) {
      return false
    } 
  }
  return true
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false