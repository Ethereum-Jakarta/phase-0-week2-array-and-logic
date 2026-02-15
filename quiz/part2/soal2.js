function angkaPalindrome(num) {
    if(num < 9){
        return num + 1
    }else{
        let result = num + 1
        while(true){
            strNum = result.toString()
            strReverse = strNum.split('').reverse().join('')
            if(strNum === strReverse){
                return result
            }
            result++
        }
    }
}
  
  // TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
