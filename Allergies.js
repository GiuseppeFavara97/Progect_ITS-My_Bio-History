var Allergies = /** @class */ (function () {
    function Allergies(id, id_patient, medical_records, allergen, reaction, severity, note, start_date, end_date) {
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
    return Allergies;
}());
var allergen = new Allergies(1, 1, 1, "peanuts", "swelling of the hands", "medium", "no note", new Date(2003, 10, 2003), new Date());
console.log(allergen);
allergen.allergen = "";
console.log(allergen);
