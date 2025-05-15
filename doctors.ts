class Doctor extends User {
    specializzazione: string;
    numLicenza: string;

    constructor(nome: string, cognome: string, province: string, email: string, specializzazione: string, numLicenza: string) {
        super(nome, cognome, province, email);
        this.specializzazione = specializzazione;
        this.numLicenza = numLicenza;
    }

    mostraDettagliDoctor(): void {
        console.log(`Dr. ${this.nome} ${this.cognome}, Specializzazione: ${this.specializzazione}, Numero Licenza: ${this.numLicenza}`);
    }
}
const medico1 = new Doctor("Giulia", "Verdi", "Palermo", "giulia.verdi@email.com", "Cardiologia", "DOC12345");

medico1.mostraDettagli(); // Mostra i dati generali ereditati da User
medico1.mostraDettagliDoctor(); // Mostra i dati specifici del medico
