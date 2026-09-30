// ==========================================
// Sort array ["jeruk", "apel", "mangga", "durian"] secara alphabetical

let arr = ["jeruk", "apel", "mangga", "durian"];
arr.sort();
console.log(arr);

console.log();
console.log("=====================================");

// ==========================================
// Sort array of numbers [100, 4, 200, 1, 3, 2] ascending dan descending
let number = [100, 4, 200, 1, 3, 2];
let ascending = number.sort(function (a,b){
    return a-b;
});

function descending(input){
    let descending2 = [];
    for(let i = ascending.length-1; i >= 0; i--){
        descending2.push(input[i]);
    };
    return descending2;
};
console.log(`Ascending: ${ascending}`);
console.log(`Ascending:`, descending(number));

console.log();
console.log("=====================================");


// ==========================================
// Implementasi Bubble Sort sendiri tanpa liat contoh
