function angkaPalindrome(num) {
  // you can only write your code here!
if ( num < 10){
    return num +1;
}
for(let i = num +1 ; ; i++){
    let angkaNum = '';
    for(let j = i.toString().length - 1 ; j >= 0 ; j--){
        angkaNum += i.toString()[j];
    }
    if(String(i) === angkaNum){
        return i;
    }
    
}
}



// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001