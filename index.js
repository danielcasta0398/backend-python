const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.post("/imagen", (req, res) => {
  const suma = 5 + 5;

  const resultado = suma * 80;

  const resultadoFinal = "Torta de cafe con la suma de" + resultado / 2;

  res.status(200).json({ resultadoFinal });
});

app.post("/login", (req, res) => {
  res.status(200).json({ msg: "Iniciaste sesion correctamente" });
});

const PORT = 4040;

app.listen(PORT, () => {
  console.log("El servidor esta encendido");
});
