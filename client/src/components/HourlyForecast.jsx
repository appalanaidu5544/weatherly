import { Droplets } from "lucide-react";
import WeatherIcon from "./WeatherIcon";

function HourlyForecast({ weather }) {
  const { hourly } = weather;

  const hours = hourly.time.slice(0, 12);

  function formatHour(time) {
    const date = new Date(time);

    return date.toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  return (
    <section className="forecast-section hourly-section">
      <div className="section-header">
        <h2>Hourly Forecast</h2>
        <span>Next 12 hours</span>
      </div>

      <div className="hourly-list">
        {hours.map((time, index) => {
          const temperature =
            hourly.temperature_2m[index];

          const precipitationProbability =
            hourly.precipitation_probability[index];

          const weatherCode =
            hourly.weather_code[index];

          return (
            <div
              className={`hourly-card ${index === 0 ? "hourly-card-current" : ""
                }`}
              key={time}
            >
              <p className="hourly-time">
                {index === 0
                  ? "Now"
                  : formatHour(time)}
              </p>

              <div className="hourly-icon">
                <WeatherIcon
                  code={weatherCode}
                  size={30}
                  strokeWidth={1.8}
                />
              </div>

              <strong className="hourly-temperature">
                {Math.round(temperature)}°
              </strong>

              <div className="hourly-rain">
                <Droplets size={13} />
                <span>
                  {precipitationProbability}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HourlyForecast;