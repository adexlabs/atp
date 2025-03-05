import ContactForm from "../components/ContactForm";
import { sendToKlaviyo } from "../components/KlaviyoAPI";

export default function ContactPage() {
  const handleFormSubmit = async (formData) => {
    const response = await sendToKlaviyo(formData);
    alert(response.message || "Form submitted successfully!");
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm onSubmit={handleFormSubmit} />
    </div>
  );
}
