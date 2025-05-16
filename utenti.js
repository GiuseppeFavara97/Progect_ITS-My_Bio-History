var Utenti = /** @class */ (function () {
    function Utenti(nome_utente, email, crypto_password, first_name, last_name, birthday_place, porvince, compleanno, sesso, telefono, created_at) {
        this.nome_utente = nome_utente;
        this.email = email;
        this.crypto_password = crypto_password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.birthday_place = birthday_place;
        this.porvince = porvince;
        this.compleanno = compleanno;
        this.sesso = sesso;
        this.telefono = telefono;
        this.created_at = created_at;
    }
    return Utenti;
}());
var utente = new Utenti("motiv", "mannina.vito@gmail.com", "12345", "vito", "mannina", "trapani", "trapani", "15/05/25", "M", "3279844229", "15/05/25");
console.log(utente);
console.log("Nome Utente " + utente.nome_utente);
console.log("Email " + utente.email);
console.log("crypto_password" + utente.crypto_password);
console.log("first_name" + utente.first_name);
console.log("last_name" + utente.last_name);
console.log("birthday_place" + utente.birthday_place);
console.log("porvince" + utente.porvince);
console.log("compleanno" + utente.compleanno);
console.log("sesso" + utente.sesso);
console.log("telefono" + utente.telefono);
console.log("created_at" + utente.created_at);
