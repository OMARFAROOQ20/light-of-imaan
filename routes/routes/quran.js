const express = require("express");
const axios = require("axios");

const router = express.Router();

// Get all surahs
router.get("/surahs", async (req, res) => {
  try {
    const response = await axios.get("https://api.alquran.cloud/v1/surah");
    res.json(response.data.data);
  } catch (error) {
    res.status(500).send("Error fetching surahs");
  }
});

// Get single surah (Arabic + English)
router.get("/surah/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const response = await axios.get(
      `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,en.asad`
    );

    res.json(response.data.data);
  } catch (error) {
    res.status(500).send("Error fetching surah");
  }
});

module.exports = router;
