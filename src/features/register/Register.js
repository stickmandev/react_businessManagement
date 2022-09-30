import { useState } from 'react';
import RegistrationForm from "./components/Registration_Form"
import EmailSent from "./components/EmailSent"
import './Register.css';

function Registration() {
  const Email_sent = () => {
    setRegStatus(<EmailSent />)
  }
  
  const [RegStatus, setRegStatus] = useState(
    <>
      <div id="regTitle">
        <h1>Registration</h1>
      </div>

      <RegistrationForm Email_sent={Email_sent} />
    </>
  );
  

  return (
    <section id='registerSection'>
        <div id="registerOverlay_scroll">
          <div id="registerOverlay">
            {RegStatus}
            {/* <EmailSent/> */}
          </div>
        </div>
    </section>
  );
}

export default Registration 