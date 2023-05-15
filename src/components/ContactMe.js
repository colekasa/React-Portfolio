import "../App.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
      <form ref={form} onSubmit={sendEmail} className=" topForm emailForm">
        <label className="emailInput">Name</label>
        <input type="text" name="user_name" />
        <label className="emailInput">Email</label>
        <input type="email" name="user_email" />
        <label className="emailInput">Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <a name="contactme"></a>
      <section className="contactme">
        <h2>Contact Me</h2>
        <div className="contacts">
          <p>Cole Kasabian</p>
          <p>559-905-8812</p>
          <p>ce.kasabian@gmail.com</p>
        </div>
      </section>
    </div>
  );
}
