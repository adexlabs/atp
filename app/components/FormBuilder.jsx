import { useEffect } from "react";

export default function FormBuilder() {
  useEffect(() => {
    // Load the script for the form builder dynamically
    const script = document.createElement("script");
    script.src = "https://atp-data-services.myshopify.com/apps/powerfulform"; // Replace with actual script URL
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
