const hello = () => {
    console.log('Hello!')
};

const say = (someFunction) => {
    someFunction();
}

const sayHello = () => {
    return () => {
        console.log('Hello!');
    }
}

hello();
say(hello);
sayHello()();


// Higher-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya.


const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (array, fn) => {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i]));
    }

    return newArray;
}

const newNames = arrayMap(names, (name) => `${name}!`);

console.log({
    names,
    newNames,
});