const express = require("express");
const app = express();
const port = 3000;

//Midleware para servir contenido estáticos
app.use(express.static("public"));

/*
app.get("/", function (req, res) {
  res.send("Hola Mundo");
});
*/

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

//Ruta para la pagina contacto
app.get("/contacto", function (req, res) {
  res.sendFile(__dirname + "/public/contacto.html");
});

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
