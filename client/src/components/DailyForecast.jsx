import { CloudRain } from "lucide-react";

import WeatherIcon from "./WeatherIcon";
import { getWeatherInfo } from "../utils/weatherCodes";

function DailyForecast({ weather }) {
  const { daily } = weather;

  function formatDay(dateString, index) {
    if (index === 0) {
      return "Today";
    }

    const date = new Date(
      `${dateString}T00:00:00`
    );

    return date.toLocaleDateString("en-IN", {
      weekday: "short",
    });
  }

  function formatDate(dateString) {
    const date = new Date(
      `${dateString}T00:00:00`
    );

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    });
  }

  return (
    <section className="forecast-section daily-section">
      <div className="section-header">
        <h2>7-Day Forecast</h2>
        <span>Daily</span>
      </div>

      <div className="daily-list">
        {daily.time.map((date, index) => {
          const weatherInfo = getWeatherInfo(
            daily.weather_code[index]
          );

          return (
            <div
              className={`daily-card ${
                index === 0 ? "daily-card-current" : ""
              }`}
              key={date}
            >
              <div className="daily-day">
                <strong>
                  {formatDay(date, index)}
                </strong>

                <span>
                  {formatDate(date)}
                </span>
              </div>

              <div className="daily-icon">
                <WeatherIcon
                  code={daily.weather_code[index]}
                  size={30}
                  strokeWidth={1.8}
                />
              </div>

              <div className="daily-condition">
                <span>
                  {weatherInfo.description}
                </span>
              </div>

              <div className="daily-temperature">
                <strong>
                  {Math.round(
                    daily.temperature_2m_max[index]
                  )}
                  °
                </strong>

                <span>
                  {Math.round(
                    daily.temperature_2m_min[index]
                  )}
                  °
                </span>
              </div>

              <div className="daily-rain">
                <CloudRain size={15} />

                <span>
                  {
                    daily
                      .precipitation_probability_max[
                      index
                    ]
                  }
                  %
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default DailyForecast;