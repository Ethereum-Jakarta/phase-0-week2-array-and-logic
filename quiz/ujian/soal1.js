function targetTerdekat(arr) {
    let X = null;
    let O = null;
    let result = 0;
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] === 'x') {
            X = i;
        } else if (arr[i] === 'o') {
            O = i;
        }
        if (X !== null && O !== null) {
            let range = Math.abs(X - O);
            if (result === 0 || result > range) {
                result = range;
            }    
        }
    }

    if (X === null || O === null) {
        return 0;
    }
    return result
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1