function pasanganTerbesar(num) {
  // you can only write your code here!
    strNum = String(num);
    let pasanganTerbesar = strNum[0] + strNum[1];
    for(let i = 1; i < strNum.length - 1; i++){
        let pasanganPesaing = strNum[i] + strNum[i+1];
        if(pasanganPesaing > pasanganTerbesar) pasanganTerbesar = pasanganPesaing;
    }
    return pasanganTerbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99