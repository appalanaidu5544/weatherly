import { Sunrise, Sunset } from "lucide-react";

function SunriseSunset({ weather }) {
  const { daily } = weather;

  function formatTime(time) {
    const date = new Date(time);

    return date.toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  return (
    <section className="forecast-section sun-section">
      <div className="section-header">
        <h2>Sunrise & Sunset</h2>
        <span>Today</span>
      </div>

      <div className="sunrise-sunset">
        <div className="sun-card">
          <div className="sun-card-icon">
            <Sunrise size={24} strokeWidth={1.8} />
          </div>

          <div className="sun-card-content">
            <span>Sunrise</span>
            <strong>
              {formatTime(daily.sunrise[0])}
            </strong>
          </div>
        </div>

        <div className="sun-card">
          <div className="sun-card-icon">
            <Sunset size={24} strokeWidth={1.8} />
          </div>

          <div className="sun-card-content">
            <span>Sunset</span>
            <strong>
              {formatTime(daily.sunset[0])}
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SunriseSunset;