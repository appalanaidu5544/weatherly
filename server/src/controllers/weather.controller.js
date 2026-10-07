const {
  getWeather,
} = require("../services/weather.service");

async function getWeatherController(req, res) {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      return res.status(400).json({
        success: false,
        message:
          "Latitude and longitude are required",
      });
    }

    const latitude = Number(lat);
    const longitude = Number(lon);

    if (
      Number.isNaN(latitude) ||
      Number.isNaN(longitude)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Latitude and longitude must be valid numbers",
      });
    }

    const weather = await getWeather(
      latitude,
      longitude
    );

    res.json({
      success: true,
      data: weather,
    });
  } catch (error) {
    console.error(
      "Weather Controller Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Unable to fetch weather data",
    });
  }
}

module.exports = {
  getWeatherController,
};