function pasanganTerbesar(num) {
    // you can only write your code here!
    const strNum = num.toString();
    let firstNum = 0;
    let greatestNum = 0;
    for (let i = 0; i < strNum.length; i++) {
        if (typeof strNum[i + 1] !== undefined) {
            if (i === 0) {
                firstNum = Number(`${strNum[i]}${strNum[i + 1]}`)
            } else {
                firstNum = Number(`${strNum[i]}${strNum[i + 1]}`);
            }
        }
        if(firstNum >= greatestNum) {
            greatestNum = firstNum;
        }
    }
    return greatestNum;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99