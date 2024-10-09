// Archivo index o Routes de la aplicación

const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

router.get("/contacto", function (req, res) {
  res.sendFile(path.join(__dirname + "/../public/contacto.html"));
});

router.get("/nosotros", function (req, res) {
  res.sendFile(path.join(__dirname + "/../public/nosotros.html"));
});

router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/404.html"));
});

module.exports = router;
