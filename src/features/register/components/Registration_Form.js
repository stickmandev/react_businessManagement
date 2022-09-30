import { useState } from 'react';
import register_api from "./api/register_api"
import { Link } from "react-router-dom";

function RegistrationForm(Email_sent, Email_NotSent) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const success = async (text)=> {
    console.log("Yeah! Authenticated!");
    console.log(text);
    // await localStorage.setItem("userToken", text.access);
    // window.location = "/index/register/email_sent/";
    Email_sent.Email_sent()
  };

  const failed = async (text)=> {
    console.log(text);
    setMessage(text)
    // await localStorage.setItem("userToken", text.access);
    // window.location = "/index/register/email_sent/";
    Email_NotSent.Email_NotSent()
  };

  const tryRegister = async (e) => {
    e.preventDefault();
    if (ConfirmPassword === password & password !== ""){
        console.log("Register with", email, password, FirstName, LastName);
        await register_api(email, password, FirstName, LastName, success, failed);
    }else{
        alert("your passwords did not match or is empty, pls try again")
    }
    
  };
  

  return ( 
    <div id="regForm_overlay">
      <form id="regForm">
        <div className="inputTextOverlay">
          <p>First name</p> 
          <input className="input_form" autoFocus type="text" id="FirstName" placeholder="John" onChange={(e)=>{setFirstName(e.target.value)}} value={FirstName} />
        </div>
        
        <div className="inputTextOverlay">
        <p>Last name</p>
          <input className="input_form" type="text" id="LastName" placeholder="Robert" onChange={(e)=>{setLastName(e.target.value)}} value={LastName} />
        </div>
        
        <div className="inputTextOverlay">
        <p>E-mail</p>
          <input className="input_form" type="text" id="email" placeholder="my_mail@mail.com" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
        </div>
        
        <div className="inputTextOverlay">
        <p>Password</p>
          <input className="input_form" type="password" id="password" placeholder="************" onChange={(e)=>{setPassword(e.target.value)}} value={password} />
        </div>
        
        <div className="inputTextOverlay">
        <p>Confirm Password</p>
          <input className="input_form" type="password" id="confirm_password" placeholder="************" onChange={(e)=>{setConfirmPassword(e.target.value)}} value={ConfirmPassword} />
        </div>
        

        <div style={{margin: "1em", color: "red"}}>{message}</div>

        <div id="RegSubmitBTN_overlay">
                <button id="submit" type="submit" value="Register" onClick={tryRegister}>REGISTER</button>
        </div>
      </form>
      <p>Already have an account?</p>
        <Link to="/login" >
          <button id="loginBTN">login</button>
        </Link>
    </div>
    
  );
}

export default RegistrationForm