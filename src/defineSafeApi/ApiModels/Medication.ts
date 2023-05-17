export class Medication {
    UserId: string | undefined;
    MedicationId: string | undefined;
    Name: string | undefined;
    DosageQuantity: number | undefined;
    DosageUnit: string | undefined;
    TimesPer: number | undefined;
    TimesPerUnit: string | undefined;
    TimeTaken: Date | undefined;
    DateStarted: Date | undefined;
    IntendedUse: string | undefined;
    DateStopped: Date | undefined;
    ReasonForStop: string | undefined;

    constructor(){
        this.Name = "";
        this.DosageQuantity = 0;
        this.DosageUnit = "";
        this.TimesPer = 0;
        this.TimesPerUnit = "";
    }
}

export type ServerMedication = {
    User_Id: string,
    Medication_Id: string
    Medication_Name: string,
    Dosage_Quantity: number,
    Dosage_Unit: string,
    Times_Per: number,
    Times_Per_Unit: string,
    Time_Taken: string,
    Date_Started: string,
    Intended_Use: string,
    Date_Stopped: string,
    Reason_For_Stop: string
}

export function ToServerModel (medication: Medication) {
    return {
        User_Id: medication.UserId,
        Medication_Id: medication.MedicationId,
        Medication_Name: medication.Name,
        Dosage_Quantity: medication.DosageQuantity,
        Dosage_Unit: medication.DosageUnit,
        Times_Per: medication.TimesPer,
        Times_Per_Unit: medication.TimesPerUnit,
        Time_Taken: medication.TimeTaken?.toTimeString(),
        Date_Started: medication.DateStarted?.toDateString(),
        Intended_Use: medication.IntendedUse,
        Date_Stopped: medication.DateStopped?.toDateString(),
        Reason_For_Stop: medication.ReasonForStop
    } as ServerMedication;
}

export function FromServerModel(serverMed: ServerMedication) {
    return {
        UserId: serverMed.User_Id,
        MedicationId: serverMed.Medication_Id,
        Name: serverMed.Medication_Name,
        DosageQuantity: serverMed.Dosage_Quantity,
        DosageUnit: serverMed.Dosage_Unit,
        TimesPer: serverMed.Times_Per,
        TimesPerUnit: serverMed.Times_Per_Unit,
        TimeTaken: new Date(serverMed.Time_Taken),
        DateStarted: new Date(serverMed.Date_Started),
        IntendedUse: serverMed.Intended_Use,
        DateStopped: new Date(serverMed.Date_Stopped),
        ReasonForStop: serverMed.Reason_For_Stop
    } as Medication
}