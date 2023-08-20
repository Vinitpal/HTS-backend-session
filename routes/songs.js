const express = require("express");
const { getSongs, addSong } = require("../controllers/songs");
const router = express.Router();

router.get("/api/v1/songs", getSongs);
router.post("/api/v1/songs", addSong);

module.exports = router;
