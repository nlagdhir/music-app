const express = require("express");
const { postMusics } = require("../controllers/postMusic.js");
const { getMusic } = require("../controllers/getMusic.js");
const { deleteMusic } = require("../controllers/deleteMusic.js");
const router = express.Router();
const { getMusicByEmail } = require("../controllers/getMusicByEmail.js");
const storage = require("../lib/multer.js");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "https://solo-music.vercel.app/upload");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });
// const upload = multer({ storage });

router.get("/", getMusic);
router.get("/:email", getMusicByEmail);
router.delete("/:id", deleteMusic);

router.post("/upload_music", storage.single("file"), postMusics);

module.exports = router;
