// Bug 1
function hitungLuas(panjang, lebar) {
    let luas = panjang * lebar;
    return luas; //kurang return
}
console.log("Luas: " + hitungLuas(5, 3));

// Bug 2
let numbers = [1, 2, 3, 4, 5];
for (let i = 1; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//harusnya < numbers.length, bukan <= numbers.length

// Bug 3
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
console.log(isEven(3));
//harusnya pakai num % 2 == 0 atau num % 2 === 0 karena '=' eksklusif untuk deklarasi