function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    let state = [];

    // penjumlahan
    for (let i = 1, j = 0; i < arr.length; i++, j++) {
      // Hurufpertama = arr[i];
      let angka1 = arr[i];
      let angka2 = arr[j];
      // Hurufkedua = arr[j];
      let selisih = angka1 - angka2;
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
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false