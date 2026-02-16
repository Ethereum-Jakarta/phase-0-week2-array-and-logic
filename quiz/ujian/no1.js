function targetTerdekat(arr) {
    let idx= -1;
    let ido = -1;
    let terdekat = Infinity;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'x') {
        idx = i;
      } else if (arr[i] === 'o') {
        ido = i;
      }

      if (idx > -1 && ido > -1) {
        let jarak = Math.abs(idx - ido)
        if (terdekat > jarak) {
          terdekat = jarak;
        }
      }
    }
    return terdekat === Infinity? 0 : terdekat;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1