function targetTerdekat(arr) {
  let indexO = arr.indexOf("o"); // Cari index pertama dari 'o'
  if (indexO === -1) return 0; // Jika tidak ada 'o', return 0

  let jarakTerdekat = Infinity; // Simpan jarak terkecil, mulai dari angka besar
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "x") {
      let jarak = Math.abs(i - indexO); // Hitung jarak antara 'o' dan 'x'
      jarakTerdekat = Math.min(jarakTerdekat, jarak); // Simpan jarak terkecil
    }
  }

  return jarakTerdekat === Infinity ? 0 : jarakTerdekat; // Jika tidak ada 'x', return 0
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
