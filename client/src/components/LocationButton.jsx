import { useState } from "react";
import { MapPin } from "lucide-react";

function LocationButton({ onLocation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleLocation() {
    if (!navigator.geolocation) {
      setError(
        "Geolocation is not supported by your browser."
      );
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } =
          position.coords;

        setLoading(false);

        onLocation({
          latitude,
          longitude,
        });
      },

      (error) => {
        console.error(error);

        setLoading(false);

        if (error.code === 1) {
          setError(
            "Location permission was denied. Please allow location access in your browser settings."
          );
        } else if (error.code === 2) {
          setError(
            "Your location could not be determined."
          );
        } else if (error.code === 3) {
          setError(
            "Location request timed out. Please try again."
          );
        } else {
          setError(
            "Unable to get your current location."
          );
        }
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }

  return (
    <div className="location-control">
      <button
        type="button"
        className="location-button"
        onClick={handleLocation}
        disabled={loading}
      >
        <MapPin size={18} />

        <span>
          {loading
            ? "Getting Location..."
            : "Use My Location"}
        </span>
      </button>

      {error && (
        <p className="location-error">
          {error}
        </p>
      )}
    </div>
  );
}

export default LocationButton;