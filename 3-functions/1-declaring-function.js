function greeting() {
    console.log("Good Morning");
}

greeting();

//function dengan parameter
function greetings(name, language) {
    if (language === "English")
        console.log(`Good Morning ${name}!`);
    else if (language === "French")
        console.log(`Bonjour ${name}!`);
    else
        console.log(`Selamat pagi ${name}!`);
}

greetings("Harry", "French");

function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2);
console.log(result);



// Cara lain untuk membuat sebuah fungsi pada JavaScript adalah expression function. Ingat kembali bahwa expression adalah kode atau instruksi yang mengembalikan nilai, sehingga expression function bisa disimpan dalam sebuah variabel.
const salam = function (name, language) {
    if (language === "English")
        return "Good Morning " + name + "!";
    else if (language === "French")
        return "Bonjour " + name + "!";
    else
        return "Selamat Pagi " + name + "!";

}

console.log(salam('Ron', 'English'));