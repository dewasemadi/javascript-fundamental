const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
// const [, , thirdFood ] = favorites;
// console.log(thirdFood);

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

let a = 1,
    b = 2;
[a, b] = [b, a];
console.log(a, b);