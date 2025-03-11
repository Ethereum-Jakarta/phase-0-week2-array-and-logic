function pasanganTerbesar(num) {
    for(let i = 0; i < String(num).length - 1; i++) {
        let pair = Number(String(num).slice(i, i + 2));
        if(i === 0 || pair > max_pair) {
            max_pair = pair;
        }
    }
    return max_pair;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99