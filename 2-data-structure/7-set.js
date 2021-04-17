// Struktur data yang akan kita bahas berikutnya adalah Set. Set sederhananya merupakan kumpulan nilai (set of values). Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks. Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi. 

const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

numberSet.add(5);
numberSet.add(10);
numberSet.add(6);
console.log(numberSet);


let evenNumber = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0)
        evenNumber.push(i);
}

console.log(evenNumber);