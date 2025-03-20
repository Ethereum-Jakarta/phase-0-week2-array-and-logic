function pasanganTerbesar(num) {
  // you can only write your code here!
  const nums = String(num);
  let max = -1;
  let container;

  for (let i = 0; i < nums.length - 1; i++) {
    container = Number(nums[i] + nums[i + 1]);

    if (container > max) {
      max = container;
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