const express = require("express");

const app = express();

app.post("/imagen", (req, res) => {
  const suma = 5 + 5;

  const resultado = suma * 80;

  const resultadoFinal = res.status(200).json({ msg: "Tu imagen es cafe" });
});

const PORT = 4040;

app.listen(PORT, () => {
  console.log("El servidor esta encendido");
});
