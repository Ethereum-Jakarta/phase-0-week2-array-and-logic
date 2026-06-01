function dataHandling(n){
    for (let i = 0; i < n.length; i++){
        console.log(`nomor id: ${n[i][0]} \nnama lengkap: ${n[i][1]} \nttl: ${n[i][2]} ${n[i][3]} \nhobi: ${n[i][4]}`)
        console.log('\n')
    }
}

let input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

            dataHandling(input)
            