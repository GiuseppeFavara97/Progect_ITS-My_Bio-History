class Patients {
    id: number;
    id_main_patient:number;
    id_user:number;
    full_name:string;
    address:string;
    tax_code:string;
    relation_to_patient:string;
    deleted_at:Date;

    constructor(id:number,id_main_patient:number,id_user:number,full_name:string,address:string,tax_code:string,relation_to_patient:string,deleted_at:Date) {
        this.id = id;
        this.id_main_patient = id_main_patient;
        this.id_user = id_user;
        this.full_name = full_name;
        this.address = address;
        this.tax_code = tax_code;
        this.relation_to_patient = relation_to_patient;
        this.deleted_at = deleted_at;
    }
}

const nuovoPaziente = new Patients(1, 1, 1, "Mario Rossi", "Via Roma 1", "SSRMRO66B23L423J", "Padre", new Date());
console.log(nuovoPaziente);