export default function FormBuilder() {
    return (
      <iframe
        title="Form Builder"
        id="form-builder-iframe"
        src="https://atp-data-services.myshopify.com/preview_bar"
        sandbox="allow-same-origin allow-scripts"
        style={{
          display: "block",
          width: "100%",
          height: "600px", // Adjust height as needed
          border: "none",
        }}
      />
    );
  }
  