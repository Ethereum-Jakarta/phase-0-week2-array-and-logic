//1. Bikin matrix 4x4 berisi angka 1 - 16, terus print diagonal - nya(1, 6, 11, 16)
let arr1 = [[1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]]
let diagonal = arr1.reduce((accumulator,currentValue, currentIndex) => {
    accumulator.push(currentValue[currentIndex])
    return accumulator
    },[] )
console.group(diagonal);

//2. Dari data `[["Andi", "A"], ["Budi", "B"], ["Cici", "A"]]`, hitung berapa siswa yang dapet grade "A"
let arr2 = [["Andi", "A"], ["Budi", "B"], ["Cici", "A"]];
let gradeA = arr2.filter(item => item[1] == 'A').length;
console.log('Jumlah Siswa A: ' + gradeA);

//3. Flatten array `[[1, [2, 3]], [4, [5, 6]]]` jadi `[1, 2, 3, 4, 5, 6]`
function flattenArray(arr, biggerArr = []){
    arr.forEach(item => {
        if(Array.isArray(item)){
            flattenArray(item, biggerArr); //kalau si item itu array kita pecat lalu gabungin sama array utaa
        }
        else{
            biggerArr.push(item);
        }
    }) 
   return biggerArr;
}
console.log(flattenArray([[1, [2, 3]], [4, [5, 6]]]))