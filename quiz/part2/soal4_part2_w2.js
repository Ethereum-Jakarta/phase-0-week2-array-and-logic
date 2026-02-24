//  Soal 4
// js
function pasanganTerbesar(num) {
  // you can only write your code here!
  x = String(num).split('')
  let list = []
  for(let i = 0; i < x.length; i +=2){
      let gabungan = Number(`${x[i]}${x[i+1]}`)
      list.push(gabungan)
  }
  return Math.max(...list)    
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
