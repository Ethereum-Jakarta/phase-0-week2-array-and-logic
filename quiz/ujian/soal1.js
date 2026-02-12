function targetTerdekat(arr) {
  let oIndex = -1;
  let minDistance = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      oIndex = i;
    } else if (arr[i] === 'x' && oIndex !== -1) {
      minDistance = Math.min(minDistance, Math.abs(i - oIndex));
    }
  }

  return minDistance === Infinity ? 0 : minDistance;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // ✅ 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // ✅ 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // ✅ 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // ✅ 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // ✅ 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // ✅ 1
