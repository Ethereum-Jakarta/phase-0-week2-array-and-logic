// function jadiNumber(pasangan) {
//   // for (let j = 0; j < pasangan.length; ++j) {
//   //   Number(pasangan)
//   // }
//   return Math.max(...pasangan)
// }

function pasanganTerbesar(num) {
  let angka = num.toString()
  let pasangan = ''
  let result = []
  let j = 1
  for (let i = 0; i < angka.length -1 ; ++i){
    pasangan = angka[i] + angka[j]
    result.push(pasangan)
    ++j
  }
  // console.log(result)
  return Math.max(...result)
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99