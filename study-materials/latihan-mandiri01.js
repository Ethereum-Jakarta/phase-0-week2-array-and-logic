//1. Gimana caranya hapus elemen di tengah array tanpa pakai splice?
//Pakai looping 
let deleteElement = function(arr, startIndex, cuttedNumbers=1){
    let retArr = [];
    for(let i = 0; i<arr.length; i++){
        if(i < startIndex || i >= startIndex + cuttedNumbers){
            retArr.push(arr[i]);
        }
    }
    return retArr;
}
console.log(deleteElement([1,2,3,4,5,6,7,8], 2, 3))



//2. Gimana caranya copy array biar gak nge-refer ke array yang sama?
//pakai deepcopy 
let original = [1,2, 'a', 'd', true];
let deepCopyOfOriginal = structuredClone(original);
deepCopyOfOriginal.splice(2,3);
console.log(original);
console.log(deepCopyOfOriginal);

//Kalau `splice(2, 0, "x")`, apa yang terjadi?
//splice cuma taruh x menjadi index 2 dalam array tanpa menghapus apapun
