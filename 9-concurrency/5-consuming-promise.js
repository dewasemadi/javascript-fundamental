const stock = {
    coffeeBeans: 250,
    water: 1000
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 60 && stock.water >= 250)
            resolve("Stok cukup. bisa buat kopi");
        else
            reject("Stock ga cukup");
    });
}

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

checkStock()
    .then(handleSuccess, handleFailure);


// const myPromise = new Promise(executorFunction);
// myPromise.then(onFullfilled, onRejected);