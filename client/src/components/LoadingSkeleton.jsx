function LoadingSkeleton() {
  return (
    <div className="loading-page">
      <div className="loading-container">

        {/* Header */}
        <div className="skeleton-header">
          <div className="skeleton skeleton-brand" />

          <div className="skeleton-header-actions">
            <div className="skeleton skeleton-button" />
            <div className="skeleton skeleton-icon-button" />
          </div>
        </div>

        {/* Search */}
        <div className="skeleton skeleton-search" />

        {/* Current Weather */}
        <div className="skeleton-current">
          <div className="skeleton skeleton-location" />
          <div className="skeleton skeleton-weather-icon" />
          <div className="skeleton skeleton-temperature" />
          <div className="skeleton skeleton-condition" />
          <div className="skeleton skeleton-feels" />
        </div>

        {/* Metrics */}
        <div className="skeleton-metrics">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              className="skeleton skeleton-metric"
              key={index}
            />
          ))}
        </div>

        {/* Hourly */}
        <div className="skeleton-section-title" />

        <div className="skeleton-hourly">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              className="skeleton skeleton-hourly-card"
              key={index}
            />
          ))}
        </div>

        {/* Daily */}
        <div className="skeleton-section-title" />

        <div className="skeleton-daily">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              className="skeleton skeleton-daily-row"
              key={index}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default LoadingSkeleton;