// Overriding adalah teknik untuk kita melakukan perombakan (baik total ataupun tidak) pada sebuah method ataupun constructor yang dimiliki oleh parent class sehingga dapat disesuaikan dengan behavior di child class.


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
    constructor(username, isBussinessAccount, phone) {
        super(phone);
        this.username = username;
        this.isBussinessAccount = true;
    }

    // Overriding method => Melakukan Override Total
    sendMessage = function (msg, to) {
        super.sendMessage(msg, to);
        console.log('Send by WA');
    }
}

const wa1 = new WhatsApp('di', true, 089000999888);
wa1.sendMessage('halo', 089000999888);