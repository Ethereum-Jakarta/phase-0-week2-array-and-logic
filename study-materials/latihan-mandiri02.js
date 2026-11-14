//1. Pakai `map` — ubah `[1, 2, 3, 4, 5]` jadi `[1, 4, 9, 16, 25]` (kuadrat)
let original1 = [1, 2, 3, 4, 5]
let squared = original1.map(num => num**2);
console.log(squared);

//2. Pakai `filter` — dari `["Andi", "Bo", "Cici", "Do", "Eka"]`, ambil yang namanya lebih dari 2 huruf
let original2 = ["Andi", "Bo", "Cici", "Do", "Eka"];
let filtered = original2.filter(num => num.length > 2);
console.log(filtered);

//3. Pakai `reduce` — hitung rata-rata dari `[80, 90, 70, 85, 95]`
let original3 = [80, 90, 70, 85, 95]
let average = original3.reduce((accumulator, currentValue, currentIndex, arr) => {
    return accumulator + currentValue/arr.length;
},0)
console.log(average);

//4. Pakai chaining — dari `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, ambil yang ganjil, kaliin 3, terus jumlahkan
let original4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let chained = original4.filter(num => num % 2 ==1).reduce((accumulator, currentValue) => {return accumulator+currentValue*3}, 0);
console.log(chained);