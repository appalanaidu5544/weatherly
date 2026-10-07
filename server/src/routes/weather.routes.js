const express = require("express");

const {
  getWeatherController,
} = require("../controllers/weather.controller");

const router = express.Router();

router.get(
  "/weather",
  getWeatherController
);

module.exports = router;