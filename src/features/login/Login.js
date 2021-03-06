import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import login_api from "./components/api/login_api"
import useAccess from "../accessToken"
// import useRefresh from "../refreshToken"
import './Login.css'

function Login() {
  const {access, setAccess} = useAccess('')
  // const [refresh, setRefresh] = useRefresh
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // setAccess.access()
  let navigate = useNavigate();

  useEffect(
    () => {
      
    },[]
  )

  const success = async (text)=> {
    console.log("You are logged in!");
    // await localStorage.setItem("refreshToken", text.refresh);

    setAccess(
      {
        access:text.access,
      }
    )
    navigate("/ledger");
  };
  console.log(access) 

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Loggin in with", email, password);
    login_api(email, password, success, (text)=>{setMessage(text)});
  };

  return (
        
    <section>
      <div id="loginOverlay">
        <div id="regTitle">
          <h1>Registration</h1>
        </div>

        <div id="loginForm_overlay">
          <form id="loginForm" onSubmit={formSubmit}>
              E-mail<br/>
              <input className="input_form" autoFocus type="text" id="email" placeholder="my_mail@mail.com" onChange={(e)=>{setEmail(e.target.value)}} value={email} /><br/><br/><br/>

              Password<br/>
              <input className="input_form" type="password" id="password" placeholder="************" onChange={(e)=>{setPassword(e.target.value)}} value={password} /><br/><br/>
              
              <div style={{margin: "1em", color: "red"}}>{message}</div>

              <p>Forgot password? Click Here</p><br/>
              
              <div id="submitBTN_overlay">
                <button id="submit" type="submit" value="Login" >Login</button>
              </div>
              
          </form><br/><br/><br/>

          <p>don't have an account?</p>

          <Link to="/registration" id='registerBTN_Overlay'>
            <button id="registerBTN">register</button>
          </Link>
        </div>
        

        
      </div>
    </section>
  );
}
 
export default Login