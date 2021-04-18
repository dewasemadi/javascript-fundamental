try {
    // kode
} catch (error) {
    // error handling
}


try {
    console.log("Awal blok try"); // (1)
    errorCode; // (2)
    console.log("Akhir blok try"); // (3)
} catch (error) {
    console.log("Terjadi error!"); // (4)

    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}


//Selain try dan catch, ada satu blok lagi yang ada dalam mekanisme error handling pada JavaScript, yaitu finally. Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.


try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
    console.log("Baris ini diabaikan");
} finally {
    console.log("Akan tetap dieksekusi");
}