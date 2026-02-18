function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  if (arr.length < 2) return false; // Deret harus memiliki setidaknya dua elemen
  var ratio = arr[1] / arr[0]; // Rasio antara elemen pertama dan kedua
  for (var i = 2; i < arr.length; i++) {
    if (arr[i] / arr[i - 1] !== ratio) {
      return false; // Jika rasio tidak konsisten, bukan deret geometri
    }
  }
  return true; // Semua rasio konsisten, jadi ini adalah deret geometri
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
