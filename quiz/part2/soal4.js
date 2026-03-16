function pasanganTerbesar(num){
  let str = String(num)
  let cariAngka = 0;
//   let angkaSelanjutnya = 0;
  
  for(let i = 0; i < str.length; i++){
      let terpisah = Number(str[i])
      cariAngka = Math.max(cariAngka, terpisah)
      // console.log(cariAngka)
  }
  let cariIndex = str.indexOf(cariAngka)
//   console.log(cariIndex)
  let setelahCariAngka = str.slice(cariIndex,cariIndex+2)
  // console.log(cariAngka)

  return num = Number(setelahCariAngka)
}

console.log(pasanganTerbesar(641573));
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99


