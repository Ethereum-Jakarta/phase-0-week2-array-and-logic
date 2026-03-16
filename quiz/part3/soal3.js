function tentukanDeretAritmetika(arr) {
    var difference = arr[1] - arr[0]

    for (var i = 2, n = arr.length - 1; i < n; i++) {
        if (arr[i + 1] - arr[i] !== difference) {
            return false
        }
    }

    return true
}

// TEST CASES
console.log(tentukanDeretAritmetika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmetika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmetika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmetika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmetika([1, 2, 3, 4, 7, 9])); // false
