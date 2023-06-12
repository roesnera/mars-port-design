import { useState, useEffect } from 'react';
import './Contact.css';

export default function Contact() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [animation, setAnimation] = useState(0);

  useEffect(() => {
    setAnimation(1);
    console.log("projects animation set");
  }, [])

  const nameChange = (e) => {
    e.preventDefault();
    const newName = e.target.value;
    setFormName(newName);
  }

  const emailChange = (e) => {
    e.preventDefault();
    const newEmail = e.target.value;
    setFormEmail(newEmail);
  }

  const messageChange = (e) => {
    e.preventDefault();
    const newMessage = e.target.value;
    setFormMessage(newMessage);
  }



  // eslint-disable-next-line react/no-unknown-property
  return <section className='contact-section in-from-right' id="contact" animation={animation}>
    <h2 className='contact-header'>Send me a message</h2>
    <h4 className="contact-subheader">Have a question or proposal or just want to connect? Contact me here.</h4>
    <div className='contact-form'>
      {/* <div className="form-item form-name">
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" value={formName} onChange={nameChange} placeholder='Enter your name'/>
      </div>
      <div className="form-item form-email">
        <label htmlFor="email">Email Address</label>
        <input type="text" name="email" value={formEmail} onChange={emailChange} placeholder='Enter your email address'/>
      </div> */}
      <div className="form-item form-message">
        <label htmlFor="body">Your Message</label>
        <input type="text" name="text" value={formMessage} onChange={messageChange} placeholder='Hi, I think we need to work on the front end of our website . . .'/>
      </div>
      <a href={"mailto:aaroesner@gmail.com?body="+formMessage} className='form-button'>Email me!</a>
    </div>
  </section>;
}
