function angkaPalindrome(num){
    num += 1;
    while(true){
        if(num < 10){
            return num;
        }else{
            let numS = String(num);
            let baliknumS = "";
            for(let i=numS.length-1; i>=0; i--){
                baliknumS += numS[i];
            }
            
            if(baliknumS === numS){
                return num;
            }else{
                num += 1;
            }
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001