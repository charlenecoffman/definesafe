import { useAuth0 } from "@auth0/auth0-react";
import { useState, useContext, useEffect } from "react";
import { getPlanForUser } from "../defineSafeApi";
import { AuthContext } from "./Authentication";
import { Label } from "./shared/Label";
import { Plan } from '../defineSafeApi/ApiModels/Plan';
import logo from '../logo.svg';

export const PlanContainer = () => {
    const { user } = useAuth0();
    const [showLoading, setShowLoading] = useState(false);
    const [userPlan, setUserPlan] = useState<Plan | undefined>();
    const token = useContext(AuthContext);
  
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
        }
    // eslint-disable-next-line
    }, [user, token]);
    
    return (
        <>
            {showLoading && (
                <img src={logo} className="App-logo" alt="logo" />
            )}
      
            {!showLoading && (
                <>
                    {user && (              
                        <div className="token" style={{width: '50em', textAlign: 'left'}}>
                            {userPlan && (
                                <>
                                    <div><Label labelText="User's Plan Id:" />{userPlan.PlanId}</div>
                                    <div><Label labelText="User's Id:" />{userPlan.UserId}</div>
                                    <div><Label labelText="Triggers:" />{userPlan.Triggers}</div>
                                    <div><Label labelText="Coping Skills:" />{userPlan.CopingSkills}</div>
                                </>
                            )}
                            
                        </div>
                    )}
                </>
            )}
        </>
    )
}