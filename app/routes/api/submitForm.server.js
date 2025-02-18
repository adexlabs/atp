    export async function action({ request }) {
    const body = await request.json();
  
    // Powerful Form Builder API URL
    const formApiUrl = "https://atp-data-services.myshopify.com/apps/powerfulform";
    
    const response = await fetch(formApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "https://atp-data-services.myshopify.com/apps", // App's API Key
      },
      body: JSON.stringify(body),
    });
  
    if (response.ok) {
      return new Response(JSON.stringify({ message: "Form submitted successfully!" }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      return new Response("Error submitting form", { status: 500 });
    }
  }
  