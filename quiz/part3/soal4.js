function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    let state = [];

    // penjumlahan
    for (let i = 1, j = 0; i < arr.length; i++, j++) {
      // Hurufpertama = arr[i];
      let angka1 = arr[i];
      let angka2 = arr[j];
      // Hurufkedua = arr[j];
      let selisih = angka1 / angka2;
      state.push(selisih);
    };

    // pengecekan
    for (let i = 0, j = state.length -1; i < state.length; i++, j--) {
      Hurufpertama = state[i];
      Hurufkedua = state[j];
      if ( Hurufpertama != Hurufkedua) {
          return false;
      }
    } return true;
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false