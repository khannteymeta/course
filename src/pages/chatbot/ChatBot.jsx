import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ChatBot() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jznozas", // Replace with your EmailJS service ID
        "template_vr6d5aa", // Replace with your EmailJS template ID
        form.current,
        "oi-z0ngE0-RN2anzs" // Replace with your EmailJS public key (User ID)
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  console.log(form.current);
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" required />
      <label>Email</label>
      <input type="email" name="from_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input className="bg-blue-100" type="submit" value="Send" />
    </form>
  );
}
