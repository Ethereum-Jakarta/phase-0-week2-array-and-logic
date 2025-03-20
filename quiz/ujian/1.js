function targetTerdekat(arr) {
  // you can only write your code here!
  let obj = {}

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== undefined) {
      obj[arr[i]].push(i)
    } else {
      obj[arr[i]] = [i]

    }
  }
  
  let arrO, arrX;
  for (const prop in obj) {
    if (prop === "o") {
      arrO = obj[prop]
    } else if (prop === "x") {
      arrX = obj[prop]
    }
  }

  if (!arrX) {
    return 0
  }
  
  const arrContainer = []
  for (let i = 0; i < arrX.length; i++) {
    for (let j = 0; j < arrO.length; j++) {
      arrContainer.push(Math.abs(arrX[i] - arrO[j]));
    }
  }
  return arrContainer.sort((a, b) => a - b)[0];
  
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1