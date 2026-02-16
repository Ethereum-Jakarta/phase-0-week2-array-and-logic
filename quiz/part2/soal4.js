function pasanganTerbesar(num) {
    // you can only write your code here!
    let element = num.toString()[0];
    let element2 = num.toString()[1];
    for (let i = 0; i < num.toString().length; i++) {
        if(parseInt(num.toString()[i]+num.toString()[i+1]) > parseInt(element+element2)){
            element = num.toString()[i];
            element2 = num.toString()[i+1]
        }
    }

    return element+element2;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99