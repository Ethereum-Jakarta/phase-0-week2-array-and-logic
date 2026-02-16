function groupAnimals(animals) {
    let pengelompokan = [];
    for(let i = 0; i < animals.length; i++){
        let hurufPertama = animals[i][0];
        let hasil = false;
        for(let j = 0; j < pengelompokan.length; j++){
            if(pengelompokan[j][0][0] === hurufPertama){
                pengelompokan[j].push(animals[i]);
                hasil = true;
                break;
            }
        }

        if(!hasil){
            pengelompokan.push([animals[i]])
        }
    }
    for(let i = 0; i < pengelompokan.length; i++)
        // console.log(pengelompokan[i][0][0])
        for(let k = 0; k < pengelompokan.length - 1 - i; k++){
            if(pengelompokan[k][0][0] > pengelompokan[k+1][0][0]){
                let tukarTempat = pengelompokan[k];
                pengelompokan[k] = pengelompokan[k+1]
                pengelompokan[k+1] = tukarTempat
            }
        }
    return pengelompokan
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

