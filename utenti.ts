class User { //Creo la classe User 
  id: number;
  user_name: string;
  email: string;
  crypto_password: string;
  first_name: string;
  last_name: string;
  birthday_place: string;
  porvince: string;
  birthday: string;
  sex: string;
  phone_number: string;
  created_at: string;
// Qui costruisco le informazioni della classe
  constructor(user_name: string, email: string, crypto_password: string,
    first_name: string, last_name: string, birthday_place: string, porvince: string,
    birthday: string, sex: string, phone_number: string, created_at: string) {

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
    this.created_at = created_at
  }

  //Qui mostro le informazioni della classe
  mostraInformazioni(): string {
    let aux: string = "\n" + this.user_name + "\n"
    aux += this.email + "\n"
    aux += this.crypto_password + "\n"
    aux += this.first_name + "\n"
    aux += this.last_name + "\n"
    aux += this.porvince + "\n"
    aux += this.birthday + "\n"
    aux += this.sex + "\n"
    aux += this.phone_number + "\n"
    aux += this.created_at + "\n"

    return aux;
  }

// Qui i dati vengono aggiornati
aggiornaDati(user : User){
this.email = user.email;
this.user_name = user.user_name;
this.phone_number = user.phone_number;
}


//Qui i dati vengono cancellati
cancellaDati(user: User){
this.email = user.email;
this.user_name = user.user_name;
this.phone_number = user.phone_number; 

}
}

//Qui stampo e/o creo le informazioni, la cancellazione e l'aggiornamento dei dati
const utente = new User("motiv", "mannina.vito@gmail.com", "12345", "vito", "mannina", "trapani", "trapani", "15/05/25", "M", "3279844229", "15/05/25")
console.log("utente " + utente.mostraInformazioni());
utente.aggiornaDati(utente);
console.log("utente " + utente.mostraInformazioni());
utente.cancellaDati(utente);
console.log("utente" + utente.mostraInformazioni());
