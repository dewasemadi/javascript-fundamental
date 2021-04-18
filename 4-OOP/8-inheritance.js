// keyword untuk inheritance adalah extends

class Mail {
    _contacts = [];
    constructor(author) {
        this.from = author;
    };
    sendMessage = function (msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
        this._contacts.push(to);
    };
    showAllContacts() {
        return this._contacts;
    }
}

class WhatsApp extends Mail {
    username = 'dicoding';
    isBussinessAccount = true;

    myProfile = function () {
        return `my name ${this.username}, is ${this.isBussinessAccount? 'Business': 'Personal'}`;
    };
}

const wa1 = new WhatsApp(080111000222);
console.log(wa1.myProfile());
// my name dicoding, is Business