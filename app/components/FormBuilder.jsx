import { useState, useEffect } from "react";

export default function FormBuilder() {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await fetch("https://app.powerfulform.com//api/front/form/76655/send");
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching form data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFormData();
  }, []);

  if (loading) return <div>Loading form...</div>;

  return (
    <div className="form-builder">
      <h2>{formData?.title}</h2>
      <form>
        {formData?.fields.map((field) => (
          <div key={field.id}>
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              required={field.required}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
