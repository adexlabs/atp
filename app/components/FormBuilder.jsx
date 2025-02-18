import { useEffect } from "react";

export default function FormBuilder() {
  useEffect(() => {
    // Dynamically load the script needed to render the form
    const script = document.createElement("script");
    script.src = "https://globo-formbuilder.js"; // Replace with actual script URL
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Embed the Powerful Form Builder's predefined structure */}
      <div className="globo-formbuilder" data-id="NzY2NTU="></div>
    </div>
  );
}
