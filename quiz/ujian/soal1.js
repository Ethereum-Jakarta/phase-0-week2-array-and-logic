// ## Soal 1

/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!

  // console.log(" ")

  // // console.log(arr.indexOf('x'));
  // let isStart = false;
  // let a = 0;
  // let b = 0;

  // for(let i = 0; i < arr.length; i++){
    
  //   if(arr[i] === 'o'){
  //     isStart = true;
  //     a += Number(i);

  //   }


  //   if(arr[i] === 'x'){
  //     b += Number(i);
  //     break;
  //   }
  // }
  // console.log(a,b);

  // // console.log(arr.slice(a,b).length)

  // return arr.slice(a,b).length;

  // Incorrect intructions


  // Percobaan ke 2

  // console.log(" ")

  // let posisiO = 0;
  // let minX = 0;
  
  // for(let i = 0; i < arr.length; i++ ){
  //   if(arr[i] === 'o'){
  //     posisiO += i
  //   }

  //   if(arr[i] === 'x'){
  //     // if(minX > i){
  //     //   minX = i;
  //     // }
  //     minX = i;
  //     break;
  //   }

  // }

  
  // console.log(posisiO, minX)
  // idk where the faq im goin


  // percobaan ke 3

  let posisiO = [];
  let posisiX = [];
  let closesNum = Infinity;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 'o'){
      posisiO.push(i);
    }
    if(arr[i] === 'x'){
      posisiX.push(i);
    }
    
  }

  for(let i = 0; i < posisiO.length ; i++){
    // console.log(posisiO[i]);
    
    console.log(" ");

    for(let j = 0; j < posisiX.length; j++){
      let hasil = Math.abs(posisiO[i] - posisiX[j]);
      console.log(`posisi O ${posisiO} dan posisi X ${posisiX} =  ${hasil}`);

      if(hasil < closesNum){
        closesNum = hasil;
      }
    }



  
  }

  if(closesNum === Infinity){
    return 0;
  }

  console.log(posisiO, posisiX);

  return closesNum;
}


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
