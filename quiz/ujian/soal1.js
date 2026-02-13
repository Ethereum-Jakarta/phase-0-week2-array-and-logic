/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!
    var oPositions = [];
    var xPositions = [];
    var jarakTerdekat = arr.length;

    // Collect all positions of 'o' and 'x'
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            oPositions.push(i);
        } else if (arr[i] === 'x') {
            xPositions.push(i);
        }
    }

    // If there are no 'x' characters, return 0
    if (xPositions.length === 0) {
        return 0;
    }

    // Calculate the closest distance
    for (var o of oPositions) {
        for (var x of xPositions) {
            var jarak = Math.abs(o - x);
            if (jarak < jarakTerdekat) {
                jarakTerdekat = jarak;
            }
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