function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    let constantRatio = 0;
    let nextRatio = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] === undefined) {
            return
        } else {
            if(i === 0) {
                constantRatio = arr[i + 1] / arr[i];
            } else {
                nextRatio = arr[i + 1] / arr[i]
            }
        }
    }
    return constantRatio === nextRatio;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false