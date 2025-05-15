 class CaricaReferto {
    nome: string;
    dimensione: number;
    dataCaricamento: Date;

    constructor(file: File) {
        this.nome = file.name;
        this.dimensione = file.size;
        this.dataCaricamento = new Date();
    }

    mostraDettagli(): void {
        console.log(`Referto: ${this.nome}, Dimensione: ${this.dimensione} bytes, Caricato il: ${this.dataCaricamento.toLocaleString()}`);
    }
}
//esempio

const referto1 = new Referto(new File(["Risultati Analisi del Sangue"], "analisi_sangue.txt", { type: "text/plain" }));
const referto2 = new Referto(new File(["Esito Ecografia Addome"], "ecografia_addome.txt", { type: "text/plain" }));

console.log(referto1.mostraDettagli());
console.log(referto2.mostraDettagli());



// manca elimina , lista

//manca ancora la funzione del salvataggio file (es. usando import in fs ecc.) e il suo percorso da aggiungere in seguito