import React, { useEffect } from "react";
import { useLoadGoogleMaps } from "../hooks/useLoadGoogleMaps";

export default function StoreMap() {
  const apiKey = "AIzaSyBdWYbcKRkNZSnnlpVxXpv45fu0F8B2MVI"; // Replace with your actual API key
  const loaded = useLoadGoogleMaps(apiKey);

  useEffect(() => {
    if (loaded) {
      new google.maps.Map(document.getElementById("map"), {
        center: { lat: 28.6139, lng: 77.2090 }, // Change to your coordinates
        zoom: 10,
      });
    }
  }, [loaded]);

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
};


