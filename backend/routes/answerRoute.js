const express = require("express");
const router = express.Router();

const { allAnswer, postAnswer } = require("../controller/answerController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/postanswers", postAnswer);
router.get("/all-answers", allAnswer);


module.exports = router;

