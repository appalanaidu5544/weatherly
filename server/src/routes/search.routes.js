const express = require("express");

const {
  searchCitiesController,
} = require("../controllers/search.controller");

const router = express.Router();

router.get(
  "/search",
  searchCitiesController
);

module.exports = router;