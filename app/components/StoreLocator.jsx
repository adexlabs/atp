import { useState } from "react";

export default function StoreLocator() {
  const [location, setLocation] = useState(null);
  const API_KEY = "AIzaSyBdWYbcKRkNZSnnlpVxXpv45fu0F8B2MVI"; // 🔥 Replace this with your API key

  async function fetchLocation() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/geolocation/v1/geolocate?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            considerIp: true, // Use IP-based geolocation
          }),
        }
      );

      const data = await response.json();
      setLocation(data.location);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  }

  return (
    <div>
      <h2>Google Geolocation API</h2>
      <button onClick={fetchLocation}>Get Location</button>
      {location && (
        <p>
          <strong>Latitude:</strong> {location.lat}, <strong>Longitude:</strong>{" "}
          {location.lng}
        </p>
      )}
    </div>
  );
}
