import React, { useEffect } from "react";

export default function StoreMap (){
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=https://maps.app.goo.gl/URtS8wWZkue4Py588&callback=initMap`;
    script.async = true;
    document.body.appendChild(script);

    window.initMap = function () {
      new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.7128, lng: -74.006 }, // Set to your location
        zoom: 10,
      });
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};


