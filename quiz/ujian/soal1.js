function targetTerdekat(arr) {
  let arrX = [];
  let arrO = [];

  // Mencari indeks semua "x" dan "o" dalam satu loop
  arr.forEach((item, index) => {
    if (item === "x") arrX.push(index);
    if (item === "o") arrO.push(index);
  });

  // Jika tidak ada "x" atau "o", return 0
  if (arrX.length === 0 || arrO.length === 0) return 0;

  let jarakTerdekat = Infinity;

  // Mencari jarak terkecil antara "o" dan "x"
  arrO.forEach((oIndex) => {
    arrX.forEach((xIndex) => {
      let jarak = Math.abs(oIndex - xIndex);
      if (jarak < jarakTerdekat) {
        jarakTerdekat = jarak;
      }
    });
  });

  return jarakTerdekat;
}
// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
