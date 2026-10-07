const WEATHER_BASE_URL =
  "https://api.open-meteo.com/v1/forecast";

const GEO_BASE_URL =
  "https://geocoding-api.open-meteo.com/v1/search";

async function getWeather(latitude, longitude) {
  const url = new URL(WEATHER_BASE_URL);

  url.searchParams.set("latitude", latitude);
  url.searchParams.set("longitude", longitude);

  url.searchParams.set(
    "current",
    [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "is_day",
      "precipitation",
      "weather_code",
      "cloud_cover",
      "pressure_msl",
      "wind_speed_10m",
      "wind_direction_10m",
    ].join(",")
  );

  url.searchParams.set(
    "hourly",
    [
      "temperature_2m",
      "apparent_temperature",
      "precipitation_probability",
      "precipitation",
      "weather_code",
      "relative_humidity_2m",
      "wind_speed_10m",
    ].join(",")
  );

  url.searchParams.set(
    "daily",
    [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "apparent_temperature_max",
      "apparent_temperature_min",
      "sunrise",
      "sunset",
      "uv_index_max",
      "precipitation_sum",
      "precipitation_probability_max",
    ].join(",")
  );

  url.searchParams.set("timezone", "auto");
  url.searchParams.set("forecast_days", "7");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      "Unable to fetch weather data"
    );
  }

  return response.json();
}

async function searchCities(city) {
  const url = new URL(GEO_BASE_URL);

  url.searchParams.set("name", city);
  url.searchParams.set("count", "5");
  url.searchParams.set("language", "en");
  url.searchParams.set("format", "json");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      "Unable to search for cities"
    );
  }

  const data = await response.json();

  return data.results || [];
}

module.exports = {
  getWeather,
  searchCities,
};