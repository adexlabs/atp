export async function action({ request }) {

    if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
      }

      
    const klaviyoAPIKey = "VrNmeH"; // Replace with your private API key
    const klaviyoListId = "VjKkMa"; // Replace with your List ID
  
    const url = `https://a.klaviyo.com/api/v2/list/${VjKkMa}/subscribe?api_key=${VrNmeH}`;
    const body = await request.json();
  
    const payload = {
      profiles: [
        {
          email: body.email,
          first_name: body.firstName,
          last_name: body.lastName,
          phone_number: body.contact,
          custom_properties: {
            message: body.message,
          },
        },
      ],
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        return new Response("Klaviyo API Error", { status: response.status });
      }
  
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
      return new Response("Internal Server Error", { status: 500 });
    }
  }
  