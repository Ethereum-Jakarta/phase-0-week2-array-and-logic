function targetTerdekat(arr) {
    let indexO = arr.indexOf('o');
    let jarakTerdekat = arr.length;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'x') {
        let jarak = Math.abs(i - indexO);
        if (jarak < jarakTerdekat) {
          jarakTerdekat = jarak;
        }
      }
    }
  
    // Kalau tidak ada 'x' di array
    if (jarakTerdekat === arr.length) {
      return 0;
    }
  
    return jarakTerdekat;
  }
  
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1