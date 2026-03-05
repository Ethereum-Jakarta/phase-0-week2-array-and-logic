function targetTerdekat(arr) {
    let oIndex = -1;
    let minDistance = 0;
    let found = false;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            oIndex = i;
            // Check distance to nearest x
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] === 'x') {
                    let distance = Math.abs(j - i);
                    if (!found || distance < minDistance) {
                        minDistance = distance;
                        found = true;
                    }
                }
            }
        }
    }
    
    if (!found) {
        return 0;
    }
    
    return minDistance;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
