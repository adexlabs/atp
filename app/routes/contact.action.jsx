export async function action({ request }) {
    const body = await request.json();
  
    // Shopify App Proxy URL
    const formApiUrl = "https://atp-data-services.myshopify.com/apps/powerfulform";
  
    const response = await fetch(formApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  
    if (response.ok) {
      return new Response(
        JSON.stringify({ message: "Form submitted successfully!" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response("Error submitting form", { status: 500 });
    }
  }
  