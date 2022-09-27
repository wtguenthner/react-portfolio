import './Contact.css'
import React, { useState } from "react";

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
      <>
      
      <div className="completeContainer">
        <div className="complete">
            <p>Form submitted.</p>
            Thanks for your email!
            </div>
        </div>
      </>
    );
  }

  return (
    <main className="contact">
       
    <form className = "contactForm"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    > <h1>Contact Taylor</h1>
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
  );
};
// const Contact= () =>
//     <main className='contact'>
//         <div className="contactForm">
//         <p>This is filling space.  It should be replace later on.  This is filling space.  It should be replace later on.  This is filling space.  It should be replace later on.  This is filling space.  It should be replace later on.  This is filling space.  It should be replace later on.  </p>
//         <p>This is filling space.  It should be replace later on.  This is filling space.  It should be replace later on.  This is filling space.  It should be replace later on.  This is filling space.  It should be replace later on.  This is filling space.  It should be replace later on.  </p>
//         </div>
//     </main>

    export default Contact;