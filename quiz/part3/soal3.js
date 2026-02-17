// ## Soal 3

//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  console.log(" ")

  //   // Sn = n/2 (2a + (n – 1)b)
  //   // a = angka pertama 
  //   // b = selisih angka
  //   let angkaTotal = 0;

  //   let rumus = (arr.length / 2) * ((2*arr[0]) + (arr.length - 1) * (arr[1] - arr[0]))

  //   console.log(rumus)

  //   for(i of arr){
  //     angkaTotal += parseInt(i) ;
  //     // console.log(parseInt(i) + 1)
  //   }

  // console.log(angkaTotal)
  
  // return angkaTotal === rumus ? true : false;

  if(arr < 2) {
    return "angka kamu bisa jadi deret aritmatika, namun kurang banyak kejadian untuk dapat menentukan deret"
  }

  let selisih = arr[1] - arr[0];
  console.log(selisih)

  for(let i = 0; i < arr.length - 1; i++){
    console.log(arr[i + 1] - arr[i])
    if(arr[i + 1] - arr[i] !== selisih){
      return false;
    }
  }

  return true;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
