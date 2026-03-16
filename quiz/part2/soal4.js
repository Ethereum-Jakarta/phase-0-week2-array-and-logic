function pasanganTerbesar(num) {
    // you can only write your code here!
    let numStr = num +'';
    let arr = [];
    let max = "";
    let afterMax = "";
    for (let i = 0; i < numStr.length; i++){
        arr.push(parseInt(numStr[i]));
    }
    max += Math.max(...arr);
    for (let j = 0; j < arr.length; j++){
        if (Math.max(...arr) === arr[j]){
             afterMax += arr[j + 1];
        }
    }
    max += Math.max(...afterMax);
    return parseInt(max);
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99