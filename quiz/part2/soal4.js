function pasanganTerbesar(num) {
    let num1 = 1;
    let num2 = -1;
    let numString = num.toString();
    let tempBiggest = 0;
    for(let i=0;i<numString.length;i++){
        if(tempBiggest < numString.slice(num2, num1)){
            tempBiggest = numString.slice(num2,num1);
        }
        num1++;
        num2++;
    }
    return tempBiggest;
}
  
  // TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99