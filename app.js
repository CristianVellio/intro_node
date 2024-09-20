const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hola Mundo");
});

app.get("/contacto", function (req, res) {
  res.send("Contacto");
});

app.listen(3000);
