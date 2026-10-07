export const WEATHER_CODES = {
  0: {
    description: "Clear Sky",
    icon: "sun",
  },

  1: {
    description: "Mainly Clear",
    icon: "partly-cloudy",
  },

  2: {
    description: "Partly Cloudy",
    icon: "partly-cloudy",
  },

  3: {
    description: "Overcast",
    icon: "cloud",
  },

  45: {
    description: "Fog",
    icon: "fog",
  },

  48: {
    description: "Rime Fog",
    icon: "fog",
  },

  51: {
    description: "Light Drizzle",
    icon: "rain",
  },

  53: {
    description: "Moderate Drizzle",
    icon: "rain",
  },

  55: {
    description: "Dense Drizzle",
    icon: "rain",
  },

  61: {
    description: "Slight Rain",
    icon: "rain",
  },

  63: {
    description: "Moderate Rain",
    icon: "rain",
  },

  65: {
    description: "Heavy Rain",
    icon: "rain",
  },

  71: {
    description: "Slight Snow",
    icon: "snow",
  },

  73: {
    description: "Moderate Snow",
    icon: "snow",
  },

  75: {
    description: "Heavy Snow",
    icon: "snow",
  },

  80: {
    description: "Rain Showers",
    icon: "rain",
  },

  81: {
    description: "Moderate Rain Showers",
    icon: "rain",
  },

  82: {
    description: "Heavy Rain Showers",
    icon: "rain",
  },

  95: {
    description: "Thunderstorm",
    icon: "thunderstorm",
  },

  96: {
    description: "Thunderstorm with Hail",
    icon: "thunderstorm",
  },

  99: {
    description: "Thunderstorm with Heavy Hail",
    icon: "thunderstorm",
  },
};

export function getWeatherInfo(code) {
  return (
    WEATHER_CODES[code] || {
      description: "Unknown",
      icon: "cloud",
    }
  );
}