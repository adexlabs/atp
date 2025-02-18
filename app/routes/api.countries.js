export async function loader() {
    return new Response(
      JSON.stringify([
        { code: "US", name: "United States", currency: "USD $" },
        { code: "IN", name: "India", currency: "INR ₹" },
        { code: "CA", name: "Canada", currency: "CAD $" },
        { code: "FR", name: "France", currency: "EUR €" },
      ]),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  