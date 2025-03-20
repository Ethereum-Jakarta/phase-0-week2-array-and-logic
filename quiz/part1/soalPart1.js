/*
Soal 1
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input[i].length; j++){
        if (j === 0){
            console.log(`Nomer id : ${input[i][j]}`);
        } else if (j === 1){
            console.log(`Nama Lengkap : ${input[i][j]}`)
        } else if (j === 2){
            console.log(`TTL : ${input[i][j]} ${input[i][j + 1]} `)
        } else if (j === 4){
            console.log(`Hobby : ${input[i][j]}`)
        }
    }
    console.log(" ")
}

