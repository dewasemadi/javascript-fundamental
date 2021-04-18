// Static method adalah function atau method yang sama seperti class method, akan tetapi untuk mengaksesnya tidak perlu meng-instantiate class, kita cukup menuliskan nama kelas dan nama method-nya secara langsung


class Mail {
    static isValidPhone(phone) {
        return typeof phone === 'number';
    }
}

Mail.isValidPhone(089000000000) //true