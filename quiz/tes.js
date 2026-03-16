function targetTerdekat(arr) {
  let o = "o";
  let x = "x";
  let jarakTerdekat = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "o") {
      i = o;
      if (x !== -1) {
        jarakTerdekat = Math.min(jarakTerdekat, Math.abs(o - x));
      }
    }

    if (arr[i] !== "x") {
      i = x;
      if (o !== -1) {
        jarakTerdekat = Math.min(jarakTerdekat, Math.abs(o - x));
      }
    }
  }
  return o === -1 || x === -1 ? 0 : jarakTerdekat;
}

console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
