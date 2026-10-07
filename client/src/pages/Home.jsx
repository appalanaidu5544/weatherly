import { useEffect, useState } from "react";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CurrentWeather from "../components/CurrentWeather";
import WeatherMetrics from "../components/WeatherMetrics";
import HourlyForecast from "../components/HourlyForecast";
import DailyForecast from "../components/DailyForecast";
import SunriseSunset from "../components/SunriseSunset";
import LocationButton from "../components/LocationButton";
import ErrorState from "../components/ErrorState";

import LoadingSkeleton from "../components/LoadingSkeleton";

import {
  getWeather,
  getLocationName,
} from "../services/weatherApi";

const DEFAULT_LOCATION = {
  name: "Hyderabad",
  admin1: "Telangana",
  country: "India",
  latitude: 17.38405,
  longitude: 78.45636,
};

function Home({ darkMode, onToggleDarkMode }) {
  const [location, setLocation] = useState(DEFAULT_LOCATION);

  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function loadWeather() {
    try {
      setLoading(true);
      setError(null);

      const data = await getWeather(
        location.latitude,
        location.longitude
      );

      setWeather(data);
    } catch (err) {
      console.error(err);

      setWeather(null);
      setError(
        "We couldn't load weather data. Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function loadWeather() {
      try {
        setLoading(true);
        setError(null);

        const data = await getWeather(
          location.latitude,
          location.longitude
        );

        setWeather(data);
      } catch (err) {
        console.error(err);

        setWeather(null);
        setError(
          "We couldn't load weather data. Please check your internet connection and try again."
        );
      } finally {
        setLoading(false);
      }
    }

    loadWeather();
  }, [location]);



  function handleLocationSelect(newLocation) {
    setLocation({
      name: newLocation.name,
      admin1: newLocation.admin1,
      country: newLocation.country,
      latitude: newLocation.latitude,
      longitude: newLocation.longitude,
    });
  }

  async function handleCurrentLocation(coords) {
    try {
      setLoading(true);
      setError(null);

      const location = await getLocationName(
        coords.latitude,
        coords.longitude
      );

      setLocation(location);
    } catch (err) {
      console.error(err);

      setLocation({
        name: "Current Location",
        admin1: "",
        country: "",
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    } finally {
      setLoading(false);
    }
  }

  function handleHeaderLocation() {
    if (!navigator.geolocation) {
      setError(
        "Geolocation is not supported by your browser."
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        handleCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error);

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

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <ErrorState
        message={error}
        onRetry={() => {
          setLocation((currentLocation) => ({
            ...currentLocation,
          }));
        }}
      />
    );
  }

  return (
    <div className="app">
      <Header
        darkMode={darkMode}
        onToggleDarkMode={onToggleDarkMode}
        onLocation={handleHeaderLocation}
      />

      <main className="weather-container">

        <SearchBar
          onLocationSelect={handleLocationSelect}
        />

        <LocationButton
          onLocation={handleCurrentLocation}
        />

        <CurrentWeather
          weather={weather}
          location={location}
        />

        <WeatherMetrics
          weather={weather}
        />

        <HourlyForecast
          weather={weather}
        />

        <DailyForecast
          weather={weather}
        />

        <SunriseSunset
          weather={weather}
        />

      </main>
    </div>
  );
}

export default Home;