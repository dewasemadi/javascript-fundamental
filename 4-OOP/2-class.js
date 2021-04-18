class Mail {
    from = 'pengirim@dicoding.com';
    sendMessage = function (msg, to) {
        console.log('you send: ', msg, 'to', to, 'from', this.from);
    };
}

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');