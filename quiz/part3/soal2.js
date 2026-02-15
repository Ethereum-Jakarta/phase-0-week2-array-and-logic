function perkalianUnik(arr) {
    let prefix = []
    let suffix = []
    let result = []
    let sementara = 1

    for(let i = 0 ; i < arr.length ; i++){
        prefix.push(sementara)
        sementara *= arr[i]
    }
    let apaAja = 1
    for(let k = 0 ; k < arr.length ; k++){
        suffix.unshift(apaAja)
        apaAja *= arr[arr.length - k - 1]
    }
    for(let l = 0 ; l < arr.length ; l++){
        result[l] = prefix[l] * suffix[l]
    }
    return result
}


// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

