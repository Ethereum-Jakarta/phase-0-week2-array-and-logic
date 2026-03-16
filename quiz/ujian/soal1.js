function targetTerdekat(arr) {
    var indexO = -1
    var indexX = -1
    var nearest = Infinity
    var distance = null

    for (var i = 0, n = arr.length; i < n; i++) {
        if (arr[i] === "o") {
            indexO = i
        }

        if (arr[i] === "x") {
            indexX = i
        }

        if (indexO !== -1 && indexX !== -1) {
            distance = Math.abs(indexO - indexX)
            nearest = distance < nearest ? distance : nearest
        }
    }

    return indexX < 0 ? 0 : nearest
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
