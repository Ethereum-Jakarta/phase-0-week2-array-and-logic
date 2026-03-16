function pasanganTerbesar(num) {
  // you can only write your code here!
  let strAngka = num.toString();
  let highNum = 0;
  for(let i = 0; i < strAngka.length - 1; i++){
    let pasanganAgka = strAngka[i] + strAngka[i+1];
    let convertNum = Number(pasanganAgka);
    if (convertNum > highNum){
      highNum = convertNum;
      
    }
  }
  return highNum;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99