// Callback hell terjadi karena banyak sekali callback function yang bersarang karena saling membutuhkan satu sama lain. 

function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients)
        .then(makeTheDough)
        .then(pourDough)
        .then(bakeACake)
        .then(console.log);
}