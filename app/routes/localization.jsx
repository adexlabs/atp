export async function action({ request }) {
    const formData = await request.formData();
    const country = formData.get("country");
  
    return new Response(null, {
      status: 302,
      headers: {
        "Set-Cookie": `shopify_country=${country}; Path=/; Max-Age=31536000`,
        Location: "/",
      },
    });
  }
  