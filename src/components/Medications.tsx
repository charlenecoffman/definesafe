import logo from '../logo.svg';
import '../App.css';
import { useContext, useEffect, useState } from 'react';
import { Medication } from '../defineSafeApi/ApiModels/Medication';
import { addMedicationForUser, getUserMedications, removeMedication } from '../defineSafeApi/ApiService/defineSafeApi';
import { AuthContext } from './Authentication';

export const Medications = () => {
    const [showLoading, setShowLoading] = useState(false);
    const token = useContext(AuthContext);
    const [newMedication, setNewMedication] = useState(new Medication())
    const [numericErrors, setNumericErrors] = useState([] as string[]);
    const [medications, setMedications] = useState([] as Medication[]);
    const [showAddNew, setShowAddNew] = useState(false);
  
    useEffect(() => {
        if(token)
        {
            setShowLoading(true);            
            getUserMedications(token)
                .then(response => {
                    setMedications(response);
                    setShowLoading(false);
                })
        }
    // eslint-disable-next-line
    }, [token]);
    
    const submitNewMedication = () => {
        setShowAddNew(false);
        addMedicationForUser(newMedication as Medication, token).then(response => {
            setNewMedication(new Medication());
            setMedications([...medications, response]);
        });
    }

    const deleteMedication = (medicationId: string) => {
        removeMedication(medicationId, token);
        setMedications(medications.filter(m => m.MedicationId !== medicationId));
    }

    const setNumeric = (value: string, inputId: string) => {
        var number = +value;
        if(isNaN(number)){
            setNumericErrors([...numericErrors, inputId]);
            return 0;
        }
        else{
            return number;
        }
    }
    
    return (
        <>
            {showLoading && (
                <img src={logo} className="App-logo" alt="logo" />
            )}      
            {!showLoading && (
                <>
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Delete?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medications.length > 0 && medications.map(medication => (
                                <tr key={medication.MedicationId}>
                                    <td>{medication.Name}</td>
                                    <td><span onClick={() => deleteMedication(medication.MedicationId!)}>-</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                    <div className="shadow-2xl" style={{padding:"4em"}}>
                        {!showAddNew && (<button onClick={() => setShowAddNew(true)}>Add new?</button>)}
                        {showAddNew && (              
                            <div className="token" style={{width: '50em'}}>
                                <div>
                                    <label htmlFor="name">Medication Name: </label>
                                    <input type='text' id='name' name='Name' placeholder='Medication Name' value={newMedication.Name} onChange={(event) => setNewMedication({...newMedication, Name: event.target.value} as Medication)}/>
                                    <br/>
                                    <label htmlFor="dosagequantity">Dosage: </label>
                                    <input type='text' id='dosagequantity' name='DosageQuantity' placeholder='10' value={newMedication.DosageQuantity} onChange={(event) => setNewMedication({...newMedication, DosageQuantity: setNumeric(event.target.value, event.target.id)} as Medication)}/>
                                </div>
                                <div><button onClick={submitNewMedication}>Save</button></div>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    )
}