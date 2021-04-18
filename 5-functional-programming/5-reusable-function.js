// array.map()
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => {
    return `${name}!`
});

console.log(newArray);


// array.filter()
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);




const students = [{
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);



// arrray.foreach() -> tidak bisa menggunakan break/continue
const persons = ['Harry', 'Ron', 'Jeff', 'Thomas'];

persons.forEach((name) => {
    console.log(`Hello, ${name}`);
});