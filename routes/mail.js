const express = require("express");
const { subscribe, contact } = require("../controllers/mail");

const router = express.Router();

router.route("/subscribe").post(subscribe)

router.route("/contact").post(contact)

module.exports = router;