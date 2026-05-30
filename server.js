const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

const prayerRoute = require("./routes/prayer");
const quranRoute = require("./routes/quran");

app.use("/prayer", prayerRoute);
app.use("/quran", quranRoute);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server running");
});
