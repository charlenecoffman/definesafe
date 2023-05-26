import axios from 'axios';
import { Plan, Medication, ServerMedication, FromServerModel, ToServerModel } from '../ApiModels';

export const getPlanForUser = async (token: string): Promise<Plan> => {
    if(token !== ""){
        const { data } = await axios.get(
            'https://umygo8d8f0.execute-api.us-east-1.amazonaws.com/v1/plan',
            {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + token
                },
            },
        );
        return (new Plan()).FromServerModel(data.Items[0])
    }

    return new Plan();
}

export const getUserMedications = async (token: string): Promise<Medication[]> => {    
    if(token !== ""){
        const { data } = await axios.get(
            'https://umygo8d8f0.execute-api.us-east-1.amazonaws.com/v1/medications',
            {               
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + token
                }
            },
        );
        return data.Items.map((med: ServerMedication) => FromServerModel(med));
    }
    return [] as Medication[];
}

export const addMedicationForUser = async (newMed: Medication, token: string): Promise<Medication> => {    
    if(token !== ""){
        const { data } = await axios.post(
            'https://umygo8d8f0.execute-api.us-east-1.amazonaws.com/v1/medication',
            JSON.stringify(ToServerModel(newMed)),
            {               
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + token
                }
            },
        );
        return FromServerModel(data.Item)
    }

    return new Medication();
}

export const removeMedication = async (medicationId: string, token: string): Promise<void> => {    
    if(token !== ""){
        await axios.delete(
            'https://umygo8d8f0.execute-api.us-east-1.amazonaws.com/v1/medication?medication_id=' + medicationId,
            {               
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + token
                }
            },
        );
    }
}