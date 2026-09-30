let arr = [1,2,3,4,5];

let indeksTengah = Math.round(arr.length / 2);
let arrBaru = [];

for(let i = arr[0]; i<= arr.length; i++){
    if(i !== indeksTengah){
        arrBaru.push(i);
    }
}
console.log(arrBaru);
console.log();
// ==========================================

let arr1 = [1,2,3,4,5,6,7,8,9];

let newArr = arr1.slice(0);
console.log(`arr1 = ${arr1}`)
console.log(`newArr = ${newArr}`);
console.log();
// ==========================================
arr1.splice(2, 0, "x");
console.log(arr1);

// jika splice(2, 0, "x"); hasilnya adalah menyisipkan elemen tersebut ke indeks yang disesuaikan didalam parameter