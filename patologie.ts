class Patologie //qui creo la classe delle patologie
{
id: number;
nome: string;
descrizione: Text;
constructor (id:number, nome:string, descrizione: Text) {
this.id= id;
this.nome= nome;
this.descrizione= descrizione;
}

}
type Patologia = {
nome: string;
descrizione?: string;
};
const Patologia1: Patologia = {
nome: "Tourette",
descrizione: "Disturbo neurologico che si manifesta con tic come grugniti, versi e movimenti ripetuti ed improvvisi",
};
console.log(Patologia1.nome); //Output: Tourette 
