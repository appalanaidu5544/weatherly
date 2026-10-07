import {
  Sun,
  CloudSun,
  Cloud,
  CloudRain,
  CloudLightning,
  Snowflake,
  CloudFog,
} from "lucide-react";

import { getWeatherInfo } from "../utils/weatherCodes";

function WeatherIcon({
  code,
  size = 32,
  strokeWidth = 1.8,
}) {
  const weatherInfo = getWeatherInfo(code);

  switch (weatherInfo.icon) {
    case "sun":
      return (
        <Sun
          size={size}
          strokeWidth={strokeWidth}
        />
      );

    case "partly-cloudy":
      return (
        <CloudSun
          size={size}
          strokeWidth={strokeWidth}
        />
      );

    case "cloud":
      return (
        <Cloud
          size={size}
          strokeWidth={strokeWidth}
        />
      );

    case "fog":
      return (
        <CloudFog
          size={size}
          strokeWidth={strokeWidth}
        />
      );

    case "rain":
      return (
        <CloudRain
          size={size}
          strokeWidth={strokeWidth}
        />
      );

    case "snow":
      return (
        <Snowflake
          size={size}
          strokeWidth={strokeWidth}
        />
      );

    case "thunderstorm":
      return (
        <CloudLightning
          size={size}
          strokeWidth={strokeWidth}
        />
      );

    default:
      return (
        <Cloud
          size={size}
          strokeWidth={strokeWidth}
        />
      );
  }
}

export default WeatherIcon;