function targetTerdekat(arr) {
  // you can only write your code here!
  let posisiX = -1; //-1 tandanya belum ketemu koordinat/index x
  let posisiO = -1; //-1 tandanya belum ketemu koordinat/index o
  let jarakTerdekat = Infinity;
  let list_jarak = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      posisiO = i;
    } else if (arr[i] === 'x') {
      posisiX = i;
    }

    if (posisiO > -1 && posisiX >-1 ) { //tandanya x dan o ada tinggal cari selisih
      let jarak = Math.abs(posisiX - posisiO);//ubah ini dengan Math.abs biar selalu positif cari selisih posisi x dan o
      list_jarak.push(jarak);
    
      for (let w = 0; w < list_jarak.length - 1; w++) {
        if (list_jarak[w] > list_jarak[w+1]) {
          [list_jarak[w], list_jarak[w+1]] = [list_jarak[w+1], list_jarak[w]];
        }
      }
      jarakTerdekat = list_jarak[0];
      
    }
  }
  if (jarakTerdekat === Infinity) {
    jarakTerdekat = 0;
  }

  // cek juga apakah jarakTerdekat masih infinity, kalau iya tandanya x atau o tidak ada
  return jarakTerdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
console.log(targetTerdekat(['x', ' ', ' ', 'o', ' ', ' ', ' ', 'x'])); // 1