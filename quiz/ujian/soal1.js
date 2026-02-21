function targetTerdekat(arr) {
    let index = [];
    let kanan = 0;
    let kiri = 0;
    for (i = 0; i < arr.length; i++){
        if(arr[i] === 'o'){
            index.push(i);
        }
    }
    
    while(index.length){
        for ( i = index; i < arr.length; i++){
            if(arr[i] === 'x'){
                kanan = i - index;
                break;
            }
        }

        for ( i = index; i > -1; i--){
            if(arr[i] === 'x'){
                kiri = index - i;
                break;
            }
        }
        index.shift();
    }
    
    if (kanan != 0 && kiri != 0){
        return (kanan > kiri)? kiri : kanan;
    } else if(kanan === 0){
        if(kiri != 0){
            return kiri;
        }
        else
            return 0;
    } else if(kiri === 0){
        if(kanan != 0){
            return kanan;
        }
        else
            return 0;
    } else
        return 0;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1