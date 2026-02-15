function pasanganTerbesar(num) {
    let arr = num.toString().split('');
    let container = 0;
    let comparation = 0;

    for(let i = 0; i<arr.length-1;i++){
        comparation = arr[i] + arr[i+1];
        comparation = Number(comparation);

        if(comparation>container){
            container = comparation;
        }
    }
    return container;
    
    

  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99