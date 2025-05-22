var Patients = /** @class */ (function () {
    function Patients(id, id_main_patient, id_user, full_name, address, tax_code, relation_to_patient, deleted_at) {
        this.id = id;
        this.id_main_patient = id_main_patient;
        this.id_user = id_user;
        this.full_name = full_name;
        this.address = address;
        this.tax_code = tax_code;
        this.relation_to_patient = relation_to_patient;
        this.deleted_at = deleted_at;
    }
    return Patients;
}());
var nuovoPaziente = new Patients(1, 1, 1, "Mario Rossi", "Via Roma 1", "SSRMRO66B23L423J", "Padre", new Date());
console.log(nuovoPaziente);
