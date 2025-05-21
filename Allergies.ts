import inquirer from 'inquirer';

class Allergies {
  id: number;
  medical_records: number;
  id_patient: number;
  allergen: string;
  reaction: string;
  severity: string;
  note: string;
  start_date: Date;
  end_date: Date;

  constructor(
    id: number,
    id_patient: number,
    medical_records: number,
    allergen: string,
    reaction: string,
    severity: string,
    note: string,
    start_date: Date,
    end_date: Date
  ) {
    this.id = id;
    this.id_patient = id_patient;
    this.medical_records = medical_records;
    this.allergen = allergen;
    this.reaction = reaction;
    this.severity = severity;
    this.note = note;
    this.start_date = start_date;
    this.end_date = end_date;
  }

  // ✅ Metodo statico per creare un'istanza da terminale
  static async acquisisciDaTerminale(): Promise<Allergies> {
    const inputData = await inquirer.prompt([
      {
        type: 'input',
        name: 'allergen',
        message: "Inserisci l'allergene"
      },
      {
        type: 'input',
        name: 'reaction',
        message: 'Inserisci il grado di reazione'
      },
      {
        type: 'input',
        name: 'severity',
        message: 'Inserisci la gravità'
      },
      {
        type: 'input',
        name: 'note',
        message: 'Inserisci note'
      },
      {
        type: 'input',
        name: 'start_date',
        message: 'Inserisci la data di inizio (YYYY-MM-DD)'
      },
      {
        type: 'input',
        name: 'end_date',
        message: 'Inserisci la data di fine (YYYY-MM-DD)'
      }
    ]);

    return new Allergies(
      2,
      1,
      1,
      inputData.allergen,
      inputData.reaction,
      inputData.severity,
      inputData.note,
      new Date(inputData.start_date),
      new Date(inputData.end_date)
    );
  }
}

// Oggetto di esempio iniziale
let allergen = new Allergies(
  1,
  1,
  1,
  'peanuts',
  'swelling of the hands',
  'medium',
  'no note',
  new Date(2003, 10, 1),
  new Date()
);

async function main() {
  let running = true;
  while (running) {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: "Cosa vuoi fare?",
        choices: ['visualizzare', 'eliminare', 'aggiungi', 'esci']
      }
      
    ]);

    switch (answers.action) {
      case 'visualizzare':
        console.log('Allergia:', allergen);
        break;
      case 'eliminare':
        allergen.allergen = '';
        console.log('Allergene eliminato');
        break;
      case 'aggiungi':
        allergen = await Allergies.acquisisciDaTerminale();
        console.log('Nuovo allergene aggiunto:');
        console.log(allergen);
        break;
      case 'esci':
        running = false;
        console.log('Uscita dal programma.');
        break;
      default:
        console.log('Azione non riconosciuta.');
    }
  }
}
main();
