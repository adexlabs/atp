import React, { useEffect, useState } from "react";

export default function StoreMap (){
  const [mapLoaded, setMapLoaded] = useState(false);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; // API Key from .env file

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google) {
        initMap();
      } else {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
          initMap();
          setMapLoaded(true);
        };

        script.onerror = () => {
          console.error("Google Maps API failed to load.");
        };
      }
    };

    window.initMap = () => {
      new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 28.6139, lng: 77.2090 }, // Example: Delhi
        zoom: 10,
      });
    };

    loadGoogleMaps();
  }, [apiKey]);

  return (
    <div>
      {mapLoaded ? <p>Map Loaded Successfully!</p> : <p>Loading Map...</p>}
      <div id="map" style={{ width: "100%", height: "400px" }} />
    </div>
  );
};



