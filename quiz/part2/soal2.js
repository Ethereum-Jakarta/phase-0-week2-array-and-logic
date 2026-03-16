// function angkaPalindrome(angka) {
//   while (true) {
//     angka++;
//     let num = angka.toString();
//     if (num === num.split("").reverse().join("")) {
//       return angka;
//     }
//   }
// }

const angkaPalindrome = (angka) => {
  for (angka++; ; angka++) {
    let num = angka.toString();
    if (num === num.split().reverse().join("")) return angka; // Cek palindrom
  }
};

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
