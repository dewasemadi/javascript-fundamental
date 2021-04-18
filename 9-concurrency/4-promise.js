/* perilaku promise
1. Pending -> janji sedang dalam proses
2. Fulfilled -> janji terpenuhi
3. Rejected -> janji gagal terpenuhi
*/

// const coffee = new Promise();

// Di dalam constructor Promise, kita perlu menetapkan resolver function atau bisa disebut executor function. Fungsi tersebut akan dijalankan secara otomatis ketika constructor Promise dipanggil.

const executorFunc = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady)
        resolve("Kopi berhasil dibuat");
    else
        reject("Mesin kopi tidak bisa digunakan");
}

const makeCoffee = () => {
    return new Promise(executorFunc);
}

const coffeePromise = makeCoffee();
console.log(coffeePromise);