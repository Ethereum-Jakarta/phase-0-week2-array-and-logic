let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    let perubahan = input
    perubahan.splice(2,1,'Provinsi '+input[2]);
    perubahan.splice(4,1,"Pria", "SMA Internasional Metro");

    return input;
}
console.log(dataHandling(input))

    let tl = input[3];
    let bulan = tl.split('/')[1];
        switch(bulan){
            case '01' :
                console.log('januari')
                break;
            case '05' :
                console.log('Mei')
                break;
        }

    let str = String(tl).split('/');
        console.log(str);

    let gabung = [tl.split('/')[0], tl.split('/')[1], tl.split('/')[2]];
    let jadi = gabung.join("-");
        console.log(jadi);

    let batas = input[1];
    let batasi = batas.slice(0,15)
    console.log(batasi)
