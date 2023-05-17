import "../App.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Resume from "../Assets/resume-cole.docx";

export default function ContactMe() {
  const form = useRef();
  const [validForm, setValidForm] = useState(true);
  const handleBlur = (e) => {
    const { user_name, user_email, message } = form.current;
    if (e.target.name == "user_name" && !user_name.value) {
      setValidForm(false);
    } else if (e.target.name == "user_email" && !user_email.value) {
      setValidForm(false);
    } else if (e.target.name == "message" && !message.value) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { user_name, user_email, message } = form.current;
    if (!user_name.value || !user_email.value || !message.value) {
      setValidForm(false);
      return;
    }
    console.log(user_name.value);
    // Reset the form validity
    setValidForm(true);

    emailjs
      .sendForm(
        "service_6eshcrx",
        "template_k1m9919",
        form.current,
        "RDwTRpWhjT9QDL5xh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className=" topForm emailForm">
        <label className="emailInput">Name</label>
        <input onBlur={handleBlur} type="text" name="user_name" />
        <label className="emailInput">Email</label>
        <input onBlur={handleBlur} type="email" name="user_email" />
        <label className="emailInput">Message</label>
        <textarea onBlur={handleBlur} name="message" />
        {!validForm && (
          <p className="requiredFields">Please fill in the required fields.</p>
        )}
        {validForm && <p>nothing appears</p>}
        <input type="submit" value="Send" />
      </form>
      <a name="contactme"></a>
      <div className="contacts">
        <p>Cole Kasabian</p>
        <p>559-905-8812</p>
        <p>ce.kasabian@gmail.com</p>
      </div>
      <div>
        <form method="get" action={Resume}>
          <button type="submit" className="resumeBtn">
            Resume
          </button>
        </form>
      </div>
    </div>
  );
}
