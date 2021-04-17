// Object berisi pasangan key dan value yang juga dikenal dengan property. Key berperan mirip seperti nama variabel yang menyimpan sebuah nilai. Sementara, value berisi nilai dengan tipe data apa pun termasuk objek lain. Key dan value di dalam object dituliskan seperti berikut:
let object = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};

const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age}`);

user.age = 20; //kenapa nilai bisa diubah? padahal pake const.. karena mengubah nilai berbeda dengan menginisialisasi ulang nilai.
console.log(user.age);


const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

// spaceship = {
//     name: "New Millenium Falcon"
// }; // Error

// menghapus property
delete spaceship.manufacturer;
console.log(spaceship.manufacturer);