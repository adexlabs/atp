import { useEffect, useState } from "react";

export function useLoadGoogleMaps(apiKey) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window.google && window.google.maps) {
      setLoaded(true);
      return;
    }

    window.initGoogleMaps = () => {
      setLoaded(true);
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMaps`;
    script.async = true;
    script.defer = true;
    script.onerror = () => console.error("Google Maps API failed to load.");
    document.head.appendChild(script);
  }, [apiKey]);

  return loaded;
}
