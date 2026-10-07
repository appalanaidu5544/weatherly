const express = require("express");
const cors = require("cors");

const weatherRoutes = require("./routes/weather.routes");
const searchRoutes = require("./routes/search.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Weather App API is running",
  });
});

app.use("/api", weatherRoutes);
app.use("/api", searchRoutes);

module.exports = app;