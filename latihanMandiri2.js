console.log("Soal 1");
let angka = [1,2,3,4,5];

let pangkat = angka.map(function(num) {return num * num});
console.log(pangkat);

console.log("Soal 2");
let nama = ["Andi", "Bo", "Cici", "Do", "Eka"];

let ambil = nama.filter(function(n){
    return n.length > 2; 
});
console.log(ambil);
console.log();
console.log("=====================================");

console.log("Soal 3");
let number = [80, 90, 70, 85, 95];

let rataRata = number.reduce(function(a,b){
    return a+b;
});
console.log(rataRata / number.length);
console.log();
console.log("=====================================");

console.log("Soal 4");
let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let hasil = nomor
.filter(function(j){return j % 2 !==0})
.map(function(j){return j * 3 })
.reduce(function(j,k){return j + k});

console.log(hasil);
console.log("=====================================");
