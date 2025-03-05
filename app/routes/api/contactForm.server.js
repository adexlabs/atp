export async function api(request) {
    try {
      const body = await request.json();
  
      const klaviyoResponse = await fetch(
        "https://a.klaviyo.com/api/identify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: process.env.KLAVIYO_API_KEY, // Klaviyo API Key from .env
            properties: {
              $email: body.email,
              $first_name: body.firstName,
              $last_name: body.lastName,
              phone_number: body.contact,
              message: body.message,
            },
          }),
        }
      );
  
      const jsonResponse = await klaviyoResponse.json();
  
      return new Response(JSON.stringify({ message: "Form submitted successfully!", data: jsonResponse }), {
        headers: { "Content-Type": "application/json" },
      });
  
    } catch (error) {
      return new Response(JSON.stringify({ error: "Error submitting form" }), {
        headers: { "Content-Type": "application/json" },
        status: 500,
      });
    }
  }
  