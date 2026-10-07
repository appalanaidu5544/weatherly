const {
  searchCities,
} = require("../services/weather.service");

async function searchCitiesController(req, res) {
  try {
    const { city } = req.query;

    if (!city || !city.trim()) {
      return res.status(400).json({
        success: false,
        message: "City name is required",
      });
    }

    const results = await searchCities(
      city.trim()
    );

    res.json({
      success: true,
      data: results,
    });
  } catch (error) {
    console.error(
      "Search Controller Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Unable to search for cities",
    });
  }
}

module.exports = {
  searchCitiesController,
};