function targetTerdekat(arr) {
    let index_o = null;
    let index_x = null;
    let range = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            index_o = i;
        }
        if (arr[i] === 'x') {
            index_x = i;
        }

        if (index_o !== null && index_x !== null) {
            range.push(Math.abs(index_x - index_o));
        }
    }
    return range.length === 0 ? 0 : Math.min(...range);
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1