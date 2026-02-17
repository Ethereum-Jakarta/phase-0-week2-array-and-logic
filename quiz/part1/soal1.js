// ## Soal 1


/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/

let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

/*
output yang diharapkan


Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun

*/


// for (let i = 0; i < input.length; i++){
//     console.log(' ')
//     for (datas in input[i]) {
//         let titles = ["Nomor Id", "Nama Lengkap", "Kota", "TTL", "Hobi"];
//         console.log(typeof(datas))
//         let paraArrays = Number(datas);
//         switch (paraArrays) {
//             case 0:
//                 paraArrays = "Nomor Id";
//                 break;
//             case 1 :
//                 paraArrays = "Nama Lengkap";
//                 break;            
//             case 2 :
//                 paraArrays = "Kota";
//                 break;            
//             case 3 :
//                 paraArrays = "TTL";
//                 break;
//             case 4 :
//                 paraArrays = "Hobi";
//                 break;
//         }

       
        
        
        
//         // console.log(titles[3])
//         // console.log(titles[datas] + " : " + input[i][datas]);
//         console.log(paraArrays + " : " + input[i][datas]);
//     }
//     console.log(' ')
// }

const dataHandling = (a) => {

    // for(let i = 0; i < a.length; i++){
    //     for(keys in a[i] ) {
    //         // console.log(a[i].slice(2,4).join(' '))
    //         let dataCase;
            
    //         switch(Number(keys) ){
    //             case 0: 
    //                 keys = "Nomor Id";
    //                 dataCase = a[i].slice(0,1).join(' ');
    //                 console.log(keys,":",dataCase)
    //                 break;
    //             case 1:
    //                 keys = "Nama Lengkap";
    //                 dataCase = a[i].slice(1,2).join(' ');
    //                 console.log(keys,":",dataCase)
    //                 break;
    //             case 2 :
    //                 keys = "TTL";
    //                 dataCase = a[i].slice(2,4).join(' ');
    //                 console.log(keys,":",dataCase)
    //                 break;
    //             case 3 :
    //                 keys = "Hobi";
    //                 dataCase = a[i].slice(4,5).join(' ');
    //                 console.log(keys,":",dataCase)
    //                 break;

    //         }
           
    //     }
    //     console.log(" ")
    // }

    // Nomor ID:  0004
    // Nama Lengkap:  Bintang Senjaya
    // TTL:  Martapura 6/4/1970
    // Hobi:  Berkebun


    // a.map((item) => {
    //     // console.log(item)

    //     console.log("")
    //     console.log("Nomor ID: " + item[0]);
    //     console.log("Nama Lengkap: " + item[1] );
    //     console.log("TTL: " + item[2] + " " + item[3]);
    //     console.log("Hobi: " + item[4]);
    // });

    // for (let i = 0; i < a.length; i++){
    //     console.log("")
    //     console.log("Nomor ID: " + a[i][0]);
    //     console.log("Nama Lengkap: " + a[i][1] );
    //     console.log("TTL: " + a[i][2] + " " + a[i][3]);
    //     console.log("Hobi: " + a[i][4]);
    // }

    let hasil = '';

    for (let i = 0; i < a.length; i++){
        hasil += `\n Nomor ID : ${a[i][0]}\n Nama Lengkap : ${a[i][1]}\n TTL : ${a[i][2]} ${a[i][3]}\n Hobi : ${a[i][4]}\n`
    }
    
    return hasil;

}

console.log(dataHandling(input))