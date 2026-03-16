function targetTerdekat(arr) {
  // variable akan diupdate jika dengan perbandingan yang nilainya lebih kecil
  let Jarakrendah = Infinity;


  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'o') {

          for (let j = 0; j < arr.length; j++) { 
              if (arr[j] === 'x') {
                  let jarak = Math.abs(j - i);
                  if (jarak < Jarakrendah) {
                    Jarakrendah = jarak;
                  }
              }
          }

      }
  }
  return Jarakrendah === Infinity ? 0 : Jarakrendah;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1