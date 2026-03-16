function targetTerdekat(arr) {
  let arrX = [];
  let arrO = [];
  if (arr.includes("x")) {
    arr.forEach((X, index) => {
      if (X == "x") {
        arrX.push(index);
      }
    });
    arr.forEach((O, index) => {
      if (O == "o") {
        arrO.push(index);
      }
    });
    let jarakTerdekat = Infinity;
    arrO.forEach((oIndex) => {
      arrX.forEach((xIndex) => {
        let jarak = Math.abs(oIndex - xIndex);
        // console.log(jarak);
        if (jarak < jarakTerdekat) {
          jarakTerdekat = jarak;
        }
      });
    });
    return jarakTerdekat;
  } else {
    return 0;
  }
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
