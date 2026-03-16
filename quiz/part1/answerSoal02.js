let input2 = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function newArray(arr) {
  const newArray = [...arr].splice(0, 1);
  const result = [
    ...newArray,
    "Roman Alamsyah Elsharawy",
    "Provinsi Bandar Lampung",
    "21/05/1989",
    "Pria",
    "SMA Internasional Metro",
  ];
  return result;
}

function findMonthName(date) {
  let monthInNumber = date.split("/").slice(1, 2).toString();
  let monthName;

  switch (monthInNumber) {
    case "01":
      monthName = "Januari";
      break;
    case "02":
      monthName = "Februari";
      break;
    case "03":
      monthName = "Maret";
      break;
    case "04":
      monthName = "April";
      break;
    case "05":
      monthName = "Mei";
      break;
    case "06":
      monthName = "Juni";
      break;
    case "07":
      monthName = "Juli";
      break;
    case "08":
      monthName = "Agustus";
      break;
    case "09":
      monthName = "September";
      break;
    case "10":
      monthName = "Oktober";
      break;
    case "11":
      monthName = "November";
      break;
    case "12":
      monthName = "Desember";
      break;
  }
  return monthName;
}

function dateToArray(date) {
  let arrayOfDate = date.split("/").sort((a, b) => b - a);
  return arrayOfDate;
}

function dateFormatter(date) {
  const newDateFormat = date.split("/").join("-");
  return newDateFormat;
}

function maximumNameLen(name) {
  const formatedName = name.slice(0, 15);
  return formatedName;
}

function dataHandling2(arr) {
  const newData = newArray(arr);
  console.log(newData);
  const monthName = findMonthName(arr[3]);
  console.log(monthName);
  const arrayOfDate = dateToArray(arr[3]);
  console.log(arrayOfDate);
  const newDateFormat = dateFormatter(arr[3]);
  console.log(newDateFormat);
  const username = maximumNameLen(newData[1]);
  console.log(username);
}

dataHandling2(input2);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
