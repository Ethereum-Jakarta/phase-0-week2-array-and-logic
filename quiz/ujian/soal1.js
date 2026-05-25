function targetTerdekat(arr) {
    let o = -1
    let x = -1
    let jarakTerdekat = arr.length;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'o'){
            o = i
        }else if(arr[i] === 'x'){
            x = i
        };

        if (o !== -1 && x !== -1){
            let jarak = Math.abs(o - x)

            if (jarak < jarakTerdekat){
                jarakTerdekat = jarak
            };
        }
    }
    if (x === -1){
        return 0
    }
    return jarakTerdekat
}

// TEST CASES (Sekarang semuanya jalan 100% Sempurna!)
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
