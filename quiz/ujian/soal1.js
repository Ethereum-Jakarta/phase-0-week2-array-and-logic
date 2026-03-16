function targetTerdekat(arr) {
    let minJarak = Infinity
    let indexO = -1 
    let indexX = -1 

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === 'o'){
            indexO = i 
        }else if(arr[i] === 'x'){
            indexX = i 
        }

        if(indexO !== -1 && indexX !== -1){
            let sementara = Math.abs(indexO - indexX)
            if(sementara < minJarak){
                minJarak = sementara
            }
        }
    }
    return minJarak === Infinity ? 0 : minJarak

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
