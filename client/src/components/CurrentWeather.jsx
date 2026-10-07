import { MapPin } from "lucide-react";

import WeatherIcon from "./WeatherIcon";

import { getWeatherInfo } from "../utils/weatherCodes";
import { getWeatherBackground } from "../utils/weatherUtils";

import clearSky from "../assets/weather-backgrounds/clear-sky.jpg";
import clearNight from "../assets/weather-backgrounds/clear-night.jpg";
import partlyCloudyDay from "../assets/weather-backgrounds/partly-cloudy-day.jpg";
import partlyCloudyNight from "../assets/weather-backgrounds/partly-cloudy-night.jpg";
import overcast from "../assets/weather-backgrounds/overcast.jpg";
import fog from "../assets/weather-backgrounds/fog.jpg";
import drizzle from "../assets/weather-backgrounds/drizzle.jpg";
import rain from "../assets/weather-backgrounds/rain.jpg";
import snow from "../assets/weather-backgrounds/snow.jpg";
import thunderstorm from "../assets/weather-backgrounds/thunderstorm.jpg";

function CurrentWeather({ weather, location }) {
  const { current } = weather;

  const backgroundName = getWeatherBackground(
    current.weather_code,
    current.is_day
  );

  const backgrounds = {
    "clear-sky": clearSky,
    "clear-night": clearNight,
    "partly-cloudy-day": partlyCloudyDay,
    "partly-cloudy-night": partlyCloudyNight,
    overcast: overcast,
    fog: fog,
    drizzle: drizzle,
    rain: rain,
    snow: snow,
    thunderstorm: thunderstorm,
  };

  const backgroundImage =
    backgrounds[backgroundName];

  const weatherInfo = getWeatherInfo(
    current.weather_code
  );

  function getWeatherIcon(icon) {
    switch (icon) {
      case "sun":
        return <Sun size={72} strokeWidth={1.5} />;

      case "partly-cloudy":
        return (
          <CloudSun
            size={72}
            strokeWidth={1.5}
          />
        );

      case "cloud":
        return (
          <Cloud
            size={72}
            strokeWidth={1.5}
          />
        );

      case "fog":
        return (
          <CloudFog
            size={72}
            strokeWidth={1.5}
          />
        );

      case "rain":
        return (
          <CloudRain
            size={72}
            strokeWidth={1.5}
          />
        );

      case "snow":
        return (
          <Snowflake
            size={72}
            strokeWidth={1.5}
          />
        );

      case "thunderstorm":
        return (
          <CloudLightning
            size={72}
            strokeWidth={1.5}
          />
        );

      default:
        return (
          <Cloud
            size={72}
            strokeWidth={1.5}
          />
        );
    }
  }

  return (
    <section
      className="current-weather"
      style={{
        "--weather-background": `url(${backgroundImage})`,
      }}
    >
      <div className="location-info">
        <div className="location-name">
          <MapPin size={18} />

          <span>{location.name}</span>
        </div>

        {(location.admin1 || location.country) && (
          <p>
            {location.admin1
              ? `${location.admin1}, `
              : ""}
            {location.country}
          </p>
        )}
      </div>

      <div className="weather-main">
        <div className="weather-icon">
          <WeatherIcon
            code={current.weather_code}
            size={72}
            strokeWidth={1.5}
          />
        </div>

        <div className="temperature">
          <span className="temperature-value">
            {Math.round(
              current.temperature_2m
            )}
          </span>

          <span className="temperature-unit">
            °C
          </span>
        </div>

        <h2>{weatherInfo.description}</h2>

        <p className="feels-like">
          Feels like{" "}
          {Math.round(
            current.apparent_temperature
          )}
          °C
        </p>
      </div>
    </section>
  );
}

export default CurrentWeather;