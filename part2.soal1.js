
function palindrome(kata) {
  let perbandingan = []
  for (let i = kata.length-1; i >= 0 ; i--) {
    perbandingan.push(kata[i])
    
  }
  return kata === perbandingan.join("")? true : false
  // hi
} 

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false