// ==========================================
// Bikin matrix 4x4 berisi angka 1-16, terus print diagonal-nya (1, 6, 11, 16)
console.log();

let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[0].length; j++){
        
        if(i == j){
            console.log(arr[i][j]);
        }
    }
    
}

// ==========================================
// Dari data [["Andi", "A"], ["Budi", "B"], ["Cici", "A"]], hitung berapa siswa yang dapet grade "A"
console.log();

let siswa = [
    ["Andi", "A"], 
    ["Budi", "B"], 
    ["Cici", "A"]
];

for(let i = 0; i < siswa.length; i++){
    for(let j = 0; j < siswa[0].length; j++){
        if(siswa[i][1]==="A"){
            console.log(siswa[i][j]);
        }
    }
}


// ==========================================
// Flatten array [[1, [2, 3]], [4, [5, 6]]] jadi [1, 2, 3, 4, 5, 6]
console.log();

let nested = [
    [1, [2, 3]], 
    [4, [5, 6]]
];

let flated2 = nested.flat();
let flated3 = flated2.flat();

console.log(flated3);
