function pasanganTerbesar(num) {
  // you can only write your code here!
  let str = num.toString()
  let result = []

  for (let i = 0; i <= str.length - 2; i++) {
    result.push(Number(str[i] + str[i + 1]))
  }

  return result.sort((a, b) => b - a)[0]
  // return Math.max(...result)
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
