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
    <section>
        <div id="registerOverlay">
            {RegStatus}
        </div>
    </section>
  );
}

export default Registration