 // implemento nella classe "carica file/referto" i metodi di gestione:
 // aggiungi referto, cerca, visualizza,lista, cancella.
 
 class CaricaReferto {
    nome: string;
    dimensione: number;
    dataCaricamento: Date;
    stato: "attivo" | "cancellato"; // aggiungo Stato del referto per una cancellazione soft

    constructor(file: File) {
        this.nome = file.name;
        this.dimensione = file.size;
        this.dataCaricamento = new Date();
        this.stato = "attivo"; // Di default il referto è attivo
    }

    mostraDettagli(): void {
        console.log(`Referto: ${this.nome}, Dimensione: ${this.dimensione} bytes, Caricato il: ${this.dataCaricamento.toLocaleString()}`);
    }
}

// Creazione dei referti usando la classe corretta
const referto1 = new CaricaReferto(new File(["Risultati Analisi del Sangue"], "analisi_sangue.txt", { type: "text/plain" }));
const referto2 = new CaricaReferto(new File(["Esito Ecografia Addome"], "ecografia_addome.txt", { type: "text/plain" }));

console.log(referto1.mostraDettagli());
console.log(referto2.mostraDettagli());

// Classe per gestire i referti
class GestoreReferti {
    private referti: CaricaReferto[] = [];

    // Aggiungere un nuovo referto
    aggiungiReferto(file: File): void {
        const nuovoReferto = new CaricaReferto(file);
        this.referti.push(nuovoReferto);
        console.log(`Referto "${nuovoReferto.nome}" aggiunto con successo!`);
    }

    // Cancellare un referto cambiando lo status
    cancellaReferto(nomeFile: string): void {
        const referto = this.referti.find(r => r.nome === nomeFile); 
        if (referto && referto.stato === "attivo") {
            referto.stato = "cancellato";
            console.log(`Referto "${nomeFile}" è stato cancellato.`);
        } else {
            console.log(`Referto "${nomeFile}" non trovato o già cancellato.`);
        }
    }

    // Mostra la lista dei referti
    listaReferti(): void {
        console.log("Lista Referti:", this.referti.length ? this.referti : "Nessun referto caricato.");
    }
}

// Esempio di utilizzo con oggetti `File`
const gestore = new GestoreReferti();
gestore.aggiungiReferto(new File(["Risultati Analisi del Sangue"], "analisi_sangue.txt", { type: "text/plain" }));
gestore.aggiungiReferto(new File(["Esito Ecografia Addome"], "ecografia_addome.txt", { type: "text/plain" }));

gestore.listaReferti();
gestore.cancellaReferto("analisi_sangue.txt"); // Rimuove "analisi_sangue.txt"
gestore.listaReferti();
