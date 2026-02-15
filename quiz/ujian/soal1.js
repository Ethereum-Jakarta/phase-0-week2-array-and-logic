function targetTerdekat(arr) {
  let posisiO = [];
  let posisiX = [];
  let adaX = false;
  let jarakTerdekat = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      posisiO.push(i);
    } else if (arr[i] === "x") {
      posisiX.push(i);
      adaX = true;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "x") {
      for (let oPos of posisiO) {
        let jarak = Math.abs(i - oPos);
        if (jarak < jarakTerdekat) {
          jarakTerdekat = jarak;
        }
      }
    }
  }

  return adaX ? jarakTerdekat : 0;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
