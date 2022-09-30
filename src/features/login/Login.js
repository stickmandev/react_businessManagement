import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import login_api from "./components/api/login_api"
import useAccess from "../auths/accessToken"
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
    await localStorage.setItem("refreshToken", text.refresh);
    setAccess(
      // {
        text.access,
      // }
    )
    navigate("/ledger");
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Loggin in with", email, password);
    login_api(email, password, success, (text)=>{setMessage(text)});
  };

  return (
        
    <section>
      <div id="loginOverlay">
        <div id="loginTitle">
          <h1>Login</h1>
        </div>

        <div id="loginForm_overlay">
          <form id="loginForm" onSubmit={formSubmit}>
              <div className="inputTextOverlay">
                <p>E-mail</p> 
                <input className="input_form" autoFocus type="text" id="email" placeholder="my_mail@mail.com" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
              </div>
              
              <div className="inputTextOverlay">
                <p>Password</p>
                <input className="input_form" type="password" id="password" placeholder="************" onChange={(e)=>{setPassword(e.target.value)}} value={password} />
              </div>
              
              
              <div style={{margin: "1em", color: "red"}}>{message}</div>

              <p>Forgot your password? <span>Click Here</span></p>
              
              <div id="submitBTN_overlay">
                <button id="submit" type="submit" value="Login" >LOG IN</button>
              </div>
              
          </form>

          <p>You don't have an account?</p>

          <Link to="/registration" id='registerBTN_Overlay'>
            <button id="registerBTN">REGISTER</button>
          </Link>
        </div>
        

        
      </div>
    </section>
  );
}
 
export default Login