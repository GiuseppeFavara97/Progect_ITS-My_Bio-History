var Patologie = /** @class */ (function () {
    function Patologie(id, nome, descrizione) {
        this.id = id;
        this.nome = nome;
        this.descrizione = descrizione;
    }
    return Patologie;
}());
var Patologia1 = {
    nome: "Tourette",
    descrizione: "Disturbo neurologico che si manifesta con tic come grugniti, versi e movimenti ripetuti ed improvvisi",
};
console.log(Patologia1.nome); //Output: Tourette 
