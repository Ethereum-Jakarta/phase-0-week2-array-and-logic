function angkaPalindrome(num) {
  num++;

  while (true) {
    let numStr = num.toString();
    let numRev = numStr.split("").reverse().join("");

    if (numStr === numRev) {
      return num;
    }

    num++;
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

// num++;
// let strNum = num.toString();
// let numRev = strNum.split("").reverse().join("");
// let paliCheck = strNum === numRev;
// let numReved = "";

// if (paliCheck === false) {
//   for (let i = num; i >= numRev; num -= 1) {
//     numReved += i;
//   }
// } else {
//   return num;
// }

// console.log(numRev);
