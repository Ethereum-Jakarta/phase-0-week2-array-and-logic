// ## Soal 1
/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

function targetTerdekat(arr) {
	let Posisi_O      = -1;
	let JarakTerdekat = 0;
	let Show_X        = false;
	
	// Mencari posisi O
	for(let i = 0; i < arr. length; i++){
		if (arr[i] === 'o'){
			Posisi_O = i;
			break;
		}
	}
	
	// Jika ga ada O
	if(Posisi_O === -1){
		return 0;
	}
	
	// Mencari posisi x
	for(let i = 0; i < arr.length; i++){
		if (arr[i] === 'x'){
			Jarak = Math.abs(i - Posisi_O)

			if(!Show_X){
				JarakTerdekat = Jarak;
				Show_X = true;
			}else if (!Show_X){
				JarakTerdekat = Jarak;
			}
		}
	}
	
	// Jika ga ada x
	if (!Show_X){
		return 0;
	}



	return JarakTerdekat;	
}
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
