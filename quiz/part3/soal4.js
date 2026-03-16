// Deret geometri adalah penjumlahan suku-suku pada barisan geometri. Deret geometri dapat terdiri dari suku-suku yang jumlahnya terbatas (terhingga) atau tak terbatas (tak terhingga).
// Rumus deret geometri adalah salah satu rumus matematika yang penerapannya banyak digunakan dalam kehidupan sehari-hari. Konsep deret geometri adalah penjumlahan suku-suku dari barisan geometri. Sementara Ciri deret geometri adalah suku-suku yang dijumlahkan memiliki perbandingan nilai tetap.
// Secara matematis, deret geometri dilambangkan sebagai Sn
// Rumus barisan geometri adalah: Un = a.r^(n-1)
function tentukanDeretGeometri(arr) {
  let rasio = arr[1] / arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    // beda = arr[i + 1] / arr[i];
    // console.log(beda);
    if (arr[i + 1] / arr[i] !== rasio) {
      // console.log("false");
      return false;
    }
  }
  // console.log("true");
  return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
