// ## Soal 3
// ```js
//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  let beda = arr[1] - arr[0];
  let comp = [];
  let deret = false;
  for(var i = 0;i<arr.length-1;i++){
    let bcomp = arr[i+1]-arr[i];
    comp.push(bcomp)
    }
for(var j = 0;j<comp.length-1;j++){
    if(comp[j] == comp[j+1]){
        deret = true;
    } else deret = false
}
    return deret
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false