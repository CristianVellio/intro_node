const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/index");

//Midleware para servir contenido estáticos
app.use(express.static("public"));

app.use("/", "routes");

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
