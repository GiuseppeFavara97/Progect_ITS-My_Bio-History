// Importo il modulo inquirer per interagire con l'utente tramite la riga di comando
import inquirer from 'inquirer';

// Definizione della classe Care
class Care {

    // Proprietà della classe
    name: string;
    description: string;
    duration: number;
    dailyfrequency: number;

    // Costruttore per inizializzare un oggetto Care con i valori ricevuti
    constructor(name: string, description: string, duration: number, dailyfrequency: number) {
        this.name = name; // Assegna il nome
        this.description = description; // Assegna la descrizione
        this.duration = duration; // Assegna la durata
        this.dailyfrequency = dailyfrequency; // Assegna la frequenza giornaliera
    }

}

// Funzione principale che gestisce l'inserimento dei dati
function inserimento(): void {
    const arraydi: Care[] = []; // Creo un array vuoto di oggetti Care e inizializzo la variabile
    let a = 0; // Contatore per limitare il numero di inserimenti a 2

    // Funzione ricorsiva fino a 2 volte per chiedere i dati all'utente
    function chiedi() {
        if (a < 2) { // Condizione: finché non ho chiesto 2 volte
            inquirer.prompt([ // Avvio le domande all'utente
                { type: 'input', name: 'name', message: 'Inserisci il nome del trattamento' }, // Richiesta nome
                { type: 'input', name: 'descriz', message: 'Inserisci la descrizione' }, // Richiesta descrizione
                { type: 'input', name: 'duratio', message: 'Inserisci la durata' }, // Richiesta durata
                { type: 'input', name: 'daily', message: 'Inserisci la frequenza' } // Richiesta frequenza giornaliera
            ]).then((answers: { name: string; descriz: string; duratio: string; daily: string }) => { 
                // Una volta ricevute le risposte, creo un nuovo oggetto Care
                arraydi.push(
                    new Care(
                        answers.name, // Nome inserito
                        answers.descriz, // Descrizione inserita
                        Number(answers.duratio), // Durata convertita a numero
                        Number(answers.daily) // Frequenza convertita a numero
                    )
                );
                a++; // Incremento il contatore
                chiedi(); // Richiamo la funzione per il prossimo inserimento
            });
        } else { // Quando ho finito gli inserimenti
            console.log(arraydi); // Stampo l'intero array per controllo
            for (let i = 0; i < arraydi.length; i++) { // Itero su ogni elemento dell'array
                console.log(arraydi[i].name); // Stampo il nome del trattamento
                console.log(arraydi[i].description); // Stampo la descrizione
                console.log(arraydi[i].duration); // Stampo la durata
                console.log(arraydi[i].dailyfrequency); // Stampo la frequenza giornaliera
            }
        }
    }

    chiedi(); // Avvio la prima richiesta
}

// Chiamo la funzione per iniziare il programma
inserimento();
