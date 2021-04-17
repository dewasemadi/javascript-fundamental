const isRaining = true;
console.log("Persiapan sebelum berangkat kegiatan");
if (isRaining)
    console.log("Hari ini hujan. Bawa payung");
else
    console.log("Berangkat kegiatan");


let language = "French",
    greeting = "Selamat Pagi";

if (language === "English")
    greeting = "Good Morning!";
else if (language === "French")
    greeting = "Bonjour!";
else if (language === "Japanese")
    greeting = "Ohayou Gozaimasu!";

console.log(greeting);


const isMember = false
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount*100}%`);

// Nilai truthy berarti nilai yang ketika dievaluasi akan menghasilkan nilai true, begitu pula falsy bernilai false. 

let name = "";

if (name) {
    console.log(`Halo, ${name}`);
} else {
    console.log("Nama masih kosong");
}