function pasanganTerbesar(num) {
  // you can only write your code here!
  let num_str = num.toString();
  let arey_pasangan = [];
  let hacil;
  for (let i = 0; i < num_str.length -1; i++) {
    arey_pasangan.push(num_str[i] + num_str[i+1]);
    
    for (let q = arey_pasangan.length -1 ; q >= 0; q--) {
        if (arey_pasangan[q] > arey_pasangan[q-1]) {
            [arey_pasangan[q], arey_pasangan[q-1]] = [arey_pasangan[q-1], arey_pasangan[q]];
        }
    } 
  }
  return arey_pasangan[0];
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99