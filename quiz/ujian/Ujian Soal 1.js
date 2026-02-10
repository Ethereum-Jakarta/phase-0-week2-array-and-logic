function targetTerdekat(arr) {
  let indexO = arr.indexOf("o");

  if (!arr.includes("x")) return 0;

  let jarakTerdekat = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "x") {
      let jarak = Math.abs(i - indexO);
      if (jarak < jarakTerdekat) {
        jarakTerdekat = jarak;
      }
    }
  }

  return jarakTerdekat;
}

console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"]));
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"]));
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "]));
console.log(targetTerdekat([" ", " ", "o", " "]));
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"]));
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"]));
