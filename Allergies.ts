class Allergies {
    id:number;
    medical_records:number;
    id_patient:number;
    allergen:string;
    reaction;string;
    severity:string;
    note:string;
    start_date:Date;
    end_date:Date;
    

    constructor (id:number,id_patient:number, medical_records:number, allergen:string,reaction:string,severity:string,note:string,start_date:Date,end_date:Date) {
        this.id=id;
        this.id_patient=id_patient;
        this.medical_records=medical_records;
        this.allergen=allergen;
        this.reaction=reaction;
        this.severity=severity;
        this.note=note;
        this.start_date=start_date;
        this.end_date=end_date;
        
}
}
let allergen = new Allergies(1, 1, 1, "peanuts", "swelling of the hands", "medium", "no note", new Date(2003,10,2003), new Date());
console.log(allergen);

allergen.allergen = "";
console.log(allergen);













        
