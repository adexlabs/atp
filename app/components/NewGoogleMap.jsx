// "use client";
import { useEffect, useRef } from "react";

const NewGoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat:  22.6942665, lng: -7.0574914 },
        zoom: 1.5,
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