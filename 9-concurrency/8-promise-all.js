// Method Promise.all() dapat menerima banyak promise dalam bentuk array pada parameternya. Kemudian method tersebut akan mengembalikan nilai seluruh hasil dari promise dalam bentuk array.

const promises = ['firstPromise()', 'secondPromise()', 'thirdPromise()'];

Promise.all(promises)
    .then(resolvedValue => {
        console.log(resolvedValue);
    });