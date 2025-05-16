class User{
  id: number; 
  user_name : string;
  email: string;
  crypto_password: string;
  first_name: string;
  last_name : string;
  birthday_place: string;
  porvince: string;
  birthday: string;
  sex: string; 
  phone_number: string;
  created_at: string; 

  constructor (user_name: string, email:string, crypto_password:string, 
              first_name: string, last_name: string, birthday_place: string, porvince: string, 
              birthday: string, sex: string, phone_number: string, created_at: string){

    this.user_name = user_name;
    this.email = email;
    this.crypto_password = crypto_password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.birthday_place = birthday_place;
    this.porvince= porvince;
    this.birthday= birthday;
    this.sex= sex;
    this.phone_number=phone_number;
    this.created_at=created_at
  }
  functionname(params:string):void {
    
  }
}


const utente = new Utenti("motiv", "mannina.vito@gmail.com", "12345","vito", "mannina", "trapani", "trapani", "15/05/25", "M", "3279844229","15/05/25")
console.log(utente);
console.log("Nome Utente " + utente.user_name);
console.log("Email " + utente.email);
console.log("crypto_password"+ utente.crypto_password);
console.log("first_name" + utente.first_name);
console.log("last_name" + utente.last_name);
console.log("birthday_place" + utente.birthday_place);
console.log("porvince"+ utente.porvince);
console.log("compleanno"+ utente.birthday);
console.log("sesso" + utente.sex);
console.log("telefono"+ utente.phone_number);
console.log("created_at"+ utente.created_at);






