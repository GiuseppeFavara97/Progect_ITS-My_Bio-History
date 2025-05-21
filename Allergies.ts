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
}

// Oggetto di esempio
let allergen = new Allergies(
  1,
  1,
  1,
  'peanuts',
  'swelling of the hands',
  'medium',
  'no note',
  new Date(2003, 10, 1), // Mese 10 = novembre
  new Date()
);

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'action',
      message: "Vuoi 'visualizzare' o 'eliminare' l'allergene?",
      choices: ['visualizzare', 'eliminare']
    }
  ]);

  if (answers.action.includes('visualizzare')) {
    console.log('Allergia:', allergen);
    console.log(answers.azione);
  }

  if (answers.action.includes('eliminare')) {
    allergen.allergen = '';
    console.log('Allergene eliminato');
  }
}

main();
