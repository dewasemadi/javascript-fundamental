// Property adalah atribut dari sebuah objek, property sendiri dapat berupa tipe data primitive--seperti yang sebelumnya dibahas-- bahkan bisa juga berbentuk object dan fungsi. Misalkan isi pesan, list penerima, data pengirim, perintah kirim, dll. Sebagai contoh:

// cara 1
/*
class Mail {
    from = 'pengirim@dicoding.com';
    contacts = [];
    sendMessage = function (msg, to) {
        console.log('you send: ', msg, 'to', to, 'from', this.from);
        this.contacts.push(to); //menyimpan kontak baru
    };
}
*/

// cara 2
/*
function Mail() {
    this.from = 'pengirim@dicoding.com';
    this.contact = [];
    this.sendMessage = function (msg, to) {
        console.log('you send: ', msg, 'to', to, 'from', this.from);
        this.contact.push(to); //menyimpan kontak baru
    };
};
*/


class Mail {
    from = 'pengirim@dicoding.com';
    contacts = [];
    sendMessage = function (msg, to, from) {
        console.log('you send:', msg, 'to', to, 'from', from); // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
        this.contacts.push(to);
    };
}

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');