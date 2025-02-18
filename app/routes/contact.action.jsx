export async function action({ request }) {
  const body = await request.json();

  // Shopify App Proxy URL for form submission
  const formApiUrl = "hhttps://atp-data-services.myshopify.com/apps/powerfulform"; // Replace with your actual store URL

  const response = await fetch(formApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
