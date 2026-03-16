console.log("====================Soal 1====================");
function targetTerdekat(arr) {
  let oIndex = arr.indexOf("o");
  let xIndex = arr.indexOf("x");
  let distance = 0;
  let tempDistance = 0;
  let isFound = false;

  // jika tidak ada x
  if (xIndex === -1) {
    return 0;
  }

  //membuat perulangan sebanyak panjang arr untuk mencari jarak terdekat
  for (let i = 0; i < arr.length; i++) {
    //jika arr index ke-i sama dengan x
    if (arr[i] === "x") {
      // maka jarak sementara sama dengan hitung dengan mengurangi index x dengan index o
      tempDistance = Math.abs(i - oIndex);
      //   console.log("tempDistance: " + Math.abs(i - oIndex));
      //jika isFound sama dengan false
      if (isFound === false) {
        // maka jarak sama dengan jarak sementara
        distance = tempDistance;
        // console.log("distance: " + distance);
        // mengubah isFound menjadi true
        isFound = true;

        // jika jarak sementara lebih kecil dari jarak
      } else if (tempDistance < distance) {
        // maka jarak sama dengan jarak sementara
        distance = tempDistance;
      }
    }
  }

  return distance;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
