/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca*/

function dataHandling(input) {
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        if (j===0) {
            console.log(`Nomor ID : ${input[i][j]}`)
        }else if (j===1) {
             console.log(`Nama Lengkap : ${input[i][j]}`)
        }else if (j===2){
             console.log(`TTL : ${input[i][j]} ${input[i][j+1]}`)
        }else if (j===3) {
            continue
        }else{
             console.log(`Hobi : ${input[i][j]}`)
        }
        
    }
    console.log('\n')
}
return ''
}


let input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
console.log(dataHandling(input))

