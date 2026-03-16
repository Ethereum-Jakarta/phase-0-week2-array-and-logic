let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) 
{
     input[2] = "Provinsi Bandar Lampung";
     input.push("SMA Internasional");

     let date = input[3].split("/");
     let month = date[1];

     switch(month){
        case'01': month = "Januari"; 
            break;
        case'02': month = "Febuari"; 
            break;
        case'03': month = "Maret"; 
            break;
        case'04': month = "April"; 
            break;
        case'05': month = "Mei"; 
            break;
        case'06': month = "Juni"; 
            break;
        case'07': month = "Juli"; 
            break;
        case'08': month = "Agustus"; 
            break;
        case'09': month = "September"; 
            break;
        case'10': month = "Oktober"; 
            break;
        case'11': month = "November"; 
            break;
        case'12': month = "Desember"; 
            break;
     }

     console.log(input);
     console.log(month);
     console.log([date[2],date[0],date[1]]);
     console.log(date.join('-'));
     console.log(input[1].split(14));
 
}

dataHandling(input);
