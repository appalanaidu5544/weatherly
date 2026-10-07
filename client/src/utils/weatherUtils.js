export function getWindDirection(degrees) {
  const directions = [
    "N",
    "NE",
    "E",
    "SE",
    "S",
    "SW",
    "W",
    "NW",
  ];

  const index = Math.round(degrees / 45) % 8;

  return directions[index];
}

export function getUVLevel(uvIndex) {
  if (uvIndex <= 2) return "Low";
  if (uvIndex <= 5) return "Moderate";
  if (uvIndex <= 7) return "High";
  if (uvIndex <= 10) return "Very High";
  return "Extreme";
}


/* ----------------------------------------
   Weather Background
----------------------------------------- */

export function getWeatherBackground(
  weatherCode,
  isDay
) {
  // Clear Sky
  if (weatherCode === 0) {
    return isDay
      ? "clear-sky"
      : "clear-night";
  }

  // Mainly Clear / Partly Cloudy
  if (weatherCode === 1 || weatherCode === 2) {
    return isDay
      ? "partly-cloudy-day"
      : "partly-cloudy-night";
  }

  // Overcast
  if (weatherCode === 3) {
    return "overcast";
  }

  // Fog
  if (
    weatherCode === 45 ||
    weatherCode === 48
  ) {
    return "fog";
  }

  // Drizzle
  if (
    weatherCode === 51 ||
    weatherCode === 53 ||
    weatherCode === 55
  ) {
    return "drizzle";
  }

  // Rain / Rain Showers
  if (
    weatherCode === 61 ||
    weatherCode === 63 ||
    weatherCode === 65 ||
    weatherCode === 80 ||
    weatherCode === 81 ||
    weatherCode === 82
  ) {
    return "rain";
  }

  // Snow
  if (
    weatherCode === 71 ||
    weatherCode === 73 ||
    weatherCode === 75
  ) {
    return "snow";
  }

  // Thunderstorm
  if (
    weatherCode === 95 ||
    weatherCode === 96 ||
    weatherCode === 99
  ) {
    return "thunderstorm";
  }

  // Fallback
  return isDay
    ? "clear-sky"
    : "clear-night";
}