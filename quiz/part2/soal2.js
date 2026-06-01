function angkaPalindrome(num) {

    while (true) {

        num++

        let angka = num
        let balik = 0

        while (angka > 0) {

            let digitAkhir = angka % 10

            balik = balik * 10 + digitAkhir

            angka = Math.floor(angka / 10)
        }

        if (num === balik) {
            return num
        }
    }
}

// while (true){
//     num++
//     let balik = Number(String(num).split('').reverse().join(''))

//     if (num === balik){
//         return num
//     }
// }

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001