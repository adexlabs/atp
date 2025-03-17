// "use client";
import { useEffect, useRef } from "react";

const NewGoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 51.508742, lng: -0.12085 },
        zoom: 5,
      });
    }
  }, []);

  return (
    <div>
      <div
        ref={mapRef}
        style={{ width: "100%", height: "400px", borderRadius: "10px" }}
      ></div>
      <script
        async
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDBMS1tN1aVb1EPpImw7EnfBRl5PGwewJo&callback=initMap`}
      ></script>
    </div>
  );
};

export default NewGoogleMap;