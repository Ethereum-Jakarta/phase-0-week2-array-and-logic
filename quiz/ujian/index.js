const { element } = require("prop-types");

if(Infinity >= 1){
    console.log("tes");
}

function targetTerdekat(arr){
    let posisiO =  arr.indexOf("o");
    let jarakTerdekat = 0;
    for(let i = 0; i < arr.length;i++){
        if(arr[i] === "x"){
            let jarak = Math.abs(i - posisiO);
            if(jarak < jarakTerdekat){
                jarakTerdekat = jarak;
            }
        }
    }
    return jarakTerdekat === Infinity? 0 : jarakTerdekat;
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1

function mengelompokkanAngka(arr) {
    // you can only write your code here!
    let genap = [];
    let ganjil = [];
    let kelipatanTiga = []
    for(i = 0; i < arr.length;i++){
        if(arr[i]%3 == 0){
            kelipatanTiga.push(arr[i]);
        }else if(arr[i]%2 === 0){
            genap.push(arr[i]);
        }else{
            ganjil.push(arr[i]);
        }
    }
    return [genap, ganjil, kelipatanTiga];
}

console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]


function groupAnimals(animals) {
    animals.sort()
    let arr = []
    let temparr = []
    for (let i = 0;i < animals.length; i++){
        let hrfPertama = animals[i][0];
        if (temparr.length === 0 || animals[i - 1][0] === hrfPertama){
            temparr.push(animals[i])
        }else{
            arr.push([temparr])
            temparr = [animals[i]]
        }
        if(i === animals.length - 1){
            arr.push(temparr);
        }
    }
    
    return arr
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]