import { useEffect, useState } from "react";

export default function FormBuilderAPI() {
  const [formHtml, setFormHtml] = useState("");

  useEffect(() => {
    fetch("https://app.powerfulform.com/api/front/form/76655/send")
      .then((res) => res.text()) // Get HTML response
      .then((html) => setFormHtml(html)) // Set it as state
      .catch((err) => console.error("Error fetching form:", err));
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: formHtml }} />
  );
}
