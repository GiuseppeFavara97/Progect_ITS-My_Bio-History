import inquirer from "inquirer";
import chalk from "chalk";

class Diagnosis {
    date: Date;
    description:string ;

    constructor(date: Date, description: string) {
        this.date = date;
        this.description = description;

    }


    static diagnoses: Diagnosis[] = []; // Creo e inizializzo un array vuoto di oggetti Diagnosis
    static async acquisizione(): Promise<void> {
    
            const risp = await inquirer.prompt([
            { type: 'input', name: 'date', message: 'Inserisci la data della diagnosi (ANNO-MESE-GIORNO)' },
            { type: 'input', name: 'description', message: 'Inserisci la descrizione della diagnosi'},
            ]) // <-- parentesi aggiunta qui
            const date = new Date(risp.date);           
                if (isNaN(date.getTime()))       {
                    console.error('Data non valida usa il formato ANNO-MESE-GIORNO');
                    Diagnosis.acquisizione();
                    return;
                }
                const risultato = new Diagnosis(date, risp.description);
                Diagnosis.diagnoses.push(risultato);
                console.log(`La diagnosi Passata dalla classe è -> Data:${risultato.date} Descrizione: ${risultato.description} `);
                
                console.log(chalk.green("Diagnosi acquisita con successo!"));
    
    }
    static visualizza(): void {
        Diagnosis.diagnoses.forEach((diagnosi) => {
            console.log(`Data: ${diagnosi.date} Descrizione: ${diagnosi.description}`);
        });
    }
    static async modifica(): Promise<void> {
        if (Diagnosis.diagnoses.length === 0) {
            console.log(chalk.red("Nessuna diagnosi trovata"));
            return;
        }
        // work in progress
    }



    static async cancellazione(): Promise<void> {
        if (Diagnosis.diagnoses.length === 0) {
            console.log(chalk.red("Nessuna diagnosi trovata"));
            return;
        }
        const scelte: {name:string , value: number}[] = [];
        for (let i=0; i < Diagnosis.diagnoses.length; i++) {
            const diagnosi = Diagnosis.diagnoses[i];
            scelte.push({
                name: `${diagnosi.date} - ${diagnosi.description}`,
                value: i
            });
        }
        const risposta = await inquirer.prompt ([
            {
                type: 'list',
                name: 'sceltediagnosi',
                message: 'seleziona la diagnosi da cancellare',
                choices: scelte
            }
        ]);
        const elementodaeliminare = risposta.sceltediagnosi;
        const diagnosieliminata = Diagnosis.diagnoses[elementodaeliminare];

        const newarray : Diagnosis[] = [];
        for (let i = 0; i < Diagnosis.diagnoses.length; i++) {
            if (i !== elementodaeliminare) {
                newarray.push(Diagnosis.diagnoses[i]);
            }
        }
            Diagnosis.diagnoses = newarray;
        console.log(chalk.red(`Diagnosi eliminata: ${diagnosieliminata.date} - ${diagnosieliminata.description}`));
        
    }
    
}
console.log(" Scegli un opzione: "); 
async function acqui() {
const risposta = await inquirer.prompt([
   { type: 'list', name: 'scelta', message: 'Vuoi acquisire una nuova diagnosi?', choices: [
   { name: 'Inserimento', value: 'create' },
   { name: 'Visualizza', value: 'read' },
   { name: 'Modifica', value: 'update' },
   { name: 'Cancellazione', value: 'delete' },
   { name: 'Esci', value: 'esci' }
   ] 
    }
 ]);
    switch (risposta.scelta) {
        case 'create':
            await Diagnosis.acquisizione();
            break;
        case 'read':
            await Diagnosis.visualizza();
            break;
        case 'update':
            // await Diagnosis.modifica(); in corso di implementazione
            console.log(" in corso")
            break;    
        case 'delete':
            await Diagnosis.cancellazione();
            return;
        case 'esci':
            console
            return;
        default:
            console.log("Opzione non valida");
            break;
    }
    await acqui();
}
acqui();