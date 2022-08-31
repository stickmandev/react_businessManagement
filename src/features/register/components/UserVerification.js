import userVerification_api from "./api/userVerification_api"
import React, {useEffect, useState, useRef} from 'react'
// import { Link, useNavigate } from "react-router-dom";
import {useEffectOnce} from "../../../custom_Hooks/useEffectOnce"


function UserVerification() {
    const [verificationStatus, setVerificationStatus] = useState(
        <>
            failed to verify
        </>
    );
    // let navigate = useNavigate();
    
    const success = (text)=> {
        setVerificationStatus(
            <>
                {text}
            </>
        )
    };

    const fail = (text)=> {
        console.log(text)
    }; 
    
    useEffectOnce(() => { 
        const code = window.location.href.slice(48)
        userVerification_api(code, success, fail)
    }, []); 

  return (
    <h1>{verificationStatus}</h1>
  )
}

export default UserVerification