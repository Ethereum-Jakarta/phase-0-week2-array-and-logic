let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling (input){
    for (let i = 0; i < input.length; i++) {
        const [nomorId, namaLengkap, kota, tanggalLahir, hobi] = input[i];
        console.log(`Nomor ID      : ${nomorId}`);
        console.log(`Nama Lengkap  : ${namaLengkap}`);
        console.log(`TTL           : ${kota}, ${tanggalLahir}`);
        console.log(`Hobi          : ${hobi}`);
        console.log(); 
    }
}


dataHandling(input)


