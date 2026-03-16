function cariMean(arr) {
    const total = arr.reduce((sum, num) => sum+num, 0); // reduce untuk menjumlahkan total semmua elemen array yang ada.
    const mean = Math.round(total / arr.length);

    return mean;
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7
  
  //tips baca dokumentasi Math js untuk pembulatan