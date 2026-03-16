function pasanganTerbesar(num) {
    // you can only write your code here!
    let strNum = num+"";
    let max = Number(strNum[0]+strNum[1]);
    let compareNum = 0;
    for(let i = 2; i<strNum.length; i++){
        compareNum = Number(strNum[i-1]+strNum[i]);
        if(compareNum > max){
            max = compareNum;
        }
    }
    return max;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99