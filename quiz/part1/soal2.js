//pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
  input.splice(5,0, "Pria", "SMA Internasional Metro");
  console.log(input);

  let dob = input[3];
  const monthArr=['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  let monthNumber = dob.slice(3,5);
  monthNumber = parseInt(monthNumber);
  const month = monthArr[monthNumber-1];
  console.log(month);

  let monthDateArr = dob.split("/");
  const newMonthDateArr = [`${monthDateArr[2]}`, `${monthDateArr[0]}`, `${monthDateArr[1]}`]
  console.log(newMonthDateArr);

  monthDateArr = monthDateArr.join(`-`);
  console.log(monthDateArr);

  const nameMax = input[1].slice(0,15);
  console.log(nameMax);

}

dataHandling(input);

/*
  keluaran yang diharapkan (pada console)
 
  ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
  Mei
  ["1989", "21", "05"]
  21-05-1989
  Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */