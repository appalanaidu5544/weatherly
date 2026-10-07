import {
  Droplets,
  Wind,
  Gauge,
  Cloud,
  Sun,
  Umbrella,
} from "lucide-react";

import { getWindDirection } from "../utils/weatherUtils";

function WeatherMetrics({ weather }) {
  const { current, daily } = weather;

  const metrics = [
    {
      label: "Humidity",
      value: `${current.relative_humidity_2m}%`,
      icon: Droplets,
    },
    {
      label: "Wind",
      value: `${current.wind_speed_10m} km/h (${getWindDirection(current.wind_direction_10m)})`,
      icon: Wind,
    },
    {
      label: "Pressure",
      value: `${Math.round(current.pressure_msl)} hPa`,
      icon: Gauge,
    },
    {
      label: "Cloud Cover",
      value: `${current.cloud_cover}%`,
      icon: Cloud,
    },
    {
      label: "UV Index",
      value: daily.uv_index_max[0].toFixed(1),
      icon: Sun,
    },
    {
      label: "Rain Chance",
      value: `${daily.precipitation_probability_max[0]}%`,
      icon: Umbrella,
    },
    {
      label: "Precipitation",
      value: `${daily.precipitation_sum[0]} mm`,
      icon: Droplets,
    },
    {
      label: "Feels Like",
      value: `${Math.round(current.apparent_temperature)}°C`,
      icon: Sun,
    },
  ];

  return (
    <section className="metrics-grid">
      {metrics.map((metric) => {
        const Icon = metric.icon;

        return (
          <div
            className="metric-card"
            key={metric.label}
          >
            <div className="metric-icon">
              <Icon size={20} />
            </div>

            <div>
              <p>{metric.label}</p>
              <strong>{metric.value}</strong>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default WeatherMetrics;