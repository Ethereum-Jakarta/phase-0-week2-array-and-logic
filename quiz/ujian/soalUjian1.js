function targetTerdekat(arr) {
    let posisiO = -1;
    let semuaX = [];

    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] === 'o') {
            posisiO = i;
        } else if(arr[i] === 'x') {
            semuaX.push(i);
        }
    }

    if(semuaX.length === 0) {
        return 0;
    }

    let jarakTerdekat = Infinity;

    for(let j = 0; j < semuaX.length; j ++) {
        let jarak = Math.abs(semuaX[j] - posisiO);
        if(jarak < jarakTerdekat) {
            jarakTerdekat = jarak;
        }
    }

    return jarakTerdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1