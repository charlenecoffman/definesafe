import logo from '../logo.svg';
import '../App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect, useState } from 'react';
import { Plan } from '../defineSafeApi/ApiModels/Plan'
import { getPlanForUser } from '../defineSafeApi';
import { AuthContext } from './Authentication';
import { Medication } from '../defineSafeApi/ApiModels/Medication';
import { addMedicationForUser, getUserMedications } from '../defineSafeApi/ApiService/defineSafeApi';

export const UserProfile = () => {
    const { user } = useAuth0();
    const [showLoading, setShowLoading] = useState(false);
    const [userPlan, setUserPlan] = useState<Plan | undefined>();
    const token = useContext(AuthContext);
    const [medication, setMedication] = useState(new Medication())
    const [numericErrors, setNumericErrors] = useState([] as string[]);
    const [medications, setMedications] = useState([] as Medication[]);
  
    useEffect(() => {
        if(user)
        {
            setShowLoading(true);
            getPlanForUser(token)
                .then(response => {
                    setUserPlan(response); 
                    setShowLoading(false);
                })
                .catch(error => {
                    console.log(error)
                });
            getUserMedications(token)
                .then(response => {
                    setMedications(response);
                })
        }
    // eslint-disable-next-line
    }, [user, token]);
    
    const submitNewMedication = () => {
        addMedicationForUser(medication as Medication, token).then(response => setMedication(response));
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
                    {user && (              
                        <div className="token" style={{width: '50em'}}>
                            {userPlan && (
                                <>
                                    <div>{userPlan.PlanId}</div>
                                    <div>{userPlan.UserId}</div>
                                    <div>{userPlan.Triggers}</div>
                                    <div>{userPlan.CopingSkills}</div>
                                </>
                            )}
                            <div>
                                <label htmlFor="name">Medication Name: </label>
                                <input type='text' id='name' name='Name' placeholder='Medication Name' value={medication.Name} onChange={(event) => setMedication({...medication, Name: event.target.value} as Medication)}/>
                                <br/>
                                <label htmlFor="dosagequantity">Dosage: </label>
                                <input type='text' id='dosagequantity' name='DosageQuantity' placeholder='10' value={medication.DosageQuantity} onChange={(event) => setMedication({...medication, DosageQuantity: setNumeric(event.target.value, event.target.id)} as Medication)}/>
                            </div>
                            <div><button onClick={submitNewMedication}>Save</button></div>
                        </div>
                    )}
                    {medications.length > 0 && medications.map(medication => (<div>{medication.Name}</div>))}
                </>
            )}
        </>
    )
}