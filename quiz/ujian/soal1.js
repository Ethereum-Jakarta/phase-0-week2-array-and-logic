function targetTerdekat(arr) {
  // you can only write your code here!
  let indexO = -1;
  let indexX = -1;
  let terkecil = 9999;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      indexO = i;
    } else if (arr[i] === "x") {
      indexX = i;
    }
    if (indexO > -1 && indexX > -1) {
      let jarak = Math.abs(indexO - indexX);
      if (jarak < terkecil) {
        terkecil = jarak;
      }
    }
  }
  if (terkecil === 9999) {
    return 0;
  }
  return terkecil;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
