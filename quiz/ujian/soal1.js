function targetTerdekat(arr) {
    let posO = -1;  
    let posX = -1;  

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            posO = i;  
            if (posX !== -1) {
                return Math.abs(posO - posX);
            }
        } else if (arr[i] === 'x') {
            posX = i;  
            if (posO !== -1) {
                return Math.abs(posX - posO);
            }
        }
    }
    return 0;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
