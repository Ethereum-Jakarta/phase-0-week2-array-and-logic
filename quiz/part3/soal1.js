function cariMean(arr) {
    // you can only write your code here!
    //jumlah data/banyak data
    let jumlahData = 0;
    let i = 0;
    while (i < arr.length) {
        jumlahData += arr[i];
        i++;
    } //walaupun bgus pake for, gw lbh milih while biar ada variasi wkwk
    let mean = Math.round(jumlahData / arr.length);
    return mean;
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

//tips baca dokumentasi Math js untuk pembulatan
