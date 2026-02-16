function dataHandling(array){
    let result = [];
    for(i=0; i < array.length; i++){
        let baris = array[i];
        let kolom = 
            "Nomor ID:  "+baris[0]+"\n"+
            "Nama:  "+baris[1]+"\n"+
            "TTL:   "+baris[2]+" "+baris[3]+"\n"+
            "Hobi:  "+baris[4];
        result.push(kolom);
        
    }
    return result.join("\n\n");
}

let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
console.log(dataHandling(input));