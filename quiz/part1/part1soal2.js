let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    let clone=[...input]
    let thn =[...input].slice(3,4).join('').split('/')
    for (let i = 0; i < clone.length; i++) {
        if (i===1) {
            clone.splice(i,i+1,"Roman Alamsyah Elsharawy")
        }else if (i===2){
            clone.splice(i,i,"Provinsi Bandar Lampung", "21/05/1989","Pria", "SMA Internasional Metro")
        }
    }
    [thn[0],thn[1],thn[2]]=[thn[2],thn[0],thn[1]]
    let thnlengkap = thn.join('-')
    let nama = clone.slice(1,2).join('').slice(0,15)
    let res = [clone,'mei',thn,thnlengkap,nama]
    for (const e of res) {
        console.log(e)
    }
    return ''
}

console.log(dataHandling2(input));

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
