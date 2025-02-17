// app/components/FormBuilder.jsx
import { useEffect } from "react";

export default function FormBuilder() {
  useEffect(() => {
    // Dynamically load the script needed to initialize the form
    const script = document.createElement("script");
    script.src = "https://app.powerfulform.com/api/front/form/76655/send"; // Replace with the correct script URL if needed
    script.async = true;

    // Append the script to the body of the document
    document.body.appendChild(script);

    // Cleanup when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="form-builder-container">
      <h2>Contact Us</h2>
      <div className="globo-formbuilder" data-id="NzY2NTU="></div> {/* Embed the form using the provided div */}
    </div>
  );
}
