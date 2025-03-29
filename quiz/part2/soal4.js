function pasanganTerbesar(num) {
    // you can only write your code here!
    let maxNumber = 0;
    let strNum = (String(num)).split('');
    for (let i = 0; i < strNum.length - 1; i++){
        let DuaAngka = Number(strNum[i] + strNum[i + 1]);
        if (DuaAngka > maxNumber){
            maxNumber = DuaAngka;
        }
    }
    return parseInt(maxNumber);
}    
  
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99