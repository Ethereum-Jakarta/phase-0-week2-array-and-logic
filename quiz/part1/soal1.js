let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling() {
    for (let i = 0; i < input.length; i++) {
        const dataNama = input[i]
        console.log("Nomor ID : ", dataNama[0])
        console.log("Nama Lengkap : ", dataNama[1])
        console.log("TTL : ", dataNama[2] + " " + dataNama[3])
        console.log("Hobi : ", dataNama[4])
    }
}

dataHandling()