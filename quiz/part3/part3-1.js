// Soal 1
function cariMean(arr) {
    // you can only write your code here!
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    let mean = result / arr.length;
    return Math.round(mean);
}

// TEST CASES
console.log("============================ Jawaban Soal 1 ============================");
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
console.log("========================================================================\n");