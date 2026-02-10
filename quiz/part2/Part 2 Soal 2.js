function angkaPalindrome(num) {
  while (true) {
    num++;

    let str = String(num);
    let reversed = str.split("").reverse().join("");

    if (str === reversed) {
      return num;
    }
  }
}

console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117));
console.log(angkaPalindrome(175));
console.log(angkaPalindrome(1000));
