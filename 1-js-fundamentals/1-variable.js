// let -> nilainya bisa di definisikan ulang
// const -> nilainya TIDAK bisa di definisikan ulang
let lastName;
lastName = "skywalker";
console.log(lastName);

let firstName = "Dedy";
console.log(firstName);

// let fullName =
//     let lastName; // Error karena let lastName adalah sebuah statement untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.
// let fullName = (lastName = "Skywalker"); // (lastName = “Skywalker”) merupakan expression, sehingga kode ini tidak error.
let fullName = "Luke" + "Skywalker";
console.log(fullName);


const z = 100;
console.log(z);
// z = 200; //error karena const nilainya tidak bisa di definisikan ulang