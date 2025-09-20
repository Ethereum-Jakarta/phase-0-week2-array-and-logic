function targetTerdekat(arr) {
    const indexO = arr.indexOf('o');
    if (indexO === -1) return 0;

    let minDistance = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            const distance = Math.abs(i - indexO);
            if (distance < minDistance) minDistance = distance;
        }
    }

    return minDistance === arr.length ? 0 : minDistance;
}
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1