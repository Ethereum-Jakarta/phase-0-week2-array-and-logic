//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
    let newArr =[]
    for (let j=0; j<arr.length-1; j++){
            selisih =  arr[j+1] - arr[j] 
            newArr.push(selisih)
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
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
