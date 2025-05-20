// implemento nella classe "carica file/referto" i metodi di gestione:
// aggiungi referto, cerca, visualizza,lista, cancella.
var CaricaReferto = /** @class */ (function () {
    function CaricaReferto(file) {
        this.nome = file.name;
        this.dimensione = file.size;
        this.dataCaricamento = new Date();
        this.stato = "attivo"; // Di default il referto è attivo
    }
    CaricaReferto.prototype.mostraDettagli = function () {
        console.log("Referto: ".concat(this.nome, ", Dimensione: ").concat(this.dimensione, " bytes, Caricato il: ").concat(this.dataCaricamento.toLocaleString()));
    };
    return CaricaReferto;
}());
// Creazione dei referti usando la classe corretta
var referto1 = new CaricaReferto(new File(["Risultati Analisi del Sangue"], "analisi_sangue.txt", { type: "text/plain" }));
var referto2 = new CaricaReferto(new File(["Esito Ecografia Addome"], "ecografia_addome.txt", { type: "text/plain" }));
console.log(referto1.mostraDettagli());
console.log(referto2.mostraDettagli());
// Classe per gestire i referti
var GestoreReferti = /** @class */ (function () {
    function GestoreReferti() {
        this.referti = [];
    }
    // Aggiungere un nuovo referto
    GestoreReferti.prototype.aggiungiReferto = function (file) {
        var nuovoReferto = new CaricaReferto(file);
        this.referti.push(nuovoReferto);
        console.log("Referto \"".concat(nuovoReferto.nome, "\" aggiunto con successo!"));
    };
    // Cancellare un referto cambiando lo status
    GestoreReferti.prototype.cancellaReferto = function (nomeFile) {
        var referto = this.referti.find(function (r) { return r.nome === nomeFile; });
        if (referto && referto.stato === "attivo") {
            referto.stato = "cancellato";
            console.log("Referto \"".concat(nomeFile, "\" \u00E8 stato cancellato."));
        }
        else {
            console.log("Referto \"".concat(nomeFile, "\" non trovato o gi\u00E0 cancellato."));
        }
    };
    // Mostra la lista dei referti
    GestoreReferti.prototype.listaReferti = function () {
        console.log("Lista Referti:", this.referti.length ? this.referti : "Nessun referto caricato.");
    };
    return GestoreReferti;
}());
// Esempio di utilizzo con oggetti `File`
var gestore = new GestoreReferti();
gestore.aggiungiReferto(new File(["Risultati Analisi del Sangue"], "analisi_sangue.txt", { type: "text/plain" }));
gestore.aggiungiReferto(new File(["Esito Ecografia Addome"], "ecografia_addome.txt", { type: "text/plain" }));
gestore.listaReferti();
gestore.cancellaReferto("analisi_sangue.txt"); // Rimuove "analisi_sangue.txt"
gestore.listaReferti();
