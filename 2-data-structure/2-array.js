let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray[1]);

let panjangArr = myArray.length;
console.log(panjangArr);

// menambahkan data ke array bisa gunakan push()
myArray.push('Javascript');
console.log(myArray);

// menghapus element terakhir pd array bisa gunakan pop()
myArray.pop();
console.log(myArray);

// Metode lain yang bisa kita gunakan untuk memanipulasi data pada array adalah shift() dan unshift(). Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, sementara unshift() digunakan untuk menambahkan elemen di awal array.

myArray.shift();
myArray.unshift("Apple");
console.log(myArray);

// menghapus data pada indeks tertentu
delete myArray[1];
console.log(myArray);

// atau bisa juga gunakan splice()
myArray.splice(2, 1); //hapus indeks 2 sebanyak 1 elemen
console.log(myArray);