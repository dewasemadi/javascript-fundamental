// cara 1
class Mail {
    constructor(author) {
        this.from = 'pengirim@dicoding.com';

        console.log('is instantiated', author);
    };
}

// cara 2
/*
function Mail(author) {
    this.from = author;

    console.log('is instantiated', author);
}
*/

const mail1 = new Mail("emailku@dicoding.com");