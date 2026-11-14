/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    let firstLetterArr = []; //kasih program memory tentang apa saja huruf awal yang sudah di penuhi
    let finalArr=[] //wadah sementara untuk di return
    let firstLetter; 
    for(let i = 0; i < animals.length; i++){
        firstLetter = animals[i][0];
        if(!(firstLetterArr.includes(firstLetter))){ //if disini untuk menambah huruf awal jika belum ada di array firstLetterArr
            firstLetterArr.push(animals[i][0]);  
            finalArr.push([]); //sekalian push ke finalArr dengan indeks yang sama dengan yang di firstLetterArr sehingga firstLetterArr[i] merujuk pada huruf depan dari hewan hewan para finalArr[i]
        }
        for(let j = 0; j < firstLetterArr.length; j++){
            if(firstLetter == firstLetterArr[j]){
                finalArr[j].push(animals[i]); //masukan hewan berdasarkan huruf depanya
            }
        }
    }
    return finalArr;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]