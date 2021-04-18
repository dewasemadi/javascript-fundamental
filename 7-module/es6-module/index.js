import coffeeStock from './state.js';
//multiple import
//import { coffeeStock as stock, isCoffeeMachineReady } from './state.js';


const displayStock = stock => {
    // loop
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(coffeeStock);