function tentukanDeretAritmatika(arr) {
    let jarak = arr[1] - arr[0]
    for(let i = 1 ; i < arr.length ; i++){
        let test = arr[i] - arr[i - 1]
        if(test !== jarak){
            return false
        }
    }
        return true
}
  
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

