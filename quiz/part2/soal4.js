//-- ## Soal 4
//```js
function pasanganTerbesar(num) {
    let angka = num.toString();
    let gede = angka.substring(0, 2);
    let maxSum = parseInt(gede);
    for (let i = 0; i < angka.length - 1; i++) {
      let sum = angka.substring(i, i + 2);
      if (parseInt(sum) > maxSum) {
        maxSum = parseInt(sum);
        gede = sum;
      }
    }
    return gede;
  }

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99