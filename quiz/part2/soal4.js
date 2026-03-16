function pasanganTerbesar(num) {
    var biggestPair = -Infinity

    while (num > 10) {
        var currentPair = num % 100

        if (currentPair > biggestPair) {
            biggestPair = currentPair
        }

        num = Math.floor(num / 10)
    }

    return biggestPair
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
