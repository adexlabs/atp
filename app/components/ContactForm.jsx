import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Success! Your message has been sent.");
    } else {
      setStatus("Error submitting the form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form-content ">
         <div class="row">
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
      </div> <div class="row">
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="contact" placeholder="Contact Number" onChange={handleChange} required />
      </div>
      <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea>
      <button type="submit">Submit</button>
      {status && <p>{status}</p>}
    </form>
  );
}



