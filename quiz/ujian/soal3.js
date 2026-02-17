// ## Soal 3

/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!


  const huruf = 'abcdefghijklmnopqrstuvwxyz'.split("");
  
//   console.log(huruf)

  let hasil = [];
  let sebelumHasil = [];
 
  
  for (let i = 0; i < huruf.length; i++){
    

    for(let j = 0; j < animals.length; j++){
        // console.log(`huruf ${huruf[i]} dan animal ${animals[j]}`);
        if(huruf[i] === animals[j][0].toLowerCase()){
            sebelumHasil.push(animals[j]);
            
        }
        
    }
    
    // console.log(sebelumHasil)
  }

  for(let i = 0; i < huruf.length; i++){
    let found = false;
    let hasil2 = [];
    
    
    for (let j = 0; j < sebelumHasil.length; j++){
 
        if(huruf[i] === sebelumHasil[j][0].toLowerCase()){
            hasil2.push(sebelumHasil[j])
            continue;
        }    

         

    }
    if(hasil2.length > 0){
        hasil.push(hasil2)
    }

  }

    


  console.log(" ")
//   console.log(sebelumHasil)
//   console.log(hasil2)

  return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
[ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
