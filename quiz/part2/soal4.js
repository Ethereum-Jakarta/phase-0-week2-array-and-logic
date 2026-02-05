// ## Soal 4
function pasanganTerbesar(num) {
	let terbesar = 0;
	
	while (num >= 10){
		let pasangan = num % 100;
		
		if (pasangan > terbesar){
			terbesar = pasangan;
		}
		num = Math.floor(num / 10);
	}
	
	return terbesar;

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99