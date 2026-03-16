
function targetTerdekat(arr) {
    let posX = null;
    let posO = null;
    let result = 0;

    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] === 'x') {
            posX = i;
        } else if (arr[i] === 'o') {
            posO = i;
        }
        if (posX !== null && posO !== null) {
            let range = Math.abs(posX - posO);
            if (result === 0 || result > range) {
                result = range;
            }    
        }
    }

    if (posX === null || posO === null) {
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
  