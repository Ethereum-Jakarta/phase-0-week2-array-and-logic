let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    //output 1
    input[1] = "Roman Alamsyah Elsharawy";
    input[2] = "Provinsi Bandar Lampung";
    input.pop();
    input.push("Pria");
    input.push("SMA Internasional Metro");
    console.log(input);

    //output 2
    let partTgl = input[3].split("/")

    let date = new Date(`${partTgl[1]}-${partTgl[0]}-${partTgl[2]}`);
    const monthName = date.toLocaleString('default', { month: 'long' });
    console.log(monthName);

    //output 3
    let taun = partTgl.pop()
    let bulan = partTgl.pop()
    let tanggal = partTgl.pop()
    partTgl.unshift(bulan);
    partTgl.unshift(tanggal);
    partTgl.unshift(taun);
    console.log(partTgl);

    //output 4
    console.log(`${tanggal}-${bulan}-${taun}`)

    //output 5
    console.log(input[1].substring(0,15))
}

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */