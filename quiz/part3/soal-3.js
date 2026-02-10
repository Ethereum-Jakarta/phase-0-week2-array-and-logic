//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    let constantNum = 0;
    let nextNum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] === undefined) {
            return
        } else {
            if(i === 0) {
                constantNum = arr[i + 1] - arr[i];
            } else {
                nextNum = arr[i + 1] - arr[i]
            }
        }
    }
    return constantNum === nextNum;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false