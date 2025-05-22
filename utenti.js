var User = /** @class */ (function () {
    function User(user_name, email, crypto_password, first_name, last_name, birthday_place, porvince, birthday, sex, phone_number, created_at) {
        this.user_name = user_name;
        this.email = email;
        this.crypto_password = crypto_password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.birthday_place = birthday_place;
        this.porvince = porvince;
        this.birthday = birthday;
        this.sex = sex;
        this.phone_number = phone_number;
        this.created_at = created_at;
    }
    User.prototype.mostraInformazioni = function () {
        var aux = "\n" + this.user_name + "\n";
        aux += this.email + "\n";
        aux += this.crypto_password + "\n";
        aux += this.first_name + "\n";
        aux += this.last_name + "\n";
        aux += this.porvince + "\n";
        aux += this.birthday + "\n";
        aux += this.sex + "\n";
        aux += this.phone_number + "\n";
        aux += this.created_at + "\n";
        return aux;
    };
    User.prototype.functionname = function (params) {
    };
    return User;
}());
var utente = new User("motiv", "mannina.vito@gmail.com", "12345", "vito", "mannina", "trapani", "trapani", "15/05/25", "M", "3279844229", "15/05/25");
console.log("Utente " + utente.mostraInformazioni());
utente.aggiornaDati("franco", "mannina.franco@gmail.com", "12345", "Franco", "mannina");
console.log("Utente " + utente.mostraInformazioni());
utente.cancelladati("Franco", "mannina.franco@gmail.com", "12345", "Franco", "mannina");
