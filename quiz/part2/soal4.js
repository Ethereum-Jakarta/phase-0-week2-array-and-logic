// ## Soal 4

function pasanganTerbesar(num) {
  // you can only write your code here!

  // //   console.log(num.toString().split(""))
    //     let numbers = num.toString();
    //     let data = [];

    //     for(let i = 0; i < numbers.length ; i += 2){
    //         // console.log(i)
            
    //         data.push(numbers.slice(i,i + 2));

    //         // console.log(data);
    //     }
    //     console.log(data); 

// engga memenuhi syarat faqq


    // percobaan ke 2

    // let numbers = num.toString();
    // // console.log(numbers.length);
    

    // for(let i = 0; i < numbers.length - 1; i++){
    //     let isBig = false;
    //     // console.log(numbers[i] + numbers[i + 1]);
        
    //     let couple1 = parseInt(numbers[i] + numbers[i+1]);
    //     // console.log(couple1);

        
    //     for(let j = 0; j < numbers.length - 1; j++){
            

    //         // console.log(`couple 2 : ${numbers[j] + numbers[j+1]}`)
    //         let couple2 = parseInt(numbers[j] + numbers[j+1]);
    //         // console.log(couple1 + '<' + couple2)
    //         // console.log(couple1 < couple2)
    //         if(couple1 < couple2){
    //             isBig = true;
    //             break;
    //         }
            
            
    //     }
    //     // console.log(" ")
    //     // console.log("berhenti ")

    //     if(!isBig){
    //         return couple1;
    //     }

    // }

    // percobaan ke 3

    let numbers = num.toString();
    let maxNum = 0;

    for(let i = 0; i < numbers.length - 1; i++){
        let couple = parseInt(numbers[i] + numbers[i + 1]);
        if(couple > maxNum){
            maxNum = couple;
        }
    }
    return maxNum;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99


// console.log(1 <= 1)