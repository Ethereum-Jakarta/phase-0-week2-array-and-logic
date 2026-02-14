function tentukanDeretGeometri(arr) {
    let newArr =[]
    for (let j=0; j<arr.length-1; j++){
            beda =  arr[j+1] % arr[j] 
            newArr.push(beda)
    }
    // console.log(newArr)
    for (let i = 0; i < newArr.length - 1; i++) { 
        if (newArr[i] !== newArr[i + 1]) {
            return false; 
        }
    }
    return true; 
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
