import './Contact.css'
import React, { useState } from "react";
import { GoMarkGithub } from "react-icons/go";
import {BsLinkedin} from "react-icons/bs"
import {SiCodewars} from "react-icons/si"
import Animate from "../../Animate";
const FORM_ENDPOINT = "https://public.herotofu.com/v1/5df62dd0-3e94-11ed-a10f-d1a38bd15d37"; 

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <Animate>
      <>
      
      <div className="completeContainer">
        <div className="complete">
            <p>Form submitted.</p>
            Thanks for your email!
            </div>
        </div>
      </>
      </Animate>
    );
  }

  return (
    <Animate>
    <main className="contact">
       <h1>CONTACT</h1>
    <form className = "contactForm"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    > 
      <div>
        <input id="name"
          type="text"
          placeholder="Your name"
          name="name"
          required
        />
      </div>
      <div >
        <input id="email"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
      </div>
      <div>
        <textarea id="input"
          placeholder="Your message"
          name="message"
          required
        />
      </div>
      <div>
        <button id="submitButton"
          type="submit"
        >
          Send message
        </button>
      </div>
    </form>
  
    </main>
    </Animate>
  );
};


    export default Contact;