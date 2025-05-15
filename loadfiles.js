var CaricaReferto = /** @class */ (function () {
    function CaricaReferto(file) {
        this.nome = file.name;
        this.dimensione = file.size;
        this.dataCaricamento = new Date();
    }
    CaricaReferto.prototype.mostraDettagli = function () {
        console.log("Referto: ".concat(this.nome, ", Dimensione: ").concat(this.dimensione, " bytes, Caricato il: ").concat(this.dataCaricamento.toLocaleString()));
    };
    return CaricaReferto;
}());
//esempio
var referto1 = new Referto(new File(["Risultati Analisi del Sangue"], "analisi_sangue.txt", { type: "text/plain" }));
var referto2 = new Referto(new File(["Esito Ecografia Addome"], "ecografia_addome.txt", { type: "text/plain" }));
console.log(referto1.mostraDettagli());
console.log(referto2.mostraDettagli());
// manca elimina , lista
//manca ancora la funzione del salvataggio file (es. usando import in fs ecc.) e il suo percorso da aggiungere in seguito
