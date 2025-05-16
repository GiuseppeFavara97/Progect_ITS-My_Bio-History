import { timeStamp } from "console";

class Medical_Records {
    id:number;
    id_patient:number;
    create_ai:Date;
    deleted_at:Date;

    constructor(id:number, id_patient:number,create_ai:Date, deleted_at:Date) {
        this.id = id;
        this.id_patient = id_patient;
        this.create_ai = create_ai;
        this.deleted_at = deleted_at;
    }
    updateData(data: { id_patient?: number; create_ai?: Date; deleted_at?: Date }): void {
        if (data.id_patient !== undefined) this.id_patient = data.id_patient;
        if (data.create_ai !== undefined) this.create_ai = data.create_ai;
        if (data.deleted_at !== undefined) this.deleted_at = data.deleted_at;

    }

}

const record = new Medical_Records(1, 1, new Date(), new Date());
record.updateData({}); 









