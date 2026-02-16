function angkaPalindrome(num) {
let palindromSelanjutnya = num += 1
// console.log(palindromSelanjutnya + ' lanjutno')
    while(num){
        let string = String(num)
        let dibalik = string.split('').reverse().join('');
        
        
        if(num == dibalik){
            break;
        }
        
        num++;
    }
    return num
}


console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
