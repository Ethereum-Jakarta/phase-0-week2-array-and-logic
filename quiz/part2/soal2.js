function angkaPalindrome(num) {
    let notfound = true;
    while (notfound){
        num++;
        if(palindrome(String(num))){
            notfound = false;
            return num
        }
            
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(7234));

function palindrome(kata) {
    let x = kata.length-1
  for(i = 0; i < kata.length/2; i++){
    if(kata[i] != kata[x]){
        return false;
    }
    x--;
  }
  return true
}