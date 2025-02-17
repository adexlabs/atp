import { useEffect } from "react";

export default function FormBuilder() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.shopify.com/extensions/f857f4b4-ed37-4c79-9176-61b82fb0b7d8/v3.4.23/assets/final.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script when component unmounts
    };
  }, []);

  return <div className="globo-formbuilder" data-id="NzY2NTU="></div>;
}
