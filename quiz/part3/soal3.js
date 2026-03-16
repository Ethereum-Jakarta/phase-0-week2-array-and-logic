// Soal 3
// js
//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) 
{
  // you can only write your code here!
    let selisihAngka = arr[1] - arr[0];
    let cek = true;

    for (let i = 2; i < arr.length; i++)
    {
        if (selisihAngka !== (arr[i] - arr[i - 1]))
        {
            cek = false;
            break;
        }
    }

    return cek;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false