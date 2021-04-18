// let json = '{ "name": "Yoda", "age": 20 }';
let json = '{ bad json }';

try {
    let user = JSON.parse(json);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}



// throwing error 
let data = '{"age":20}';

try {
    let user = JSON.parse(data);

    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
    console.log(user.name);
    console.log(user.age);
} catch (err) {
    console.log(`JSON Error: ${err.message}`);
}