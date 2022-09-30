import userVerification_api from "./api/userVerification_api"
import React, {useEffect, useState, useRef} from 'react'
// import { Link, useNavigate } from "react-router-dom";
import {useEffectOnce} from "../../../custom_Hooks/useEffectOnce"
import { NavLink } from "react-router-dom";
import './UserVerification.css';


function UserVerification() {
    const [verificationStatus, setVerificationStatus] = useState(
        <>
            
            {/* <p>loading....</p> */}
        </>
    );
    // let navigate = useNavigate();
    
    const success = (text)=> {
        console.log(text)
        setVerificationStatus(
            <>
                {/* <h2>Congratulations</h2>
                <p>start recording and have fun</p>
                <div></div>
                <NavLink to="/login">
                    <button></button>
                </NavLink> */}
            </>
        )
    };

    const fail = (text)=> {
        setVerificationStatus(
            <>
                <div id="SuccessCongratulationStatus">
                    <div></div>
                    <h2>Congratulations!</h2>
                    <p>Start recording and have fun</p>
                    <NavLink to="/login">
                        <button>Continue</button>
                    </NavLink>
                </div>

                {/* <p>{text}</p>
                <p>sorry, if your verification didnt go through please contact surport and try again</p> */}
            </>
        )
        console.log(text)
    }; 
    
    useEffectOnce(() => { 
        const code = window.location.href.slice(48)
        userVerification_api(code, success, fail)
    }, []); 

  return (  
    <section>
        <div id="userVerificationOverlay">
            {verificationStatus}
        </div> 
    </section>
  )
}

export default UserVerification