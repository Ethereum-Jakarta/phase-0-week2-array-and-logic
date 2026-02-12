// Soal 4
// js
function pasanganTerbesar(num) 
{
  // you can only write your code here!
    let convertNum = num.toString();

    let angkaPasanganTerbesar;

    for (let i = 0; i < convertNum.length - 1; i++)
    {
        if (i === 0 || (angkaPasanganTerbesar < Number(convertNum.substring(i, i + 2))))
        {
            angkaPasanganTerbesar = Number(convertNum.substring(i, i + 2));
        }
    }

    return angkaPasanganTerbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99