const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari);
}

console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(8)); // 200.96
console.log(hitungLuasLingkaran(8)); // 200.96





const createPersonWithAge = (age, person) => {
    return {
        ...person,
        age
    };
};

const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
});


// -- Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
// -- Hanya bergantung pada argumen yang diberikan.
// -- Tidak menimbulkan efek samping.
// Bila 3 konsep di atas terpenuhi, maka bisa dipastikan Anda membuat sebuah pure function.