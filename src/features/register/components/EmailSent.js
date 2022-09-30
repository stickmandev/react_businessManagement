import React from 'react'
import './EmailSent.css';
import { NavLink } from "react-router-dom";

function EmailSent() {
  return (
    <div id='emailSent'>
      <div id='emailSentPic'></div>
      <p>We just sent a link to your Email, click on the link to</p>
      <p>verify your account and login.</p>
      <NavLink to="/login">
          <button>Ok</button>
      </NavLink>
    </div>
  )
}

export default EmailSent 